import{Component} from '@angular/core';
import{LoginService }from '../login/login.service';

@Component({
  selector:'my-projekte',
  templateUrl:'./projekte.component.html'
  
  
})

export class ProjekteComponent{
    login:boolean;
    constructor(private loginService:LoginService){this.login=this.loginService.output()}

}

//Die Namen der Institutsmitglieder über den Service abrufen und als Dropdown implementieren