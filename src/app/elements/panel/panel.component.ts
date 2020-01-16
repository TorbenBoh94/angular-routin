import{Component,Input}from '@angular/core';

@Component({
  selector:"my-panel",
  templateUrl:'./panel.component.html'
  
})

export class PanelComponent{
  @Input() title:String;
  
  
}