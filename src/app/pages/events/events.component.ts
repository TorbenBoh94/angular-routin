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

//Sortierung um immer das nächste Event an erster Stelle zu haben
  get sortData() {
    return this.events.sort((a, b) => {
      
      return <any>new Date(a.date) - <any>new Date(b.date);
    });
  }
}