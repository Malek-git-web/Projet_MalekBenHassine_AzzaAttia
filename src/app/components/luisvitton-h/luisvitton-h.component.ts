import { Component, inject, OnInit } from '@angular/core';
import { Produit } from '../../model/produit';
import { ProduitsService } from '../../services/produits.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-luisvitton-h',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './luisvitton-h.component.html',
  styleUrl: './luisvitton-h.component.css'
})

export class LuisvittonHComponent implements OnInit  {
  router:Router=inject(Router);
  onHomme(){
    this.router.navigate(['/homme'])
  }
  produitSrvice:ProduitsService=inject(ProduitsService);
  sacsLv: Produit[]=[];
  ngOnInit(): void {
    this.produitSrvice.getProducts().subscribe(
      data=> this.sacsLv=data.filter((elt)=> elt.marque=="Louis Vuitton" && elt.categorie=="Homme")
    )
  }
  

}