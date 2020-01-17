import{Component} from '@angular/core';
import {Prof} from './prof'
import{LoginService }from '../login/login.service'

@Component({
  selector:'my-professor',
  templateUrl:'./professoren.component.html',
  
  
  
})

export class ProfessorComponent{
  professoren=[
    new Prof("https://hs-flensburg.de/sites/default/files/styles/portraitfoto/public/2019-05/Christoph_Jansen_ausschnitt.jpg.jpeg?itok=4-ImiMP8","Christoph","Jansen","Präsidium:Präsident","christoph.jansen@hs-flensburg.de","Raum H32"),
    new Prof("https://hs-flensburg.de/sites/default/files/styles/portraitfoto/public/2017-10/looks_volker.jpg.jpeg?itok=-sBtOfvb","Volker","Looks","Professor am Fachbereich Wirtschaft","Dekan","volker.looks@hs-flensburg.de"),
    new Prof("https://hs-flensburg.de/sites/default/files/styles/portraitfoto/public/2017-11/petersen_kai.jpg.jpeg?itok=JVf1P7aR","Kai","Petersen","Professor am Fachbereich Wirtschaft","Senat:Professor","kai.petersen@hs-flensburg.de"),
    
  ]
  login:boolean
  constructor(private loginService:LoginService){this.login=this.loginService.output()}


  

}