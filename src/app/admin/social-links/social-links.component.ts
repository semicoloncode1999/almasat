import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { AboutUsDataService } from 'src/app/modules/services/about-us-data.service';
import { CountryCodesService } from 'src/app/modules/services/country-codes.service';
import { SocialMediaService } from 'src/app/modules/services/social-media.service';

@Component({
  selector: 'app-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.scss', '../../modules/css-styles/admin.form.product.styles.css', '../../modules/css-styles/change-position.drag-drop.css']
})
export class SocialLinksComponent implements OnInit , OnDestroy {

  arabCountryCodes: string[] = this.arabCountryCodesServ.arabCountryCodes;
  subscribtions: Subscription[] = []

  whatsapp = this.formBuilder.group({
    // id: [new Date().getTime()],
    phone: ["", Validators.required],
    countryCode: ["", Validators.required],
    hidden: ["false", Validators.required],
  })

  instagram = this.formBuilder.group({
    // id: [new Date().getTime()],
    url: ["", [Validators.required, Validators.pattern(/(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/)]],
    hidden: ["false", Validators.required],
  })

  snapchat = this.formBuilder.group({
    // id: [new Date().getTime()],
    url: ["", [Validators.required, Validators.pattern(/(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/)]],
    hidden: ["false", Validators.required],
  })

  facebook = this.formBuilder.group({
    // id: [new Date().getTime()],
    url: ["", [Validators.required, Validators.pattern(/(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/)]],
    hidden: ["false", Validators.required],
  })

  tiktok = this.formBuilder.group({
    // id: [new Date().getTime()],
    url: ["", [Validators.required, Validators.pattern(/(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/)]],
    hidden: ["false", Validators.required],
  })

  twitterX = this.formBuilder.group({
    // id: [new Date().getTime()],
    url: ["", [Validators.required, Validators.pattern(/(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/)]],
    hidden: ["false", Validators.required],
  })

  constructor(private formBuilder: FormBuilder, private toastr: ToastrService,
    private arabCountryCodesServ: CountryCodesService, private socialServ: SocialMediaService) { }

  ngOnInit(): void {
    this.subscribtions.push(this.socialServ.getSocialLinks().subscribe(data => {

      this.whatsapp.patchValue({
        phone: data.whatsapp.phone,
        countryCode: data.whatsapp.countryCode,
        hidden: data.whatsapp.hidden,
      })

      this.instagram.patchValue({
        hidden: data.instagram.hidden,
        url: data.instagram.url,
      })

      this.snapchat.patchValue({
        hidden: data.snapchat.hidden,
        url: data.snapchat.url,
      })

      this.facebook.patchValue({
        hidden: data.facebook.hidden,
        url: data.facebook.url,
      })

      this.tiktok.patchValue({
        hidden: data.tiktok.hidden,
        url: data.tiktok.url,
      })

      this.twitterX.patchValue({
        hidden: data.twitterX.hidden,
        url: data.twitterX.url,
      })
    }))
  }

  submitWhatsapp() {
    if (this.whatsapp.valid)
      this.socialServ.socialWhatsappLinks(this.whatsapp.value).subscribe(() => {
        this.toastr.success("whatsapp link added")
      })
      else
      this.toastr.error("please , add a valid whatsapp data")
  }

  submitInstagram() {
    if (this.instagram.valid)
      this.socialServ.socialLinks("instagram", this.instagram.value).subscribe(() => {
        this.toastr.success("instagram link added")
      })
      else
      this.toastr.error("please , add a valid instagram link","data incompleted!")
  }

  submitSnapchat() {
    if (this.snapchat.valid)
      this.socialServ.socialLinks("snapchat", this.snapchat.value).subscribe(() => {
        this.toastr.success("snapchat link added")
      })
      else
      this.toastr.error("please , add a valid snapchat link","data incompleted!")
  }

  submitFacebook() {
    if (this.facebook.valid)
      this.socialServ.socialLinks("facebook", this.facebook.value).subscribe(() => {
        this.toastr.success("facebook link added")
      })
      else
      this.toastr.error("please , add a valid facebook link","data incompleted!")
  }

  submitTiktok() {
    if (this.tiktok.valid)
      this.socialServ.socialLinks("tiktok", this.tiktok.value).subscribe(() => {
        this.toastr.success("tiktok link added")
      })
      else
      this.toastr.error("please , add a valid tiktok link","data incompleted!")
  }

  submitTwitterX() {
    if (this.twitterX.valid)
      this.socialServ.socialLinks("twitterX", this.twitterX.value).subscribe(() => {
        this.toastr.success("twitterX link added")
      })
    else
      this.toastr.error("please , add a valid twitterX link","data incompleted!")
  }

  ngOnDestroy(): void {
    for (const iterator of this.subscribtions) {
      iterator.unsubscribe()
    }
  }
}
