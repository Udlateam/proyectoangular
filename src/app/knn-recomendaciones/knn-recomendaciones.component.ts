import { Component } from '@angular/core';
import { ClienteInteresService } from '../cliente-interes/cliente-interes.service';
import { ClienteDistanciaDTO } from '../cliente-interes/cliente-distancia.dto';

@Component({
  selector: 'app-knn-recomendaciones',
  templateUrl: './knn-recomendaciones.component.html',
  styleUrls: ['./knn-recomendaciones.component.css']
})
export class KnnRecomendacionesComponent {

  clienteId!: number;
  kValue!: number;
  recomendaciones!: ClienteDistanciaDTO[];

  constructor(private clienteInteresService: ClienteInteresService) { }

  onSubmit() {
    this.clienteInteresService.getKnnRecomendaciones(this.clienteId, this.kValue)
      .subscribe({
        next: (data) => {
          this.recomendaciones = data;
        },
        error: (error) => {
          console.error(error);
          // Manejar errores aquí (mostrar mensaje al usuario, por ejemplo)
        }
      });
  }
}
