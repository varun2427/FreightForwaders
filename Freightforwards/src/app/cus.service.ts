import { Injectable } from '@angular/core'; 
import {HttpClient} from '@angular/common/http' 
import { Router } from '@angular/router'; 
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject'; 
import { Subject } from 'rxjs';
 
@Injectable({ 
  providedIn: 'root' 
}) 
export class CustomerService {


  
  setIsLoggedIn() {
    
  }
 
  houseShifting(otherService: any) {
    throw new Error('Method not implemented.');
  }
  getCustomerByEmail(login: any) {
    throw new Error('Method not implemented.');
  } 
  
  
 
private loginStatus:boolean; 
  login: any=''; 
  public cartItemList : any = [] 
  public details = new BehaviorSubject<any>([]); 
   
  constructor(private httpClient: HttpClient,private _router:Router) { 
    this.loginStatus = false; 
    
   } 
 
   setLoginStatus(){ 
    this.loginStatus = true; 
  } 
  getLoginStatus(){ 
    return this.loginStatus; 
  } 
  setLogoutStatus(){ 
    this.loginStatus = false; 
  } 
  getCountries(){ 
    return this.httpClient.get('https://countriesnow.space/api/v0.1/countries'); 
   } 
   getStates(){ 
    return this.httpClient.get('https://countriesnow.space/api/v0.1/countries/states'); 
 
   } 
   registerCustomer(customer:any){ 
    return this.httpClient.post('/registerCustomer',customer); 
   } 
  
    
   houseSwifting(houseService:any){ 
    return this.httpClient.post('houseService',houseService); 
   } 

   officeSwifting(officeSerivce : any){ 
 
   } 


   getDetails(){ //Observables 
    return this.httpClient.get('displayAllDetails'); 
  } 
  // loginUser(customer:any){ 
  //   return this.httpClient.post('loginUser',customer); 
  // } 
  loginUser(email:any,password:any):any{ 
    return this.httpClient.get('http://localhost:8085/login/'+email+'/'+password); 
  } 


   loggedIn(){ 
    return !!localStorage.getItem('token') 
   } 
   logoutUser(){ 
    localStorage.removeItem("token") 
    this._router.navigate(['events']) 
   } 
 
 
   displayEmpByEmail(email:string){ 
    return this.httpClient.get('displayEmpByEmail/'+email); 
  } 
  setMessage(data:any){ 
    this.login=data; 
  } 
  getMessage(){ 
    return this.login; 
  } 

  setProduct(product:any){ 
    this.cartItemList.push(...product); 
    this.details.next(product); 

  } 
 
 
}

