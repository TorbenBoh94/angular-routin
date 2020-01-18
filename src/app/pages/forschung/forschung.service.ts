import { Injectable } from '@angular/core';
import {Forschung} from './forschung';

@Injectable()
export class ForschungService {

  constructor() { }
  publicationen=[
    new Forschung("Deutschland am Rander einer Rezession: Gemeinschaftsdiagnose Herbst 2008","ifo Institut München, Ifw Kiel, IWH, RWI Essen","Magazin",2008,"volumen","publisher","school"),
    


  ]
    post={
    forschungsprojekt:"",
    autor:"",
    publikationsTyp: "", 
    jahr: "",
    volumen:"",
    publisher:"",
    school:""
  }

     onAddPublication(){
     this.publicationen.push(
       new Forschung(this.post.forschungsprojekt,this.post.autor,this.post.publikationsTyp,this.post.jahr,this.post.volumen,this.post.publisher,this.post.school)
     )
   };
   onDelete(index:number){
     this.publicationen.splice(index,1)
   }
   output(){
     return this.publicationen;
   }

}