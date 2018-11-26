import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-cadastrar-recorte',
  templateUrl: './admin-cadastrar-recorte.component.html',
  styleUrls: ['./admin-cadastrar-recorte.component.css']
})
export class AdminCadastrarRecorteComponent implements OnInit {
  placas$ = null;
  placa = null;
  largura = null;
  altura = null;
  erro_validacao = null;

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.placas$ = this.api.todas_as_placas();
  }

  salvar() {
    this.api.consultar_placa(this.placa).subscribe(
      (placa: any) => {
        const area = placa.largura * placa.altura;
        this.api.consultar_recortes_da_placa(placa.id).subscribe(
          (recortes: any) => {
            let soma_area_recortes = 0;
            for (const recorte of recortes) {
              soma_area_recortes += recorte.largura * recorte.altura;
            }
            const area_disponivel = area - soma_area_recortes;
            const area_recorte = this.largura * this.altura;
            if (area_disponivel >= area_recorte) {
              this.api.salvar_recorte(this.placa, this.largura, this.altura).subscribe(
                (recorte: any) => {
                  this.router.navigate(['admin', 'placas', this.placa]);
                }
              );
            } else {
              this.erro_validacao = 'Área indisponível para recorte nesta placa';
            }
          }
        );
      }
    );
  }

}
