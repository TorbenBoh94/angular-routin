import{Component} from '@angular/core';
import{LoginService }from '../login/login.service';

@Component({
  selector:'my-publikationen',
  templateUrl:'./publikationen.component.html'
  
  
})

export class PublikationenComponent{
    login:boolean;
    constructor(private loginService:LoginService){this.login=this.loginService.output()}

}