import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Produit } from '../../model/produit';
import { ProduitsService } from '../../services/produits.service';
import { Router } from '@angular/router';
import { Avis } from '../../model/avis';
@Component({
  selector: 'app-ajouter-sac',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './ajouter-sac.component.html',
  styleUrl: './ajouter-sac.component.css'
})
export class AjouterSacComponent implements OnInit {
  sacs:Produit[]=[];
productForm!:FormGroup;
readonly formBuilder:FormBuilder=inject(FormBuilder);
  router:Router=inject(Router);
  readonly produitService:ProduitsService=inject(ProduitsService);
photo: any;

promotion: any;
ngOnInit(): void {
  this.produitService.getProducts().subscribe(
    data=>this.sacs=data
  )
  this.productForm=this.formBuilder.group(
    {
      id:[0],
      nom: ['',Validators.required],
      photo: ['',Validators.required],
      categorie: ['',Validators.required],
      prix: [0,[Validators.required,Validators.min(10)]],
      description: ['',Validators.required],
      detail: ['',Validators.required],
      promotion: [0,Validators.required],
      dateDeLancement: ['',Validators.required],
      enStock: [false],
      couleur: ['',Validators.required],
      quantite: [1,Validators.required],
      marque: ['',Validators.required],
      Avis:[[]]
    }
  )

}
 test(n:number){
  for(let elt of this.sacs){
    if(elt.id===n){
      return false
    }
      
  }return true;
}
 getRandomInt(min: number, max: number): number {
  // Utilisation de Math.random() pour générer un nombre aleatoire dans la plage min-max
  let nvId= Math.floor(Math.random() * (max - min + 1)) + min;
  while(!this.test(nvId)){
    nvId=Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return nvId;
  
}
sac!:Produit;
onSubmit(){
this.productForm.get('id')?.setValue( this.getRandomInt(45,100000));
this.sac=this.productForm.value;
this.onAjouter(this.sac);

}
onEffacer(){
  this.productForm.reset({
    prix: [0],
    promotion: [0],
    quantite: [1]
  });
}
onAjouter(p:Produit){
  this.produitService.addProduct(p).subscribe(
    data=>console.log(data)
  );
}
onRetour(){
this.router.navigate(['/controls']);
}
//les fonctions de contoles

get nom(){
  return this.productForm.get('nom');
}
get prix(){
  return this.productForm.get('prix');
}
get description(){
  return this.productForm.get('description');
}
get detail(){
  return this.productForm.get('photo');
}
get dateDeLancement(){
  return this.productForm.get('dateDeLancement');
}
get couleur(){
  return this.productForm.get('couleur');
}
get quantite(){
  return this.productForm.get('quantite');
}
get categorie(){
  return this.productForm.get('categorie');
}
get marque(){
  return this.productForm.get('marque');
}
}
