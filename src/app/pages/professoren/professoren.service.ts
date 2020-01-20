import { Injectable } from '@angular/core';
import {Prof} from './prof'

@Injectable()
export class ProfessorenService {
index:number;
edit:boolean;
  professoren=[
    new Prof("https://hs-flensburg.de/sites/default/files/styles/portraitfoto/public/2019-05/Christoph_Jansen_ausschnitt.jpg.jpeg?itok=4-ImiMP8","Christoph","Jansen","Präsidium:Präsident","H 032"),
    new Prof("https://hs-flensburg.de/sites/default/files/styles/portraitfoto/public/2017-10/looks_volker.jpg.jpeg?itok=-sBtOfvb","Volker","Looks","Professor am Fachbereich Wirtschaft","C 026",),
    new Prof("https://hs-flensburg.de/sites/default/files/styles/portraitfoto/public/2017-11/petersen_kai.jpg.jpeg?itok=JVf1P7aR","Kai","Petersen","Professor am Fachbereich Wirtschaft","C 206"),
   
  ]
  post={
    img:"",
    vorname:"",
    name: "", 
    bereich: "",
    raum:"",
 
  }

  constructor() { }
   onAddworker(){
     this.professoren.push(
       new Prof(this.post.img,this.post.vorname,this.post.name,this.post.bereich,this.post.raum)
     )
    this.post.name="";
    this.post.vorname="";
    this.post.img="";
    this.post.bereich="";
    this.post.raum="";
   };
   onDelete(index:number){
     this.professoren.splice(index,1)
   }
   output(){
     return this.professoren;
   }
   onEdit(index:number){
    this.edit=true;
    this.post.name=this.professoren[index].name;
    this.post.vorname=this.professoren[index].vorname;
    this.post.img=this.professoren[index].img;
    this.post.bereich=this.professoren[index].bereich;
    this.post.raum=this.professoren[index].raum;
    this.index=index;
   }
   onEditworker(){
    this.professoren[this.index].name=this.post.name;
    this.professoren[this.index].vorname=this.post.vorname;
    this.professoren[this.index].img=this.post.img;
    this.professoren[this.index].bereich=this.post.bereich;
    this.professoren[this.index].raum=this.post.raum;
    this.edit=false;
    this.post.name="";
    this.post.vorname="";
    this.post.img="";
    this.post.bereich="";
    this.post.raum="";
   }

}