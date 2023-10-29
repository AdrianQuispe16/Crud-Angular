import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { FooterComponent } from './footer/footer.component';
import { PrimeroComponent } from './primero/primero.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { InicioComponent } from './inicio/inicio.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path : `cuerpo`, component: CuerpoComponent},
  { path : `primero`, component: PrimeroComponent},
  { path : ``, component: InicioComponent , pathMatch: 'full'},
  { path : `**`, redirectTo: '/' , pathMatch: 'full'}
  
];
@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    FooterComponent,
    PrimeroComponent,
    CuerpoComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
