import { Component, OnDestroy } from '@angular/core';
import { Validators, FormBuilder, FormArray } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { aboutUs } from 'src/app/modules/interfaces/aboutUS.interface';
import { youtube } from 'src/app/modules/interfaces/youtube.interface';
import { AboutUsDataService } from 'src/app/modules/services/about-us-data.service';
import { YoutubeDataService } from 'src/app/modules/services/youtube-data.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss', '../../modules/css-styles/admin.form.product.styles.css',
    '../../modules/css-styles/change-position.drag-drop.css', '../../modules/css-styles/admin.styles.css']
})
export class AboutUsComponent implements OnDestroy {

  controlView: string = "show";
  aboutUsArray: aboutUs[] = [];
  globalObject: aboutUs = {} as aboutUs;
  globalObjectKey: string = "";
  subscribtions: Subscription[] = []
  aboutUs = this.formBuilder.group({
    id: [new Date().getTime()],
    title: ["", Validators.required],
    details: this.formBuilder.array([], Validators.required),
  })
  paginationSize: number = 50;
  paginationCurrentPage: number = 1;

  constructor(private formBuilder: FormBuilder, private toastr: ToastrService, private aboutUsServ: AboutUsDataService) {
    this.addFormDetails()
    this.getData()
  }

  get detailsArray() {
    return this.aboutUs.get("details") as FormArray;
  }

  // --------------------- add detail Item---------------------------
  addFormDetails() {
    let addFormItem = this.formBuilder.group({
      details: ["", Validators.required]
    })
    this.detailsArray.push(addFormItem)  // always push formGroup in any formArray
  }

  // --------------------- remove detail Item---------------------------
  removeDetail(index: number) {
    if (this.detailsArray.length > 1)
      this.detailsArray.removeAt(index)
  }

  // --------------------- get data ---------------------------
  getData(): void {
    this.aboutUsArray = []
    this.subscribtions.push(this.aboutUsServ.getaboutUs().subscribe({
      next: (data) => {
        for (const key in data) {
          this.aboutUsArray.push(data[key])
        }
      }
    }))
  }

  // ------------------------------- Reset Data ------------------------------
  resetData() {
    this.controlView = 'add'
    this.aboutUs.patchValue({
      id: new Date().getTime(),
      title: '',
    })
    this.detailsArray.clear()
    this.globalObject = {} as aboutUs;
    this.addFormDetails()
  }

  // ---------------------------- submit ----------------------------
  submit() {
    if (this.aboutUs.valid) {
      if (this.controlView == "add")
        this.aboutUs.patchValue({ id: new Date().getTime() })
      this.subscribtions.push(this.aboutUsServ.create(this.globalObjectKey, this.controlView, this.aboutUs.value).subscribe(() => {
        this.toastr.success("youtube added successfully")
        this.getData();
        this.controlView = "show"
      }))
    } else
      this.toastr.error("complete all youtube data")
  }

  // ---------------------------- get item ----------------------------
  getItem(item: aboutUs) {
    this.globalObject = item;
    this.subscribtions.push(this.aboutUsServ.getaboutUs().subscribe({
      next: data => {
        for (const key in data) {
          if (data[key].id == item.id) { this.globalObjectKey = key; break }
        }
      }
    }))
    if (this.controlView == 'edit') {
      this.resetData();
      this.controlView = 'edit'
      this.detailsArray.removeAt(0)
      this.aboutUs.patchValue({
        id: item.id,
        title: item.title,
      })
      for (const temp of item.details) {
        let addFormItem = this.formBuilder.group({
          details: temp.details
        })
        this.detailsArray.push(addFormItem)
      }
    }
  }

  // ---------------------------- delete item ----------------------------
  deleteItem() {
    this.aboutUsServ.deleteItem(this.globalObjectKey)
  }

  ngOnDestroy(): void {
    for (const iterator of this.subscribtions) {
      iterator.unsubscribe()
    }
  }
}
