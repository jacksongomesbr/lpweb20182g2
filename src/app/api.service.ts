import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { filter, map, tap, concat, mergeMap, concatMap, concatAll } from 'rxjs/operators';
import { forkJoin, from, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {
  API_URL = 'http://localhost:8000/api/auth/';

  constructor(private http: HttpClient) { }

  autenticar(login: string, senha: string) {
    return this.http.post(this.API_URL, { username: login, password: senha });
  }

  armazenarCredenciais(login: string, senha: string) {
    localStorage.setItem('username', login);
    localStorage.setItem('password', senha);
  }

  estahLogado() {
    const username = localStorage.getItem('username');
    if (username) {
      return true;
    } else {
      return false;
    }
  }

  sair() {
    localStorage.clear();
  }

  getCredenciais() {
    if (!this.estahLogado()) {
      return null;
    }
    const credenciais = {
      username: localStorage.getItem('username'),
      password: localStorage.getItem('password')
    };
    return credenciais;
  }
}


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_PLACAS_URL = 'http://localhost:8000/api/placas/';
  API_MATERIAIS_URL = 'http://localhost:8000/api/materiais/';
  API_RECORTES_URL = 'http://localhost:8000/api/recortes-retangulares/';

  constructor(private http: HttpClient, private auth: AutenticacaoService) { }

  todas_as_placas() {
    return this.http.get(this.API_PLACAS_URL);
  }

  consultar_placa(id) {
    return this.http.get(this.API_PLACAS_URL + id + '/');
  }

  consultar_material(id) {
    return this.http.get(this.API_MATERIAIS_URL + id + '/');
  }

  consultar_recortes_da_placa(id) {
    return this.http.get(this.API_RECORTES_URL + '?placa=' + id);
  }

  salvar_recorte(placa, largura, altura) {
    const options = this.getHeaders();
    const recorte = {
      placa: placa,
      largura: largura,
      altura: altura
    };
    return this.http.post(this.API_RECORTES_URL, recorte, options);
  }

  private getHeaders() {
    const credenciais = this.auth.getCredenciais();
    if (credenciais) {
      return {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Basic ' + btoa(`${credenciais.username}:${credenciais.password}`)
        })
      };
    } else {
      return {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        })
      };
    }
  }

}


