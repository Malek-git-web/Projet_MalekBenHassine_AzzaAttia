import { Component, inject, OnInit } from '@angular/core';
import { CommandesService } from '../../services/commandes.service';
import { Commande } from '../../model/commande';
import { ProduitsService } from '../../services/produits.service';
import { Produit } from '../../model/produit';

@Component({
  selector: 'app-liste-commande',
  standalone: true,
  imports: [],
  templateUrl: './liste-commande.component.html',
  styleUrl: './liste-commande.component.css'
})
export class ListeCommandeComponent implements OnInit {
commandesService:CommandesService=inject(CommandesService);
produitService:ProduitsService=inject(ProduitsService);
sacs:Produit[]=[];
listeCommandes:Commande[]=[]
ngOnInit(): void {
  this.commandesService.getCommandes().subscribe(
    data => {
      this.listeCommandes = data;
      
    }
  );
  this.produitService.getProducts().subscribe(
    data => {
      this.sacs = data;
      
    }
  );
}
sac!:any ;
getProduitNom(idSac: number): string {
  
  this.sac = this.sacs.find(elt => elt.id == idSac);

  return  this.sac.nom ;
}


onSupprimer(id:number){
  this.commandesService.deleteCommandes(id).subscribe(()=>
    this.listeCommandes=this.listeCommandes.filter(cmd=>cmd.id!=id)
  );
}
 
}
