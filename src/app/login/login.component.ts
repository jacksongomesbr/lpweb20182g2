import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = null;
  password = null;
  erro: null;

  constructor(private auth: AutenticacaoService, private router: Router) { }

  ngOnInit() {
  }

  entrar() {
    this.auth.autenticar(this.username, this.password).subscribe(
      resposta => {
        this.auth.armazenarCredenciais(this.username, this.password);
        this.router.navigate(['admin']);
      },
      erro => this.erro = erro.error.mensagem
    );
  }
}
