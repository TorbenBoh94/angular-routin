import{Component} from '@angular/core';
import {Praesident} from './praesident';

@Component({
  selector:'my-landing',
  templateUrl:'./landing.component.html'
  
  
})

export class LandingComponent{
  praesident=new Praesident("https://hs-flensburg.de/sites/default/files/styles/portraitfoto/public/2019-05/Christoph_Jansen_ausschnitt.jpg.jpeg?itok=4-ImiMP8","Christoph","Jansen","Präsidium:Präsident","christoph.jansen@hs-flensburg.de","Raum H32")

}