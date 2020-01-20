import{Component} from '@angular/core';
import{LoginService }from '../login/login.service';
import {ProjekteService} from './projekte.service';
@Component({
  selector:'my-projekte',
  templateUrl:'./projekte.component.html'
  
  
})

export class ProjekteComponent{
  login:boolean;
  projekte=[];


  constructor(private loginService:LoginService,
  private projekteService:ProjekteService)
  {this.login=this.loginService.output(),
  this.projekte=this.projekteService.output()}

  onEditProject(){
    this.projekteService.onEditProject();
}
}





//Die Namen der Institutsmitglieder über den Service abrufen und als Dropdown implementieren