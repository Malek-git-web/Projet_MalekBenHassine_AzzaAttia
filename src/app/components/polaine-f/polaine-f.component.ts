import { Component, inject, OnInit } from '@angular/core';
import { Produit } from '../../model/produit';
import { ProduitsService } from '../../services/produits.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-polaine-f',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './polaine-f.component.html',
  styleUrl: './polaine-f.component.css'
})

export class PolaineFComponent implements OnInit  {
  router:Router=inject(Router);
  onFemme(){
    this.router.navigate(['/femme'])
  }
  produitSrvice:ProduitsService=inject(ProduitsService);
  sacsPolene: Produit[]=[];
  ngOnInit(): void {
    this.produitSrvice.getProducts().subscribe(
      data=> this.sacsPolene=data.filter((elt)=> elt.marque=="Polène" && elt.categorie=="Femme")
    )
  }
  

}