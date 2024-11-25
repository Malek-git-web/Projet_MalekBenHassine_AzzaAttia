import { Component, inject, OnInit } from '@angular/core';
import { ProduitsService } from '../../services/produits.service';
import { Produit } from '../../model/produit';
import { Router, RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { FilsComponent } from "../fils/fils.component";
import { AuthService } from '../../services/auth.service';
import { FilsAdminComponent } from '../fils-admin/fils-admin.component';

@Component({
  selector: 'app-controls',
  standalone: true,
  imports: [FilsAdminComponent],
  templateUrl: './controls.component.html',
  styleUrl: './controls.component.css'
})
export class ControlsComponent implements OnInit {
  router:Router=inject(Router);
  mdp!:string;
  sacs:Produit[]=[];
  authService:AuthService=inject(AuthService);
private readonly produitService:ProduitsService=inject(ProduitsService);
ngOnInit(): void {
  this.mdp=this.produitService.getMotDePasse();
  this.produitService.getProducts().subscribe(
    data=>this.sacs=data
  )
}



onDeleteSac(id:number){
  
    this.produitService.deleteProduct(id).subscribe( data=>
      this.sacs=this.sacs.filter((elt)=>elt.id!==id)
    );
    
  }

//partie mot de passe

 

changeMdp(){
 this.router.navigate(['/changer-mdp'])
}
onDisconnect(){
this.authService.logout();
this.router.navigate(['/admin'])
}
onRetour(){
  this.router.navigate(['/accueil'])
}
//CRUD routes
onAddSac(){
  this.router.navigate(['/ajouter-sac']);
}
onModifSac(id:number){
  this.router.navigate(['/modifier-sac/'+id]);
}
onSuppSac(){
  this.router.navigate(['/supprimer-sac']);
}

onConsultSac(){
  this.router.navigate(['/consulter-sac']);
}
onCommandes(){
  this.router.navigate(['/commandes']);
}
}
