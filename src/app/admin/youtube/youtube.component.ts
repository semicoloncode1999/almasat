import { youtube } from './../../modules/interfaces/youtube.interface';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { YoutubeDataService } from 'src/app/modules/services/youtube-data.service';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss', '../../modules/css-styles/admin.form.product.styles.css',
    '../../modules/css-styles/change-position.drag-drop.css', '../../modules/css-styles/admin.styles.css']
})
export class YoutubeComponent implements OnDestroy {

  controlView: string = "show";
  youtubeArray: youtube[] = [];
  globalObject: youtube = {} as youtube;
  globalObjectKey: string = "";
  subscribtions: Subscription[] = []
  youtube = this.formBuilder.group({
    id: [new Date().getTime()],
    title: ["", Validators.required],
    // details:["",Validators.required],
    url: ["", Validators.required],
  })

  get videoLink() {
    return this.youtube.get("url")?.value
  }

  constructor(private formBuilder: FormBuilder, private toastr: ToastrService, private youtubeServ: YoutubeDataService) {
    this.getYoutubeVideos()
  }

  getYoutubeVideos(): void {
    this.youtubeArray = []
    this.subscribtions.push(this.youtubeServ.getyoutubes().subscribe({
      next: (data) => {
        for (const key in data) {
          this.youtubeArray.push(data[key])
        }
      }
    }))
  }

  // ------------------------------- Reset Data ------------------------------
  resetData() {
    this.controlView = 'add'
    this.youtube.patchValue({
      id: new Date().getTime(),
      title: '',
      url: '',
    })
    this.globalObject = {} as youtube;
  }

  setVideo(event: any) {
    let setUrl: string = event.target.value.toString();
    if (setUrl.startsWith("https://www.youtube.com/"))
      setUrl = `https://www.youtube.com/embed/${setUrl.split("watch?v=")[1]}`;
    else
      setUrl = `https://www.youtube.com/embed/${setUrl.split("https://youtu.be/", setUrl.indexOf("?si="))[1]}`;
    this.youtube.patchValue({
      url: setUrl
    })
  }

  // ---------------------------- submit ----------------------------
  submit() {
    if (this.youtube.valid) {
      if (this.controlView == "add")
        this.youtube.patchValue({ id: new Date().getTime() })
      this.subscribtions.push(this.youtubeServ.create(this.globalObjectKey, this.controlView, this.youtube.value).subscribe(() => {
        this.toastr.success("youtube added successfully")
        // this.getYoutubeVideos();
        // this.controlView = "show"
        location.reload()
      }))
    } else
      this.toastr.error("complete all youtube data")
  }

  // ---------------------------- get item ----------------------------
  getItem(item: youtube) {
    this.globalObject = item;
    this.subscribtions.push(this.youtubeServ.getyoutubes().subscribe({
      next: data => {
        for (const key in data) {
          if (data[key].id == item.id) {
            this.globalObjectKey = key;
            break
          }
        }
      }
    }))
    if (this.controlView == 'edit') {
      this.youtube.patchValue({
        id: item.id,
        title: item.title,
        url: item.url,
      })
    }
  }

  // ---------------------------- delete item ----------------------------
  deleteItem() {
    this.youtubeServ.deleteItem(this.globalObjectKey)
  }


  ngOnDestroy(): void {
    for (const iterator of this.subscribtions) {
      iterator.unsubscribe()
    }
  }
}
