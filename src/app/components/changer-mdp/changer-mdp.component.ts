import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Admin } from '../../model/admin';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-changer-mdp',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './changer-mdp.component.html',
  styleUrl: './changer-mdp.component.css'
})
export class ChangerMdpComponent implements OnInit {
  router:Router=inject(Router);
authService:AuthService=inject(AuthService);
admin!:Admin;
fb:FormBuilder=inject(FormBuilder);
formGroup!:FormGroup;
ngOnInit(): void {
  this.authService.getCoordsById("11ff").subscribe(data=>this.admin=data)
  this.formGroup=this.fb.group(
   {
    mdp:['',[Validators.required,Validators.minLength(4),Validators.pattern('^[A-Z][a-z]+$')]]
   }
  )
}
pwd!:string;

updateMdp(){
  this.pwd=this.formGroup.get('mdp')?.value;
  console.log('je suis la');
  this.admin.mdp=this.pwd;
this.authService.patchCoords("11ff",this.admin).subscribe(
 data=> alert('vous avez changer votre mot de passe')
)
}
onRetour(){
this.router.navigate(['/controls'])
}
get mdp(){
  return this.formGroup.get('mdp');
}
}

