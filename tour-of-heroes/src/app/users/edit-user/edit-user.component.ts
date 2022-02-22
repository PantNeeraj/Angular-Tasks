import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit {
  userId: any;
  userDetails: any;
  dataLoaded:boolean=false
  editUserForm: FormGroup = new FormGroup({});
  formBuilder: any;

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.dataLoaded=false
    this.activatedRoute.params.subscribe((data) => {
      this.userId = data['id'];
    });
    if (this.userId !== '') {
      this.userService
        .viewUser(this.userId)
        .toPromise()
        .then((data) => {
          this.userDetails = data;
          Object.assign(this.userDetails, data);
          // console.log(this.userDetails);

          this.editUserForm = this.formBuilder.group({
            userName: new FormControl('this.userDetails.name'),
            email: new FormControl('this.userDetails.email'),
            phone: new FormControl('this.userDetails.phone'),
          });
          this.dataLoaded=true
        })
        .catch((err) => {
          console.log('error occurred');
        });
    }
  }
  updateUser() {
    this.userService.updateUser(this.userId, this.editUserForm.value).subscribe(
      (data) => {
        this._snackBar.open('user updated successfully');
      },
      (err) => {
        console.log('unable to update user');
      }
    );
  }
}
