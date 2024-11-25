import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Commande } from '../model/commande';
const URL="http://localhost:3000/commandes";
@Injectable({
  providedIn: 'root'
})
export class CommandesService {
private readonly http:HttpClient=inject(HttpClient);
  constructor() { }
  getCommandes():Observable<Commande[]>{
    return this.http.get<Commande[]>(URL);
}
addCommandes(c:Commande):Observable<Commande>{
  return this.http.post<Commande>(URL,c);
}
deleteCommandes(id:number){
  return this.http.delete(URL+"/"+id);
}
}
