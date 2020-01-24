import{Component} from '@angular/core';
import{LoginService }from '../login/login.service';
import {ProjekteService} from './projekte.service';
import { MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns';
import {ProfessorenService} from '../professoren/professoren.service'
@Component({
  selector:'my-projekte',
  templateUrl:'./projekte.component.html'
  
})

export class ProjekteComponent{
  login:boolean;
  projekte=[];
  professoren=[];
  mitglieder:[];

  constructor(private loginService:LoginService,
  private projekteService:ProjekteService,
  private professorenService:ProfessorenService)
  {this.login=this.loginService.output(),
  this.projekte=this.projekteService.output(),
  this.professoren=this.professorenService.output()
  }

  onEditProject(){
    this.projekteService.onEditProject();
  }
  onAddMitglied(option:[]){
    this.projekteService.onAddMitglied(option);
  }
  ondeletebeteiligt(index:number){
    this.projekteService.ondeletebeteiligt(index);
  }

  onAddProject(){
    this.projekteService.onAddProject();
    
  }
}





//Die Namen der Institutsmitglieder über den Service abrufen und als Dropdown implementieren