import { Injectable } from '@angular/core';
import {Neuigkeiten} from './neuigkeiten'

@Injectable()
export class NeuigkeitenService {
edit=false;
index:number;
  constructor() { }
currentDate: Date= new Date();
news=[
  new Neuigkeiten("Präsident","1","https://hs-flensburg.de/sites/default/files/styles/full_width/public/aktuelles/2017-11/29.11.2017%20Neuer%20Pr%C3%A4sident%20Jansen.jpg?itok=ldELC8wU","2018-09-15 17:17:30.0"),
  new Neuigkeiten("eHealth for Regions","2","https://hs-flensburg.de/sites/default/files/styles/full_width/public/aktuelles/2017-11/29.11.2017%20Neuer%20Pr%C3%A4sident%20Jansen.jpg?itok=ldELC8wU","2018-11-25 17:17:30.0"),
  new Neuigkeiten("Präsident","3","https://hs-flensburg.de/sites/default/files/styles/full_width/public/aktuelles/2017-11/29.11.2017%20Neuer%20Pr%C3%A4sident%20Jansen.jpg?itok=ldELC8wU","2018-10-16 17:17:30.0"),
  new Neuigkeiten("Präsident","4","https://hs-flensburg.de/sites/default/files/styles/full_width/public/aktuelles/2017-11/29.11.2017%20Neuer%20Pr%C3%A4sident%20Jansen.jpg?itok=ldELC8wU","2018-08-15 17:17:30.0"),
  new Neuigkeiten("Präsident","5","https://hs-flensburg.de/sites/default/files/styles/full_width/public/aktuelles/2017-11/29.11.2017%20Neuer%20Pr%C3%A4sident%20Jansen.jpg?itok=ldELC8wU","2018-08-15 17:17:30.0"),
  new Neuigkeiten("Präsident","6","https://hs-flensburg.de/sites/default/files/styles/full_width/public/aktuelles/2017-11/29.11.2017%20Neuer%20Pr%C3%A4sident%20Jansen.jpg?itok=ldELC8wU","2018-08-15 17:55:30.0")

  ];
post={
  name:"",
  beschreibung:"",
  img:"",
  date:this.currentDate
  
  }
  output(){
     return this.news;
   }

  onAddnews(){
    this.currentDate= new Date();
    this.post.date=this.currentDate;
    this.news.push(
      new Neuigkeiten(this.post.name,this.post.beschreibung,this.post.img,this.post.date)
    )
    
    this.post={
      name:"",
      beschreibung:"",
      img:"",
      date:this.currentDate
    }
  }
  onEdit(index:number){
    this.edit=true;
      
    this.post.name=this.news[index].name;
    this.post.beschreibung=this.news[index].beschreibung;
    this.post.img=this.news[index].img;
    this.index=index;
  }
  onEditnews(){
    this.news[this.index].name=this.post.name;
    this.news[this.index].beschreibung=this.post.beschreibung;
    this.news[this.index].img=this.post.img;
 
    this.edit=false;
    this.post.name="";
    this.post.beschreibung="";
    this.post.img="";
  }

  onDelete(index:number){
    this.news.splice(index,1)
  }

  //Sortierung um immer die Aktuellste News als erstes Anzuzeigen
  get sortData() {
    return this.news.sort((a, b) => {
      
      return <any>new Date(b.date) - <any>new Date(a.date);
    });
  }

}