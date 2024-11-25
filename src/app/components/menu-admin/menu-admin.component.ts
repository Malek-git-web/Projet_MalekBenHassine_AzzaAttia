import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-menu-admin',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './menu-admin.component.html',
  styleUrl: './menu-admin.component.css'
})
export class MenuAdminComponent {
  router:Router=inject(Router);
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
  onRechercherSac(){
    this.router.navigate(['/rechercher-sac']);
  }
  onCommandes(){
    this.router.navigate(['/commandes']);
  }
}
