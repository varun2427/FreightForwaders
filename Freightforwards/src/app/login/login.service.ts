import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private isLoggedIn = new Subject<boolean>();
  router: any;
  constructor() {}

  setIsLoggedIn(bool: boolean): void {
    this.isLoggedIn.next(bool);
  }

  getIsLoggedIn(): Observable<boolean> {
    return this.isLoggedIn.asObservable();
  }

  logoutsubmit(){
    this.router.navigateByUrl('/home');
  }
}