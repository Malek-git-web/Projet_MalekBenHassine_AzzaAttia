import { LowerCasePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { Data } from '@angular/router';

@Pipe({
  name: 'adjectif',
  standalone: true
})
export class AdjectifPipe implements PipeTransform {

  
    transform(nom: string, quantite: number): string {
      let label = '';
      if (quantite <= 5&& quantite!=0) {
        label = ' (Quantité Limitée)';
      }
      return `${nom}${label}`;
    }

}
