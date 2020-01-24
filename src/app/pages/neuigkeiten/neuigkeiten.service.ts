import { Injectable } from '@angular/core';
import {Neuigkeiten} from './neuigkeiten'

@Injectable()
export class NeuigkeitenService {

  constructor() { }
currentDate = new Date();
news=[
  new Neuigkeiten("Präsident","1","https://hs-flensburg.de/sites/default/files/styles/full_width/public/aktuelles/2017-11/29.11.2017%20Neuer%20Pr%C3%A4sident%20Jansen.jpg?itok=ldELC8wU",this.currentDate),
  new Neuigkeiten("Präsident","2","https://hs-flensburg.de/sites/default/files/styles/full_width/public/aktuelles/2017-11/29.11.2017%20Neuer%20Pr%C3%A4sident%20Jansen.jpg?itok=ldELC8wU",this.currentDate),
  new Neuigkeiten("Präsident","3","https://hs-flensburg.de/sites/default/files/styles/full_width/public/aktuelles/2017-11/29.11.2017%20Neuer%20Pr%C3%A4sident%20Jansen.jpg?itok=ldELC8wU",this.currentDate),
  new Neuigkeiten("Präsident","4","https://hs-flensburg.de/sites/default/files/styles/full_width/public/aktuelles/2017-11/29.11.2017%20Neuer%20Pr%C3%A4sident%20Jansen.jpg?itok=ldELC8wU",this.currentDate),
  new Neuigkeiten("Präsident","5","https://hs-flensburg.de/sites/default/files/styles/full_width/public/aktuelles/2017-11/29.11.2017%20Neuer%20Pr%C3%A4sident%20Jansen.jpg?itok=ldELC8wU",this.currentDate),
  new Neuigkeiten("Präsident","6","https://hs-flensburg.de/sites/default/files/styles/full_width/public/aktuelles/2017-11/29.11.2017%20Neuer%20Pr%C3%A4sident%20Jansen.jpg?itok=ldELC8wU",this.currentDate)

  ];
post={
  name:"",
  beschreibung:"",
  img:"",
  
  }
  output(){
     return this.news;
   }

  onAddNews(){
    this.news.push(
      new Neuigkeiten(this.post.name,this.post.beschreibung,this.post.img,this.currentDate)
    )
    this.post={
      name:"",
      beschreibung:"",
      img:"",
    }
  }



}