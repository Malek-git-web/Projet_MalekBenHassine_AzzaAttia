import { NgClass } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Produit } from '../../model/produit';
import { ProduitsService } from '../../services/produits.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supprimer-sac',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './supprimer-sac.component.html',
  styleUrl: './supprimer-sac.component.css'
})
export class SupprimerSacComponent implements OnInit {
produitForm!:FormGroup;
sacs:Produit[]=[];
router:Router=inject(Router);
produitService:ProduitsService=inject(ProduitsService);
formBuilder:FormBuilder=inject(FormBuilder);
ngOnInit(): void {
  this.produitService.getProducts().subscribe(
    data=>this.sacs=data
  )
  this.produitForm=this.formBuilder.group({
    nom:['']
  })
}

nom!:string;

identifiant:number=0;
onSubmit(){
  this.nom=this.produitForm.controls['nom'].value;
  for(let elt of this.sacs){
    if(this.nom===elt.nom){
          this.identifiant=elt.id;
    }
  }
  if(this.identifiant!==0)
  {this.onSupprimer(this.identifiant);
   alert('le sac à été supprimer');
  }
  else{
    alert('pas de produit avec ce nom');
  }
  
}
onEffacer(){
  this.produitForm.reset();
}
onSupprimer(id:number){
  this.produitService.deleteProduct(id).subscribe(
    data=>console.log(data)
  );
}
onRetour(){
  this.router.navigate(['/controls']);
  }
}
