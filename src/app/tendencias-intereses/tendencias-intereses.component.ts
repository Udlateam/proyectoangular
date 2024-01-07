import { Component, OnInit } from '@angular/core';
import { tendenciaInteres } from './tendenciaInteres';
import { ClienteInteresService } from '../cliente-interes/cliente-interes.service';

@Component({
  selector: 'app-tendencias-intereses',
  templateUrl: './tendencias-intereses.component.html',
  styleUrls: ['./tendencias-intereses.component.css']
})
export class TendenciasInteresesComponent implements OnInit {

  tendencias: tendenciaInteres[] = [];
  inicio?: string; // Tipo string
  fin?: string; // Tipo string

  constructor(private clienteInteresService: ClienteInteresService) {}

  ngOnInit(): void {}

  cargarTendencias(): void {
    if (this.inicio && this.fin) {
      this.clienteInteresService.getTendenciasIntereses(this.inicio, this.fin)
        .subscribe(tendencias => {
          this.tendencias = tendencias;
        });
    }
  }
}
