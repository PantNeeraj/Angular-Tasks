import { Component, OnInit } from '@angular/core';
import { AppserviceService } from '../services/appservice.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit {
  settingData: any;
  isEmailDisplay:boolean=false;
  isIdDisplay:boolean=false;
  isRoleDisplay:boolean=false;
  selectedId:any
  constructor(private appservice: AppserviceService) {}

  ngOnInit(): void {
    this.appservice.getUser().subscribe((data) => {
      this.settingData = data;
      console.log(this.settingData);
    });
  }
  sortEmail(){
    this.isEmailDisplay=true
    this.isIdDisplay=false
    this.isRoleDisplay=false
  }
  sortId(){
    this.isIdDisplay=true
    this.isEmailDisplay=false
    this.isRoleDisplay=false
  }
  sortRole(){
    this.isRoleDisplay=true
    this.isIdDisplay=false
    this.isEmailDisplay=false
  }

  getElement() {
    this.settingData = this.settingData.filter((v:any) => v.id == this.selectedId) 
  }
  getElement1() {
    this.settingData = this.settingData.filter((v:any) => v.id == this.selectedId) 
  }
  getElement2() {
    this.settingData = this.settingData.filter((v:any) => v.id == this.selectedId) 
  }
  Reset(){
   this.selectedId=null
   this.appservice.getUser().subscribe((data) => {
    this.settingData = data;

  });
  }
}
