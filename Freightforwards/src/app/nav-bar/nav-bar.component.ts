import { AfterViewInit, Component } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';
import { CustomerService } from '../cus.service';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements AfterViewInit {
  constructor(private loginService: LoginService , private router: Router,private service:CustomerService, private oidcSecurityService:OidcSecurityService) {}

  
  data: any = null;
  
  ngAfterViewInit() {
    this.loginService.getIsLoggedIn().subscribe((val)=>{
      this.data = val;
    })
  }

  loggedIn(){
    return this.service.getLoginStatus();
   
  }
  signout(){
    this.oidcSecurityService.logoff().subscribe();
    this.router.navigate(['']);
    this.service.setLogoutStatus();
    alert('log off....')
    this.router.navigate(['login']);
  }
 
}