import { Component, inject, OnInit } from '@angular/core';
import { Produit } from '../../model/produit';
import { ProduitsService } from '../../services/produits.service';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-prada-f',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './prada-f.component.html',
  styleUrl: './prada-f.component.css'
})

export class PradaFComponent implements OnInit  {
  router:Router=inject(Router);
  onFemme(){
    this.router.navigate(['/femme'])
  }
  produitSrvice:ProduitsService=inject(ProduitsService);
  sacsPrada: Produit[]=[];
  ngOnInit(): void {
    this.produitSrvice.getProducts().subscribe(
      data=> this.sacsPrada=data.filter((elt)=> elt.marque=="Prada" && elt.categorie=="Femme")
    )
  }
  

}