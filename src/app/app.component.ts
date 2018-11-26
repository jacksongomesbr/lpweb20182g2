import { Component, OnInit } from '@angular/core';
import { Noticia } from './noticia.model';
import { AutenticacaoService } from './api.service';
import { Router } from '@angular/router';

/**
 * Componente AppComponent.
 *
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  /**
   * Variável de controle para a navbar
   */
  isNavbarCollapsed = true;

  constructor(private auth: AutenticacaoService, private router: Router) {

  }

  /**
   * Implementação da interface {@link OnInit}
   */
  ngOnInit() {

  }

  sair() {
    this.auth.sair();
    this.router.navigate(['']);
  }
}
