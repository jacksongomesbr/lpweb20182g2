import { Component, OnInit } from '@angular/core';
import { AutoresService } from '../autores.service';
import { NoticiasService } from '../noticias.service';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  placas$ = null;

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.placas$ = this.api.todas_as_placas();
  }

  detalhes_da_placa(placa) {
    this.router.navigate(['admin', 'placas', placa.id]);
  }

}
