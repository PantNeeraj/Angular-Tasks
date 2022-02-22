import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  userId:any
  constructor(private userService:UserService,
    private activateRoute:ActivatedRoute,
    private _snackbar:MatSnackBar,
    private router:Router) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((data)=>{
      this.userId=data['id']
      // console.log(this.userId)
    })

    if(this.userId){
      this.userService.deleteUser(this.userId).subscribe((data)=>{
        this._snackbar.open("user deleted successfully")
        this.router.navigateByUrl("list")
  
      })
    }
  }

}
