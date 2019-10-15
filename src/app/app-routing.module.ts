import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ListClientsComponent } from './list-clients/list-clients.component';
import { FormClientComponent } from './list-clients/form-client/form-client.component';
import { ListCompteClientComponent } from './list-clients/list-compte-client/list-compte-client.component';
import { VirementComponent } from './virement/virement/virement.component';


const routes: Routes = [

  // Rooting d'acceuil la page login

  {path: '', component: LoginComponent },
  {path: 'list-clients', component: ListClientsComponent },
  {path: 'list-clients/new-client', component: FormClientComponent},
  {path: 'list-clients/update-client', component: FormClientComponent},
  {path: 'list-clients/list-compte-client', component: ListCompteClientComponent},
  {path: 'virement/virement', component: VirementComponent},

  // Redirection vers la page d'acceuil

  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
