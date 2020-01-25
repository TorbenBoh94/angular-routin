import { Injectable } from '@angular/core';
import{Events}from './events'

@Injectable()
export class EventService {
 
 edit=false;
 
 events=[ new Events("Hochschulfest","Gemütliches Beisammensitzen der Studenten und Professoren","https://me2be.de/wp-content/uploads/2018/06/CAMPUS_Sommerfest_HSFL_Dorbandt_1.jpg","2020-08-15","15.00"),
 ];

 post={
  name:"",
  beschreibung:"",
  img:"",
  date:"",
  time:""
  
  }
 
  output(){
     return this.events;
   }
 onAddevent(){
   
    this.events.push(
      new Events(this.post.name,this.post.beschreibung,this.post.img,this.post.date,this.post.time)
    )
    
    this.post={
      name:"",
      beschreibung:"",
      img:"",
      date:"",
      time:""
    }
  }
  onDelete(index:number){
    this.events.splice(index,1)
  }
}