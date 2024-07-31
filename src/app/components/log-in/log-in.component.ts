import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  constructor(){};
  public userLogin:FormGroup= new FormGroup({
    userName : new FormControl("",[Validators.required]),
    email : new FormControl("",[Validators.email]),
    password : new FormControl("",[Validators.required,Validators.minLength(8)])
  });
  sendUserLoginData(){
    console.log(this.userLogin);

  }

}
