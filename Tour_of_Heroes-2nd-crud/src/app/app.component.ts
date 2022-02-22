import { Component } from '@angular/core';
import { CommonService } from 'common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title :string= 'Tour_of_Heroes';
  isEdit=false;

  userData:{name: string, email: string, mobile:number,password:any }={
    name:"",
    email:"",
    password:"",
    mobile:0
  }

  allUser: any[]=[];
  
  

 constructor(private commonService:CommonService){}

 ngOnInit(): void {
     this.getLatestUser()
 }

  addUser( ){
    console.log("user clicked", this.userData)
    this.commonService.createUser(this.userData).subscribe((response)=>{
      this.getLatestUser()
    })
  }
  getLatestUser(){
    this.commonService.getAllUser().subscribe((response:any)=>{
      this.allUser=response
      console.log(this.allUser)
    })

  }
editUser(user:any){
  this.isEdit=true;
  this.userData=user;
}
 
deleteUser(user:any){
  this.commonService.deleteUser(user).subscribe(()=>{
    this.getLatestUser();
  })
}
updateUser(){
  this.isEdit=!this.isEdit
  this.commonService.updateUser(this.userData).subscribe(()=>{
    this.getLatestUser()  
  })
}

}