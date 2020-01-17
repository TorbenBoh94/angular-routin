import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable()
export class LoginService {

  constructor() { }
  login=false;
  @Output() change:EventEmitter<boolean>=new EventEmitter();

  toggle(){
    this.login=!this.login;
    this.change.emit(this.login);
  }
  output(){
    return this.login;
  }
}