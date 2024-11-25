import { Component, Input} from '@angular/core';
import { Produit } from '../../model/produit';
import {  RouterLink } from '@angular/router';
import { AdjectifPipe } from '../../adjectif.pipe';


@Component({
  selector: 'app-fils',
  standalone: true,
  imports: [RouterLink,AdjectifPipe],
  templateUrl: './fils.component.html',
  styleUrl: './fils.component.css'
})
export class FilsComponent {
@Input() elt!:Produit;


  

}
