import { Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { errorContext } from 'rxjs/internal/util/errorContext';
import { ErrorComponent } from './components/error/error.component';
import { FemmeComponent } from './components/femme/femme.component';
import { HommeComponent } from './components/homme/homme.component';
import { HermesFComponent } from './components/hermes-f/hermes-f.component';
import { ChanelFComponent } from './components/chanel-f/chanel-f.component';
import { LuisvittonFComponent } from './components/luisvitton-f/luisvitton-f.component';
import { PradaFComponent } from './components/prada-f/prada-f.component';
import { CelineFComponent } from './components/celine-f/celine-f.component';
import { PolaineFComponent } from './components/polaine-f/polaine-f.component';
import { HermesHComponent } from './components/hermes-h/hermes-h.component';
import { ChanelHComponent } from './components/chanel-h/chanel-h.component';
import { LuisvittonHComponent } from './components/luisvitton-h/luisvitton-h.component';
import { PradaHComponent } from './components/prada-h/prada-h.component';
import { CelineHComponent } from './components/celine-h/celine-h.component';

import { AproposComponent } from './components/apropos/apropos.component';
import { DetailsComponent } from './components/details/details.component';
import { AdminComponent } from './components/admin/admin.component';
import { ControlsComponent } from './components/controls/controls.component';
import { AjouterSacComponent } from './components/ajouter-sac/ajouter-sac.component';


import { ModifierSacComponent } from './components/modifier-sac/modifier-sac.component';
import { SupprimerSacComponent } from './components/supprimer-sac/supprimer-sac.component';
import { ConsulterSacComponent } from './components/consulter-sac/consulter-sac.component';
import { FilsComponent } from './components/fils/fils.component';
import { CommandeComponent } from './components/commande/commande.component';
import { ListeCommandeComponent } from './components/liste-commande/liste-commande.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuAdminComponent } from './components/menu-admin/menu-admin.component';
import { authGuard } from './auth.guard';
import { ChangerMdpComponent } from './components/changer-mdp/changer-mdp.component';


export const routes: Routes = [
  {
    path: '', component: MenuComponent,
    children: [

      { path: 'accueil', title: 'accueil', component: AccueilComponent }
      , { path: 'femme', title: 'femme', component: FemmeComponent },
      { path: 'homme', title: 'homme', component: HommeComponent },

      { path: 'apropos', title: 'a propos de nous', component: AproposComponent },
      { path: 'fils', title: 'fils', component: FilsComponent },
      { path: '', redirectTo: 'accueil', pathMatch: 'full' },
      { path: 'hermes.f', title: 'hermes-f', component: HermesFComponent },
      { path: 'chanel.f', title: 'chanel-f', component: ChanelFComponent },
      { path: 'louis-vuitton.f', title: 'louis-vuitton-f', component: LuisvittonFComponent },
      { path: 'prada.f', title: 'prada-f', component: PradaFComponent },
      { path: 'celine.f', title: 'celine-f', component: CelineFComponent },
      { path: 'polene.f', title: 'polene-f', component: PolaineFComponent },
      { path: 'hermes.h', title: 'hermes-h', component: HermesHComponent },
      { path: 'chanel.h', title: 'chanel-h', component: ChanelHComponent },
      { path: 'louis-vuitton.h', title: 'louis-vuitton-h', component: LuisvittonHComponent },
      { path: 'prada.h', title: 'prada-h', component: PradaHComponent },
      { path: 'celine.h', title: 'celine-h', component: CelineHComponent },
      { path: 'accueil/:sac', component: DetailsComponent },
      { path: 'femme/:sac', component: DetailsComponent },
      { path: 'homme/:sac', component: DetailsComponent },
      { path: 'commande', title: 'commande', component: CommandeComponent },
      { path: 'commande', title: 'commande', component: CommandeComponent },
      { path: 'commande/:id', title: 'commande', component: CommandeComponent },
      { path: 'hermes.f/:sac', component: DetailsComponent },
      { path: 'chanel.f/:sac', component: DetailsComponent },
      { path: 'louis-vuitton.f/:sac', component: DetailsComponent },
      { path: 'prada.f/:sac', component: DetailsComponent },
      { path: 'celine.f/:sac', component: DetailsComponent },
      { path: 'polene.f/:sac', component: DetailsComponent },
      { path: 'hermes.h/:sac', component: DetailsComponent },
      { path: 'chanel.h/:sac', component: DetailsComponent },
      { path: 'louis-vuitton.h/:sac', component: DetailsComponent },
      { path: 'prada.h/:sac', component: DetailsComponent },
      { path: 'celine.h/:sac', component: DetailsComponent }

    ]
  },

  { path: 'admin', title: 'Admin', component: AdminComponent },
  {
    path: '', component: MenuAdminComponent,
    children: [
      { path: 'controls', title: 'controles', component: ControlsComponent, canActivate: [authGuard] },
      { path: 'controls/:sac', title: 'controles', component: ModifierSacComponent },
      { path: 'ajouter-sac', title: 'ajouter', component: AjouterSacComponent },
      { path: 'modifier-sac/:sac', title: 'modifier', component: ModifierSacComponent },
      { path: 'supprimer-sac', title: 'supprimer', component: SupprimerSacComponent },
      { path: 'consulter-sac', title: 'Consulter', component: ConsulterSacComponent },
      { path: 'commandes', title: 'liste des commandes', component: ListeCommandeComponent },
      { path: 'changer-mdp', title: 'changer mot de passe', component: ChangerMdpComponent },
      { path: '', redirectTo: 'controls', pathMatch: 'full' }


    ]
  }

  , { path: '**', title: 'error', component: ErrorComponent }



];
