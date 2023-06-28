import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  user: User = new User();

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.username = '';
    this.password = '';
  }

  login(): void {
    this.user.userName = this.username;
    this.user.password = this.password;

    this.authService.login(this.user).subscribe(
      (res) => {
        if (res == null) {
          alert('Username or password is wrong');
          this.ngOnInit();
        } else {
          console.log('Login successful');
          // Store user details in local storage or perform any necessary actions
          this.router.navigate(['/user']);
        }
      },
      (err) => {
        alert('Login failed');
        this.ngOnInit();
      }
    );
  }
}