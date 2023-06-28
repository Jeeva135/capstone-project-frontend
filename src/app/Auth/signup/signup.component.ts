import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 

  name : string = '';
  username : string = '';
  password : string = '';
  user :User = new User();

  

  constructor(private authService : AuthService, private route : Router) {}

  ngOnInit(): void {
    this.username = '';
    this.password = '';
    this.name = '';
  }
  signup(){
    this.user.name = this.name;
    this.user.userName = this.username;
    this.user.password = this.password;
  
  // this.user.role = 'user';
  

  this.authService.signup(this.user).subscribe(res =>{
    if(res==null){
      alert("registrataion failed");
      this.ngOnInit();
    }
    else{
      console.log("registration successfull");
      alert("registrataion successfull");
      this.route.navigate(['/login']);
  
  }

  },err =>{
    alert("Registration failed");
    this.ngOnInit();
  })
  
}

    
  }



