import{Component} from '@angular/core';
import {Prof} from './prof';
import{LoginService }from '../login/login.service';
import {ProfessorenService} from './professoren.service';

@Component({
  selector:'my-professor',
  templateUrl:'./professoren.component.html',
  
  
  
})

export class ProfessorComponent{
  professoren=[
  ]

  login:boolean
  constructor(private loginService:LoginService,
              private professorenService:ProfessorenService )
  {this.login=this.loginService.output(),
  this.professoren=this.professorenService.output()}
              
  
  
   onAddworker(){
    this.professorenService.onAddworker();
   };

  

}