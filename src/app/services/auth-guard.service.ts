import { Injectable } from '@angular/core';
import { Router , ActivatedRouteSnapshot , RouterStateSnapshot , CanActivate } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor( private auth:AuthService ) { }

  canActivate(next:ActivatedRouteSnapshot , state:RouterStateSnapshot){
    if (this.auth.isAuthenticated()) {
      console.log("Acceso permitido");
      return true;
    }else{
      console.error("Acceso no permitido");
      return false
    }
  }
}
