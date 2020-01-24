import{Component} from '@angular/core';

import{LoginService }from '../login/login.service';
import {ProfessorenService} from '../professoren/professoren.service';
import {NeuigkeitenService} from '../neuigkeiten/neuigkeiten.service';


@Component({
  selector:'my-landing',
  templateUrl:'./landing.component.html'
  
  
})

export class LandingComponent{
  professor=[];
  neuigkeiten=[];
  
  login:boolean;
  constructor(private loginService:LoginService,
  private professorenService:ProfessorenService,
  private neuigkeitenService:NeuigkeitenService)
  {this.login=this.loginService.output()
    this.professor=this.professorenService.output()
    this.neuigkeiten=this.neuigkeitenService.output()}


}