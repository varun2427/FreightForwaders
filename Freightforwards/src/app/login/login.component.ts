import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../cus.service';
import { ToastrService } from 'ngx-toastr';
import { OidcSecurityService } from 'angular-auth-oidc-client';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})
export class LoginComponent {
  isAuthenticated: boolean = false;
  data: any;
  profile:any;
  passwordFieldType: string = 'password';
  togglePasswordVisibility(): void {
    const passwordInput = document.getElementById('exampleInputPassword1') as HTMLInputElement;
    passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
  }
  constructor(private router: Router, private service: CustomerService, private toastr: ToastrService, private oidcSecurityservice: OidcSecurityService) { }
  email = '';
  password = '';
  customers: any;
  customer:any;
  submitLogin(loginForm: any) {
    if (loginForm.login == 'hr' && loginForm.password == 'hr') {
      this.service.setLoginStatus();
      alert('Welocome to hr home page ')
      this.router.navigate(['services'])
    } else {
      this.email = loginForm.login;
      this.password = loginForm.password;
      this.service.loginUser(this.email, this.password).subscribe((data: any) => {
        console.log(data);
        this.customer=data;
      })
      if(this.customer!=null){
        console.log('login success');
      this.service.setLoginStatus();
      this.toastr.success('Login success');
      this.service.setMessage(loginForm.login);
      // alert('Welcome to Services');
      this.router.navigate(['services']);

      }else{
        console.log('login invalid')
      }
      
    }

  }

  ngOnInit(): void {
    this.oidcSecurityservice.isAuthenticated$.subscribe(({ isAuthenticated }) => {
      this.isAuthenticated = isAuthenticated;
    })
    this.oidcSecurityservice.getUserData().subscribe((data)=> {
      this.profile={emailId:data.nickname+'@gmail.com',image:data.picture,fullName:data.name,userName:data.given_name,phoneNo:"Null"}
      localStorage.setItem("user", JSON.stringify(this.profile));
    } );

    //if user is authenticated user will be sent to controller page 
    if (this.isAuthenticated) {
      this.service.setIsLoggedIn();
      this.router.navigateByUrl('/home');
      // this.router.navigate(['collector']);
    }
    else{
      
    }
    throw new Error('Method not implemented.');
  }

  //google Login method 
  GoogleLogin() {
    this.oidcSecurityservice.authorize();
    if (this.isAuthenticated) {
      this.service.setIsLoggedIn();
      this.router.navigateByUrl('/home');
    }
  }
}