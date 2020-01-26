import { Injectable } from '@angular/core';
import{Events}from './events'

@Injectable()
export class EventService {
 
 edit=false;
 index:number;
 //Für die Links der Bilder bzw. der Bilder sollte eine Einheitliche Größe genommen werden, was hier im Beispiel erstmal nicht der Fall ist
events=[ new Events("Hochschulfest","Gemütliches Beisammensitzen der Studenten und Professoren","https://me2be.de/wp-content/uploads/2018/06/CAMPUS_Sommerfest_HSFL_Dorbandt_1.jpg","2020-08-15","15:00"),
  new Events("Semesterbeginn","Das Semester beginnt und das Lernen kann wieder anfangen","https://hs-flensburg.de/sites/default/files/styles/full_width/public/mood/termine_Web.jpg?itok=w1xB9zKc","2020-03-01",""),
  new Events("Virtual Play Day","Das Semester beginnt und das Lernen kann wieder anfangen","https://hs-flensburg.de/sites/default/files/styles/frontpage_s/public/aktuelles/2020-01/bild.png?h=2765ece5&itok=W5ohgyzH","2020-02-05",""),
  new Events("Workshop Lebensqualität","Um pflegende Angehörige in ihrer täglichen Arbeit zu unterstützen, arbeiten derzeit deutsche und dänische Partner im Interreg-Projekt Demantec zusammen","","2020-02-01",""),
  new Events("Global Game Jam","Auch in diesem Jahr sind wir wieder dabei, wenn es ein Wochenende lang heißt: Spiele vor Schlaf. 48 Stunden lang werden Spiele erdacht, entwickelt, designt, programmiert, getestet und am Ende präsentiert. ","","2020-01-31",""),
  new Events("Konventssitzung","Bitte beachten Sie: Dieser Termin findet nur bei Bedarf statt.","","2020-02-12",""),
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
  onEdit(index:number){
    this.edit=true;
      
    this.post.name=this.events[index].name;
    this.post.beschreibung=this.events[index].beschreibung;
    this.post.img=this.events[index].img;
    this.post.date=this.events[index].date;
    this.post.time=this.events[index].time;
    this.index=index;
  }
  //Sortierung um immer das nächste Event an erster Stelle zu haben
  get sortData() {
    return this.events.sort((a, b) => {
      
      return <any>new Date(a.date) - <any>new Date(b.date);
    });
  }
}