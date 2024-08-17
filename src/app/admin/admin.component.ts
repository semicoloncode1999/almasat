import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  viewChart:boolean=false;
  chart!: Chart;

  constructor(private route:Router){
    route.events.subscribe(url=>{
      if(url instanceof NavigationEnd){
        if( url.url.endsWith("/admin")){
          this.viewChart=true
        }else {
          this.viewChart=false
        }
      }
    })
  }

  ngOnInit(): void {
    this.chart = new Chart("myChart", {
    type: 'bar',
    data: {
      labels: ['speed', 'secure ', 'storage' , 'performance'],
      datasets: [{
        label: '#  website rate',
        data: [19, 18, 15 , 17,],
        backgroundColor: ['#c30c0c', '#84ff78', '#eee', '#2f2525'],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  }

}
