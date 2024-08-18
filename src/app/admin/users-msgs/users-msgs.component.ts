import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { HomeMsgService } from 'src/app/modules/services/home-msg.service';

@Component({
  selector: 'app-users-msgs',
  templateUrl: './users-msgs.component.html',
  styleUrls: ['./users-msgs.component.scss']
})
export class UsersMsgsComponent {

  controlView: string = "show";
  userMsgArray: any[] = [];
  subscribtions: Subscription[] = []
  paginationSize: number = 50;
  paginationCurrentPage: number = 1;

  constructor(private toastr: ToastrService, private userMsgServ: HomeMsgService, private http:HttpClient) {
    this.getData()
  }

  // --------------------- get data ---------------------------
  getData(): void {
    this.userMsgArray = []
    this.subscribtions.push(this.userMsgServ.getUserMssage().subscribe({
      next: (data) => {
        for (const key in data) {
          this.userMsgArray.push(data[key])
        }
      }
    }))
  }

  // --------------------- delete Message ---------------------------
  deleteItem(id:number): void {
    this.subscribtions.push(this.userMsgServ.getUserMssage().subscribe({
      next: (data) => {
        for (const key in data) {
          if(data[key].id == id)
            this.subscribtions.push(this.http.delete(`${this.userMsgServ.url}/userMessages/${key}.json`).subscribe())
        }
      }
    }))
  }
}
