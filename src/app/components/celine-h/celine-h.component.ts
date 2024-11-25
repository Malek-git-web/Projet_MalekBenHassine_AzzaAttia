import { Component, inject, OnInit } from '@angular/core';
import { Produit } from '../../model/produit';
import { ProduitsService } from '../../services/produits.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-celine-h',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './celine-h.component.html',
  styleUrl: './celine-h.component.css'
})

export class CelineHComponent implements OnInit  {
  router:Router=inject(Router);
  onHomme(){
    this.router.navigate(['/femme']);
  }
  produitSrvice:ProduitsService=inject(ProduitsService);
  sacsCeline: Produit[]=[];
  ngOnInit(): void {
    this.produitSrvice.getProducts().subscribe(
      data=> this.sacsCeline=data.filter((elt)=> elt.marque=="Céline" && elt.categorie=="Homme")
    )
  }
  

}