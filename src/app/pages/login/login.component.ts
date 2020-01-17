import{Component,HostBinding,EventEmitter} from '@angular/core';
import{LoginService} from './login.service'
@Component({
  selector:'my-login',
  templateUrl:'login.component.html'
  
  
})

export class LoginComponent{
  @HostBinding('class.login')
  login=false;
  constructor(private loginService:LoginService){}

  onLogin(){
    this.loginService.toggle();
  }
  ngOnInit(){
    this.loginService.change.subscribe(login=>{
      this.login=login;
    })
  }

}