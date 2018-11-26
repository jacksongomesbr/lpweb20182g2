import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AutenticacaoGuard } from './autenticacao.guard';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { PlacaComponent } from './placa/placa.component';
import { AdminCadastrarRecorteComponent } from './admin-cadastrar-recorte/admin-cadastrar-recorte.component';

const rotas: Routes = [
  { path: 'login', component: LoginComponent, },
  {
    path: 'admin', component: AdminHomeComponent,
    canActivate: [AutenticacaoGuard],
    canActivateChild: [AutenticacaoGuard],
    children: [
      { path: 'recortes/cadastrar', component: AdminCadastrarRecorteComponent },
      { path: 'placas/:id', component: PlacaComponent },
      { path: '', component: AdminDashboardComponent }
    ]
  },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminHomeComponent,
    AdminDashboardComponent,
    PlacaComponent,
    AdminCadastrarRecorteComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(rotas),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
