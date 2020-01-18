import{Component} from '@angular/core';
import{LoginService }from '../login/login.service';
import{ForschungService}from './forschung.service';
import{Forschung}from './forschung'

@Component({
  selector:'my-forschung',
  templateUrl:'./forschung.component.html',
  styleUrls: [ '../../app.component.css' ]
  
  
})

export class ForschungComponent{
    publikationen=[
    ]
    login:boolean

    constructor(private loginService:LoginService,
                private forschungService:ForschungService){this.login=this.loginService.output(),
                this.publikationen=this.forschungService.output()}

     onAddPublication(){
    this.forschungService.onAddPublication();
   };
}