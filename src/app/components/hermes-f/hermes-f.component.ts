import { Component, inject, OnInit } from '@angular/core';
import { Produit } from '../../model/produit';
import { ProduitsService } from '../../services/produits.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-hermes-f',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './hermes-f.component.html',
  styleUrl: './hermes-f.component.css'
})

export class HermesFComponent implements OnInit  {
  router:Router=inject(Router);
  onFemme(){
    this.router.navigate(['/femme']);
  }
  produitSrvice:ProduitsService=inject(ProduitsService);
  sacsHermes: Produit[]=[];
  ngOnInit(): void {
    this.produitSrvice.getProducts().subscribe(
      data=> this.sacsHermes=data.filter((elt)=> elt.marque=="Hermès" && elt.categorie=="Femme")
    )
  }
  

}