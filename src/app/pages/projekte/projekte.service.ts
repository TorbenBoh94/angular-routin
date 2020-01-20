import { Injectable } from '@angular/core';
import {Projekt} from './projekt';


@Injectable()
export class ProjekteService {
index:number;
edit:boolean;
  projekte=[
    new Projekt("Software","Dies ist eine Beschreibung","Kai Petersen")
   
  ]
  post={
    name:"",
    beschreibung:"",
    beteiligte: "", 

 
  }

  constructor() { }
   onAddworker(){
     this.projekte.push(
       new Projekt()
     )
  this.post={
    name:"",
    beschreibung:"",
    beteiligte: "", 

 
  }
   };
   onDelete(index:number){
     this.projekte.splice(index,1)
   }
   output(){
     return this.projekte;
   }
   onEdit(index:number){
    this.edit=true;
    this.post.name=this.projekte[index].name;
    this.post.beschreibung=this.projekte[index].beschreibung;
    this.post.beteiligte=this.projekte[index].beteiligte;

    this.index=index;
   }
   onEditProject(){
    this.projekte[this.index].name=this.post.name;
    this.projekte[this.index].beschreibung=this.post.beschreibung;
    this.projekte[this.index].beteiligte=this.post.beteiligte;
   
    this.edit=false;
    this.post.name="";
    this.post.beschreibung="";
    this.post.beteiligte="";

   }

}

