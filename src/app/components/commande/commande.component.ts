import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommandesService } from '../../services/commandes.service';
import { Commande } from '../../model/commande';
import { ActivatedRoute } from '@angular/router';
import { ProduitsService } from '../../services/produits.service';
import { Produit } from '../../model/produit';

@Component({
  selector: 'app-commande',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './commande.component.html',
  styleUrl: './commande.component.css'
})
export class CommandeComponent implements OnInit {
  activatedRoute:ActivatedRoute=inject(ActivatedRoute);
productForm!:FormGroup;
fb:FormBuilder=inject(FormBuilder);
commandes:Commande[]=[];
commandeService:CommandesService=inject(CommandesService);
produitSerice:ProduitsService=inject(ProduitsService);
idS!:number;
sacs:Produit[]=[];
ngOnInit(): void {
  this.idS=this.activatedRoute.snapshot.params['id'];
  this.produitSerice.getProductsById(this.idS).subscribe(
    data=>this.sac=data
  )
  this.produitSerice.getProducts().subscribe(data=>this.sacs=data)
  this.productForm=this.fb.group({
    id:[0],
    nom:['',Validators.required],
    tel:[0,[Validators.required,Validators.pattern('^[1-9][0-9]{7}$')]],
    adresse:['',Validators.required],
    quantite:[1,[Validators.required,Validators.min(1)]],
    idSac:[0]
  })
}
get tel(){
  return this.productForm.get('tel');
}
get nom(){
  return this.productForm.get('nom');
}
get adresse(){
  return this.productForm.get('adresse');
}
get quantite(){
  return this.productForm.get('quantite');
}
test(n:number){
  for(let elt of this.commandes){
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
commander(){
  if(this.productForm.get('quantite')?.value<this.sac.quantite){
this.productForm.get('id')?.setValue( this.getRandomInt(45,100000));
this.productForm.get('idSac')?.setValue( this.idS);

this.onAjouter(this.productForm.value);

this.sac.quantite=(this.sac.quantite-this.productForm.get('quantite')?.value);
this.onUpdateQuantite(this.idS,this.sac);
alert('merci pour votre confiance');
}
else{
  alert('desolé quantité insufisante');
}
}
onAjouter(c:Commande){
  this.commandeService.addCommandes(c).subscribe();
}
onUpdateQuantite(id:number,sac:Produit){
  this.produitSerice.patchProduct(id,sac).subscribe();
}
}
