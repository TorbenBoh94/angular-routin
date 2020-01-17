import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { LandingComponent } from './pages/landing/landing.component';
import { NavigationComponent } from './elements/navigation.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ProfessorComponent } from './pages/professoren/professoren.component';
import { FooterComponent } from './elements/footer/footer.component';
import {PanelComponent} from './elements/panel/panel.component';
import {PanelContentComponent} from './elements/panel/panel-content.component';
import {ImpressumComponent} from './pages/impressum/impressum.component';
import {PublikationenComponent} from './pages/publikationen/publikationen.component';
import {ProjekteComponent} from './pages/projekte/projekte.component';
import {ForschungComponent} from './pages/forschung/forschung.component';
import {DatenschutzComponent} from './pages/datenschutz/datenschutz.component';
import {RechteComponent} from './pages/rechte/rechte.component';
import {NotFoundComponent} from './pages/notfound/notfound.component';



@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
                  RouterModule.forRoot([
                    {path:'', component:LandingComponent},
                    {path:'login',component:LoginComponent},
                    {path:'admin', component:AdminComponent},
                    {path:'prof',component:ProfessorComponent},
                    {path:'impressum',component:ImpressumComponent},
                    {path:'publikationen',component:PublikationenComponent},
                    {path:'projekte',component:ProjekteComponent},
                    {path:'publikationen',component:PublikationenComponent},
                    {path:'forschung',component:ForschungComponent},
                    {path:'datenschutz',component:DatenschutzComponent},
                    {path:'rechte',component:RechteComponent},


                    //Dieser Pfad muss letzter Pfad bleiben
                    {path:'**',component:NotFoundComponent}
                  ],{useHash:true}) ],
  declarations: [ AppComponent,
                                    
                  LandingComponent,
                  NavigationComponent,
                  LoginComponent,
                  AdminComponent,
                  ProfessorComponent,
                  FooterComponent,
                  PanelComponent,
                  PanelContentComponent,
                  ImpressumComponent,
                  PublikationenComponent,
                  ProjekteComponent,
                  ForschungComponent,
                  DatenschutzComponent,
                  RechteComponent,
                  NotFoundComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
