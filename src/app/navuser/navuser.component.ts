import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navuser',
  templateUrl: './navuser.component.html',
  styleUrls: ['./navuser.component.css']
})
export class NavuserComponent {
  constructor(private route : Router){}
   ngOnInit(): void {
       
   }
   logout(){
    localStorage.removeItem("token");
    this.route.navigate(['/login']);
   }

}
