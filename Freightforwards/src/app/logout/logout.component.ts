import { Component } from '@angular/core'; 
import { Route, Router } from '@angular/router'; 
import { CustomerService } from '../cus.service'; 
import { LoginService } from '../login/login.service'; 
 
 
@Component({ 
  selector: 'app-logout', 
  templateUrl: './logout.component.html', 
  styleUrls: ['./logout.component.css'] 
}) 
export class LogoutComponent { 
  constructor (private service:CustomerService , private router : Router, private loginService: LoginService){ 
 
  }  
  logout(){ 
  //  this.service.setLogoutStatus(); 
 alert('logout Successful......') 
 this.loginService.setIsLoggedIn(false); 
 this.router.navigateByUrl('/'); 
} 
  
 logoutsubmit(){ 
  this.router.navigateByUrl('/services'); 
} 
 
}