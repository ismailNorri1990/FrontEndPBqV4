import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { ListClientsComponent } from './list-clients/list-clients.component';
import { ListCompteClientComponent } from './list-clients/list-compte-client/list-compte-client.component';
import { FormClientComponent } from './list-clients/form-client/form-client.component';
import { HeaderComponent } from './header/header.component';
import { VirementComponent } from './virement/virement/virement.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListConseillersComponent } from './list-conseillers/list-conseillers.component';
import { FormConseillerComponent } from './list-conseillers/form-conseiller/form-conseiller.component';
import { HeaderConseillerComponent } from './header-conseiller/header-conseiller.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListClientsComponent,
    ListCompteClientComponent,
    FormClientComponent,
    HeaderComponent,
    VirementComponent,
    ListConseillersComponent,
    FormConseillerComponent,
    HeaderConseillerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
