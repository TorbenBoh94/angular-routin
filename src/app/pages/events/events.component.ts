import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import{LoginService }from '../login/login.service';
import {EventService} from './event.service'



@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',

})
export class EventsComponent {
events=[];
currentDate:Date=new Date();
login=false;
  constructor(private loginService:LoginService,
              private eventservice:EventService) {
                this.events=this.eventservice.output(),
                this.login=loginService.output()
               }


}