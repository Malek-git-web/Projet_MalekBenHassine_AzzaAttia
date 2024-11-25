import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { ApiComponent } from '../api/api.component';

@Component({
  selector: 'app-apropos',
  standalone: true,
  imports: [ApiComponent], // Ajouter le pipe à la liste des imports
  templateUrl: './apropos.component.html',
  styleUrls: ['./apropos.component.css']
})
export class AproposComponent {
 
}
