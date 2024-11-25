import { Component, inject, OnInit } from '@angular/core';
import { Produit } from '../../model/produit';
import { ProduitsService } from '../../services/produits.service';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-celine-f',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './celine-f.component.html',
  styleUrl: './celine-f.component.css'
})

export class CelineFComponent implements OnInit  {
  router:Router=inject(Router);
  onFemme(){
    this.router.navigate(['/femme']);
  }
  produitSrvice:ProduitsService=inject(ProduitsService);
  sacsCeline: Produit[]=[];
  ngOnInit(): void {
    this.produitSrvice.getProducts().subscribe(
      data=> this.sacsCeline=data.filter((elt)=> elt.marque=="Céline" && elt.categorie=="Femme")
    )
  }
  

}