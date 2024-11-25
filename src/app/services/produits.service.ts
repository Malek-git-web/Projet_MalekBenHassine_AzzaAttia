import { inject, Injectable } from '@angular/core';
import { Produit } from '../model/produit';
import { Avis } from '../model/avis';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
const URL="http://localhost:3000/sacs";
@Injectable({
  providedIn: 'root'
})
export class ProduitsService {
 
private readonly http:HttpClient=inject(HttpClient);
getProducts():Observable<Produit[]>{
    return this.http.get<Produit[]>(URL);
}
addProduct(p:Produit):Observable<Produit>{
    return this.http.post<Produit>(URL,p);
}
updateProduct(id:number,p:Produit):Observable<Produit>{
    return this.http.put<Produit>(URL+"/"+id,p);
}

patchProduct(id:number,d:any):Observable<Produit>{
    return this.http.patch<Produit>(URL+"/"+id,d);
}
deleteProduct(id:number){
    return this.http.delete(URL+"/"+id);
}
getProductsById(id:number):Observable<Produit>{
    return this.http.get<Produit>(URL+"/"+id);
}
//partie user
login:string="user";
motDePasse:string="user010203";
getLogin(){
    return this.login;
}
getMotDePasse(){
    return this.motDePasse;
}
updateMdp(mdp:string){
    this.motDePasse=mdp;
}


  constructor() { }
}
