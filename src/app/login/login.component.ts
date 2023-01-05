import { Component } from '@angular/core';
import User from 'src/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    user:User = new User();

    test(){
      console.log(this.user);
    }

    test2(event:string){
      console.log(event);
    }
}
