import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Produit } from '../../model/produit';
import { ProduitsService } from '../../services/produits.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, FooterComponent,ReactiveFormsModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})


export class MenuComponent {
  produitForm!:FormGroup;
  sacs:Produit[]=[];
  router:Router=inject(Router);
  produitService:ProduitsService=inject(ProduitsService);
  formBuilder:FormBuilder=inject(FormBuilder);
 
  onAdmin(){
    this.router.navigate(['/admin']);
  }
  ngOnInit(): void {
        this.produitService.getProducts().subscribe(
          data=>this.sacs=data
        )
        this.produitForm=this.formBuilder.group({
          recherche:['']
        })
      }
      message1:string="Pas de produit avec ce nom ou cette marque.\n Veuillez reessayer!";
      recherche!:string ;
      identifiant:number=0;
      marque!:string;
      onSubmit():void{
    this.recherche=this.produitForm.controls['recherche'].value;
    
    if(this.recherche.toLocaleLowerCase()==="femme"||this.recherche.toLocaleLowerCase()==="homme"){
      switch(this.recherche){
        case('femme'):{this.router.navigate(['/femme']);break;}
        case('homme'):{this.router.navigate(['/homme']);break;}
    }}else{
  
    for(let elt of this.sacs){
      if(elt.nom.toLocaleLowerCase().includes(this.recherche.toLocaleLowerCase())){
        this.identifiant=elt.id;}}
   
    
          
          if(this.identifiant!=0){
            this.onRecuperer(this.identifiant);
            this.router.navigate(['./accueil',this.identifiant]);
         }
          else{
            alert(this.message1);
          }
          
         }}
        onRecuperer(id:number){
              this.produitService.getProductsById(id).subscribe();
            }
      }
    
 















