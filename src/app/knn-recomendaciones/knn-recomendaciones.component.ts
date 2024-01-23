// knn-recomendaciones.component.ts
import { Component } from '@angular/core';
import { ClienteService } from '../clientes/cliente.service';
import { ClienteInteresService } from '../cliente-interes/cliente-interes.service';
import { ClienteDistanciaDTO } from '../cliente-interes/cliente-distancia.dto';
import { cliente } from '../clientes/cliente';

@Component({
  selector: 'app-knn-recomendaciones',
  templateUrl: './knn-recomendaciones.component.html',
  styleUrls: ['./knn-recomendaciones.component.css']
})
export class KnnRecomendacionesComponent {
  nombreApellido!: string;
  clienteSeleccionado!: cliente;
  resultadosBusqueda: cliente[] = [];
  kValue!: number;
  recomendaciones!: ClienteDistanciaDTO[];

  constructor(
    private clienteInteresService: ClienteInteresService,
    private clienteService: ClienteService
  ) { }

  buscarCliente() {
    if (this.nombreApellido.length > 2) {
      this.clienteService.buscarClientesPorNombreApellido(this.nombreApellido).subscribe({
        next: (data) => {
          this.resultadosBusqueda = data;
        },
        error: (error) => {
          console.error('Error al buscar clientes:', error);
        }
      });
    } else {
      this.resultadosBusqueda = [];
    }
  }

  onSubmit() {
    if (this.clienteSeleccionado && this.clienteSeleccionado.id) {
      this.clienteInteresService.getKnnRecomendaciones(this.clienteSeleccionado.id, this.kValue)
        .subscribe({
          next: (data) => {
            // Aquí suponemos que `data` es un array de `ClienteDistanciaDTO`
            this.recomendaciones = data;
            this.recomendaciones.forEach(recomendacion => {
              this.clienteService.getCliente(recomendacion.clienteId).subscribe(cliente => {
                recomendacion.nombre = cliente.nombre;
                recomendacion.apellido = cliente.apellido;
              });
            });
          },
          error: (error) => {
            console.error('Error al obtener recomendaciones:', error);
          }
        });
    }
  }
}
