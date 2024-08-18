import { customOptions } from './../../modules/carasouel';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { product } from 'src/app/modules/interfaces/product.interface';
import { DataService } from 'src/app/modules/services/data.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ViewportScroller } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';
import { HomeMsgService } from 'src/app/modules/services/home-msg.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', '../../modules/css-styles/producst.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  ringsInHome: product[] = []
  rosaryInHome: product[] = []
  Subscriptions: Subscription[] = [];
  customOptions: OwlOptions = customOptions;
  MessageForm = this.fromBuilder.group({
    id: [new Date().getTime()],
    name: ["", Validators.required],
    email: ["", Validators.required],
    phone: ["", Validators.required],
    msg: ["", Validators.required],
  });
  msgSent: string = ""

  constructor(private dataServ: DataService, private scoller: ViewportScroller, private toastr: ToastrService,
    private fromBuilder: FormBuilder, private userHomeMsgServ: HomeMsgService) { }

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    this.ringsInHome = []
    this.rosaryInHome = []
    this.Subscriptions.push(
      this.dataServ.getProducts("ring").subscribe(data => {
        for (const key in data) {
          if (data[key].showOnHome == "true")
            this.ringsInHome.push(data[key])
        }
      })
    )
    this.Subscriptions.push(
      this.dataServ.getProducts("rosary").subscribe(data => {
        for (const key in data) {
          if (data[key].showOnHome == "true")
            this.rosaryInHome.push(data[key])
        }
      })
    )
  }

  sendUserMssage() {
    if (this.MessageForm.valid)
      this.Subscriptions.push(
        this.userHomeMsgServ.sendUserMssage(this.MessageForm.value).subscribe((resolve) => {
          this.toastr.success("تم ارسال الرسالة بنجاح");
          this.msgSent = "تم ارسال الرسالة بنجاح"
        }, (reject) => {
          this.toastr.error("لم يتم ارسال الرسالة")
          this.msgSent = "لم يتم ارسال الرسالة"
        }))
    else
      this.toastr.error("يرجي ملئ بيانات بشكل كامل")
  }

  scrollTo() {
    this.scoller.scrollToAnchor("pro")
  }

  ngOnDestroy() {
    for (const item of this.Subscriptions) {
      item.unsubscribe()
    }
  }
}
