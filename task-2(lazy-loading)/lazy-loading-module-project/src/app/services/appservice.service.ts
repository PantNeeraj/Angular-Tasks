import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {

  constructor(private http:HttpClient,
    private activatedroute:ActivatedRoute) { }
    baseUrl:string = "http://localhost:3000/"


    getUser(){
    return this.http.get(this.baseUrl + 'users')
  }

  getDashboard(){
    return this.http.get(this.baseUrl + 'dashboard')
  }

 



}

