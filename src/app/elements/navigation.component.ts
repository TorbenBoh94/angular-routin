import { Component } from '@angular/core';


@Component({
  selector: 'my-element-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: [ '../app.component.css' ]
})
export class NavigationComponent  {
       collapsed = true;
     toggleCollapsed(): void {
       this.collapsed = !this.collapsed;
     }
}
