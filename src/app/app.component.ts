import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from "./components/menu/menu.component";
import { FemmeComponent } from "./components/femme/femme.component";
import { FooterComponent } from './components/footer/footer.component';
import { ApiComponent } from './components/api/api.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Projet_MalekBenHassine_AzzaAttia';
}
