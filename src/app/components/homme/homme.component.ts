import { Component, inject, OnInit } from '@angular/core';
import { RouterLink} from '@angular/router';
import { Produit } from '../../model/produit';
import { ProduitsService } from '../../services/produits.service';
import { FilsComponent } from "../fils/fils.component";

@Component({
  selector: 'app-homme',
  standalone: true,
  imports: [RouterLink, FilsComponent],
  templateUrl: './homme.component.html',
  styleUrl: './homme.component.css'
})

export class HommeComponent implements OnInit  {
  produitSrvice:ProduitsService=inject(ProduitsService);
  sacsHomme: Produit[]=[];
  ngOnInit(): void {
    this.produitSrvice.getProducts().subscribe(
      data=> this.sacsHomme=data.filter((elt)=> elt.categorie=="Homme")
    )
  }
  

}