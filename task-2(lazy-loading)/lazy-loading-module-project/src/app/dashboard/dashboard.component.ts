import { Component, OnInit } from '@angular/core';
import { AppserviceService } from '../services/appservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  dashboardData: any;
  roleDataDevops: any[] = [];
  roleDataFront: any[] = [];
  roleDataBack: any[] = [];
  totalSales:any

  constructor(private appservice: AppserviceService) {}

  ngOnInit(): void {
    this.appservice.getDashboard().subscribe((data) => {
      this.dashboardData = data;
      console.log(this.dashboardData);
      console.log(this.dashboardData.length);
      this.getDashboard(data);
    });
  }
  getDashboard(data: any) {
    data.filter((e: any) => {
      console.log(e)
      if (e.role === 'devops developer') {
        this.roleDataDevops.push(e);
        console.log(this.roleDataDevops.length);
      } else if (e.role === "Front end developer") {
        this.roleDataFront.push(e);
        console.log(this.roleDataFront.length);
      }else if(e.role === "back end developer"){
        this.roleDataBack.push(e);
        console.log(this.roleDataBack.length);
      }
    });
   this.totalSales= data.reduce((a:any,b:any)=>{
         return b.sale + a
    },0)
   
  }
}
