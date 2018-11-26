import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticacaoService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoGuard implements CanActivate, CanActivateChild {

  constructor(private router: Router, private autenticacao: AutenticacaoService) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let url: string = state.url;
    if (this.autenticacao.estahLogado()) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    if (this.autenticacao.estahLogado()) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
