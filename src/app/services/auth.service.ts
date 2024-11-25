import {  HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Admin } from '../model/admin';
const URL="http://localhost:3000/admin";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly http:HttpClient=inject(HttpClient)
 
  getCoordsById(id:string):Observable<Admin>{
    return this.http.get<Admin>(URL+"/"+id);
}
  patchCoords(id:string,admin:Admin):Observable<Admin>{
    return this.http.patch<Admin>(URL+"/"+id,admin);
  }
  login(username:string,pwd:string,log:string,mdp:string){
let connected= (username==log) && (pwd ==mdp);

if (connected)
  localStorage.setItem("state", "connected");
  else
  {localStorage.setItem("state", "disconnected");}
  console.log(localStorage.getItem("state"))
  return of(connected);
  }
  logout() {
    localStorage.setItem('state', 'disconnected')
    }
  
  constructor() { }
}
