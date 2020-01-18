import { Injectable } from '@angular/core';
import {Forschung} from './forschung';

@Injectable()
export class ForschungService {

  constructor() { }
  publication=[

  ]
    post={
    forschungsprojekt:"",
    autor:"",
    publikationsTyp: "", 
    jahr: "",
    volumen:"",
    publisher:"",
    seiten:"",
    school:""
  }
  
     onAddPublication(){
     this.publication.push(
       new Forschung(this.post.forschungsprojekt,this.post.autor,this.post.publikationsTyp,this.post.jahr,this.post.volumen,this.post.publisher,this.post.seiten,this.post.school)
     )
   };
   onDelete(index:number){
     this.publication.splice(index,1)
   }
   output(){
     return this.publication;
   }

}