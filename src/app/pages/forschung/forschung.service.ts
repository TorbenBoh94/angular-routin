import { Injectable } from '@angular/core';
import {Forschung} from './forschung';

@Injectable()
export class ForschungService {

  constructor() { }
  publicationen=[
    new Forschung("Deutschland am Rander einer Rezession: Gemeinschaftsdiagnose Herbst 2008","ifo Institut München, Ifw Kiel, IWH, RWI Essen","Magazin",2008,"volumen","publisher","school"),
    new Forschung("Deutschland am Rander einer Rezession: Gemeinschaftsdiagnose Herbst 2008","ifo Institut München, Ifw Kiel, IWH, RWI Essen","Magazin",2008,"volumen","publisher","school"),


  ]
    post={
    forschungsprojekt:"",
    autor:"",
    publikationsTyp: "Publikations Typ", 
    jahr: "",
    volumen:"",
    publisher:"",
    school:""
  }
edit=false;
     onAddPublication(){
     this.publicationen.push(
       new Forschung(this.post.forschungsprojekt,this.post.autor,this.post.publikationsTyp,this.post.jahr,this.post.volumen,this.post.publisher,this.post.school)
     )
         this.post={
    forschungsprojekt:"",
    autor:"",
    publikationsTyp: "Publikations Typ", 
    jahr: "",
    volumen:"",
    publisher:"",
    school:""
  }
   };
  onDelete(index:number){
     this.publicationen.splice(index,1)
   }
   output(){
     return this.publicationen;
   }
  onEdit(index:number){
    this.edit=true;
     this.post.forschungsprojekt=this.publicationen[index].forschungsprojekt;
     this.post.autor=this.publicationen[index].autor;
     this.post.publikationsTyp=this.publicationen[index].publikationsTyp;
     this.post.jahr=this.publicationen[index].jahr;
     this.post.volumen=this.publicationen[index].volumen;
     this.post.publisher=this.publicationen[index].publisher;
     this.post.school=this.publicationen[index].school;


   }

}