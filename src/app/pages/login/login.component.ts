import{Component} from '@angular/core';

@Component({
  selector:'my-login',
  templateUrl:'login.component.html'
  
  
})

export class LoginComponent{
  
  loginUser(event){
    event.preventDefault()
    const target=event.target
    const username=target.querySelector('#username').value
    const password=target.querySelector('#password').value
    console.log(username,password)
  }
}