import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ThisReceiver } from '@angular/compiler';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  addUserForm: FormGroup = new FormGroup({});
  constructor(private formBuilder: FormBuilder,private userService:UserService,
    private _snackBar: MatSnackBar) {}

  ngOnInit():void {
    this.addUserForm = this.formBuilder.group({
      'userName': new FormControl(''),
      'email': new FormControl(''),
      'phone': new FormControl(''),
    });
  
  }

  createUser(){
    this.userService.addUser(this.addUserForm.value).subscribe((data)=>{
      this._snackBar.open("user created successfully")
    },error=>{
      console.log("Unable to create user")
    })
    
    
    
  }
}
