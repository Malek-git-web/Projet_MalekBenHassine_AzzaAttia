import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Produit } from '../../model/produit';
import { ProduitsService } from '../../services/produits.service';

@Component({
  selector: 'app-consulter-sac',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './consulter-sac.component.html',
  styleUrl: './consulter-sac.component.css'
})
export class ConsulterSacComponent {
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
    {this.onAfficher(this.identifiant);
      this.router.navigate(['/accueil',this.identifiant]);
    }
    else{
      alert('pas de produit avec ce nom');
    }
    
  }
  onEffacer(){
    this.produitForm.reset();
  }
  onAfficher(id:number){
    this.produitService.getProductsById(id).subscribe();
  }
  onRetour(){
    this.router.navigate(['/controls']);
    }
}
