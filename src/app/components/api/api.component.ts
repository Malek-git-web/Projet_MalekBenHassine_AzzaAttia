import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-api',
  standalone: true,
  imports: [],
  templateUrl: './api.component.html',
  styleUrl: './api.component.css'
})
export class ApiComponent implements OnInit{
  http:HttpClient=inject(HttpClient)
  api:any[]=[]
  response:any
  ngOnInit(): void {
       const apiUrl = 'https://api.escuelajs.co/api/v1/products';
  this.http.get(apiUrl).subscribe(
    (res: any) => {
      console.log(res);
      this.api=res;
      console.log(this.api.length)
  this.response=this.api[Math.floor(Math.random() * this.api.length)]
  console.log("this.response")

  console.log(this.response)
    },
  );
}
  }
 

