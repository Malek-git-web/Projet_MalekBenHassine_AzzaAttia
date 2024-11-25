import { Component, inject, OnInit } from '@angular/core';
import { Produit } from '../../model/produit';
import { ProduitsService } from '../../services/produits.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-prada-h',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './prada-h.component.html',
  styleUrl: './prada-h.component.css'
})

export class PradaHComponent implements OnInit  {
  router:Router=inject(Router);
  onHomme(){
    this.router.navigate(['/homme'])
  }
  produitSrvice:ProduitsService=inject(ProduitsService);
  sacsP: Produit[]=[];
  ngOnInit(): void {
    this.produitSrvice.getProducts().subscribe(
      data=> this.sacsP=data.filter((elt)=> elt.marque=="Prada" && elt.categorie=="Homme")
    )
  }
  

}
