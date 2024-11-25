import { Component, inject, OnInit } from '@angular/core';
import { Produit } from '../../model/produit';
import { ProduitsService } from '../../services/produits.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-hermes-h',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './hermes-h.component.html',
  styleUrl: './hermes-h.component.css'
})

export class HermesHComponent implements OnInit  {
  router:Router=inject(Router);
  onHomme(){
    this.router.navigate(['/homme']);
  }
  produitSrvice:ProduitsService=inject(ProduitsService);
  sacsHermesh: Produit[]=[];
  ngOnInit(): void {
    this.produitSrvice.getProducts().subscribe(
      data=> this.sacsHermesh=data.filter((elt)=> elt.marque=="Hermès" && elt.categorie==="Homme")
    )
  }
  

}