import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ProduitsService } from '../../services/produits.service';
import { Produit } from '../../model/produit';
import { FilsComponent } from '../fils/fils.component';

@Component({
  selector: 'app-femme',
  standalone: true,
  imports: [RouterLink,FilsComponent,RouterOutlet],
  templateUrl: './femme.component.html',
  styleUrl: './femme.component.css'
})
export class FemmeComponent implements OnInit  {
  produitSrvice:ProduitsService=inject(ProduitsService);
  sacsFemme: Produit[]=[];
  ngOnInit(): void {
    this.produitSrvice.getProducts().subscribe(
      data=> this.sacsFemme=data.filter((elt)=> elt.categorie=="Femme")
    )
    }
  

}
