import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Produit } from '../../model/produit';

@Component({
  selector: 'app-fils-admin',
  standalone: true,
  imports: [CurrencyPipe,RouterLink],
  templateUrl: './fils-admin.component.html',
  styleUrl: './fils-admin.component.css'
})
export class FilsAdminComponent {
@Input() elt!:Produit;
}
