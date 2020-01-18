import{Component} from '@angular/core';
import{LoginService }from '../login/login.service';

@Component({
  selector:'my-forschung',
  templateUrl:'./forschung.component.html'
  
  
})

export class ForschungComponent{
    login:boolean;
    constructor(private loginService:LoginService){this.login=this.loginService.output()}

}