import { Component, OnInit } from '@angular/core';
import { AppserviceService } from '../services/appservice.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userData:any
  constructor(private appserviceservice:AppserviceService) { }

  ngOnInit(): void {

this.appserviceservice.getUser().subscribe((data)=>{
  this.userData=data

})



  }




}
