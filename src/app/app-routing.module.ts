import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ListClientsComponent } from './list-clients/list-clients.component';
import { ListCompteClientComponent } from './list-clients/list-compte-client/list-compte-client.component';
import { VirementComponent } from './virement/virement/virement.component';
import { CreateClientComponent } from './list-clients/create-client/create-client.component';
import { EditClientComponent } from './list-clients/edit-client/edit-client.component';
import { ParametrageComponent } from './parametrage/parametrage.component';
import { AccueilComponent } from './accueil/accueil.component';


const routes: Routes = [

  // Rooting d'acceuil la page login

  {path: '', component: LoginComponent },
  {path: 'list-clients', component: ListClientsComponent },
  {path: 'list-clients/new-client', component: CreateClientComponent},
  {path: 'list-clients/edit-client', component: EditClientComponent},
  {path: 'list-clients/list-compte-client', component: ListCompteClientComponent},
  {path: 'virement/virement', component: VirementComponent},
  {path: 'parametrage', component: ParametrageComponent},
  {path: 'accueil', component: AccueilComponent},

  // Redirection vers la page d'acceuil

  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
