import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-placa',
  templateUrl: './placa.component.html',
  styleUrls: ['./placa.component.css']
})
export class PlacaComponent implements OnInit {
  placa = null;
  recortes = null;

  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.api.consultar_placa(id).subscribe(
      (placa: any) => {
        this.placa = placa;
        this.placa.area = placa.largura * placa.altura;
        this.api.consultar_material(placa.material).subscribe(
          material => this.placa.material = material
        );
        this.api.consultar_recortes_da_placa(placa.id).subscribe(
          (recortes: any) => {
            this.recortes = recortes;
            let soma_area_recortes = 0;
            for (const recorte of recortes) {
              soma_area_recortes += recorte.largura * recorte.altura;
            }
            this.placa.area_disponivel = this.placa.area - soma_area_recortes;
          }
        );
      }
    );
  }

}
