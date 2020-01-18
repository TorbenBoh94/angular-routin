import { Injectable } from '@angular/core';
import {Prof} from './prof'

@Injectable()
export class ProfessorenService {

  professoren=[
    new Prof("https://hs-flensburg.de/sites/default/files/styles/portraitfoto/public/2019-05/Christoph_Jansen_ausschnitt.jpg.jpeg?itok=4-ImiMP8","Christoph","Jansen","Präsidium:Präsident","Raum H32"),
    new Prof("https://hs-flensburg.de/sites/default/files/styles/portraitfoto/public/2017-10/looks_volker.jpg.jpeg?itok=-sBtOfvb","Volker","Looks","Professor am Fachbereich Wirtschaft","Dekan",),
    new Prof("https://hs-flensburg.de/sites/default/files/styles/portraitfoto/public/2017-11/petersen_kai.jpg.jpeg?itok=JVf1P7aR","Kai","Petersen","Professor am Fachbereich Wirtschaft","Senat:Professor",),
   
  ]
  post={
    img:"",
    vorname:"",
    name: "", 
    bereich: "",
    rang:"",
    mail:""
  }

  constructor() { }
   onAddworker(){
     this.professoren.push(
       new Prof(this.post.img,this.post.vorname,this.post.name,this.post.bereich,this.post.mail,this.post.rang)
     )
   };
   onDelete(index:number){
     this.professoren.splice(index,1)
   }
   output(){
     return this.professoren;
   }

}