import { Component, inject, OnInit } from '@angular/core';
import { ProduitsService } from '../../services/produits.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Admin } from '../../model/admin';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {
  login!:string;
  mdp!:string;
  router:Router=inject(Router);
  produitService:ProduitsService=inject(ProduitsService);
  authService:AuthService=inject(AuthService);
  admin!:Admin;
  ngOnInit(): void {
   
    this.authService.getCoordsById("11ff").subscribe(
 data=>{this.admin=data
  
 }
     )
    

  }
  onControls(){
    this.router.navigate(['/controls'])
  }

onSubmit(log:string,md:string){
  
   this.authService.login(this.admin.login,this.admin.mdp,log,md).subscribe(
     data=>{ if(data){
    this.router.navigate(['/controls'])
    }else{
      alert('login ou mot de passe incorrect');
    }}
   )
}
}
