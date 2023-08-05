import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';

@Injectable()
export class CanActivateUser implements CanActivate {


  constructor(private router:Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    const formData = sessionStorage.getItem('loginForm');
    if (formData) {
      return true;
    }else {
      this.router.navigate(['/']);
      return false;
    }

  }
}
