import { Component, OnInit } from '@angular/core';
import {NeuigkeitenService} from './neuigkeiten.service';
import{LoginService }from '../login/login.service';



@Component({
  selector: 'app-neuigkeiten',
  templateUrl: './neuigkeiten.component.html'

})
export class NeuigkeitenComponent {
news=[]
login=false;
  constructor(private loginService:LoginService,
              private neuigkeitenService:NeuigkeitenService) {
                this.news=this.neuigkeitenService.output(),
                this.login=loginService.output()
               }




}