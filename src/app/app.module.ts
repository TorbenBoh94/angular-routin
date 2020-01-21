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
import {ProjekteComponent} from './pages/projekte/projekte.component';
import {ForschungComponent} from './pages/forschung/forschung.component';
import {DatenschutzComponent} from './pages/datenschutz/datenschutz.component';
import {RechteComponent} from './pages/rechte/rechte.component';
import {NotFoundComponent} from './pages/notfound/notfound.component';
import { LoginService } from './pages/login/login.service';
import { ProfessorenService } from './pages/professoren/professoren.service';
import { ForschungService } from './pages/forschung/forschung.service';
import { EventsComponent } from './pages/events/events.component';
import { NeuigkeitenComponent } from './pages/neuigkeiten/neuigkeiten.component';
import { ProjekteService } from './pages/projekte/projekte.service';



@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
                  RouterModule.forRoot([
                    {path:'', component:LandingComponent},
                    {path:'login',component:LoginComponent},
                    {path:'admin', component:AdminComponent},
                    {path:'prof',component:ProfessorComponent},
                    {path:'impressum',component:ImpressumComponent},
                    {path:'projekte',component:ProjekteComponent},
                    {path:'forschung',component:ForschungComponent},
                    {path:'datenschutz',component:DatenschutzComponent},
                    {path:'rechte',component:RechteComponent},
                    {path:'events',component:EventsComponent},
                    {path:'neuigkeiten',component:NeuigkeitenComponent},


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
                  
                  ProjekteComponent,
                  ForschungComponent,
                  DatenschutzComponent,
                  RechteComponent,
                  NotFoundComponent,
                  EventsComponent,
                  NeuigkeitenComponent,
                   ],
  bootstrap:    [ AppComponent ],
  providers: [LoginService, ProfessorenService, ForschungService, ProjekteService]
})
export class AppModule { }
