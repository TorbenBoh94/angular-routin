import{Component} from '@angular/core';

import{LoginService }from '../login/login.service';
import {ProfessorenService} from '../professoren/professoren.service';


@Component({
  selector:'my-landing',
  templateUrl:'./landing.component.html'
  
  
})

export class LandingComponent{
  professor=[

  ]
  
  login:boolean;
  constructor(private loginService:LoginService,
  private professorenService:ProfessorenService)
  {this.login=this.loginService.output()
    this.professor=this.professorenService.output()}


}