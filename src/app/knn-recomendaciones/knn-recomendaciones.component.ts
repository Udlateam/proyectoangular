import { Component } from '@angular/core';
import { ClienteInteresService } from '../cliente-interes/cliente-interes.service';
import { ClienteDistanciaDTO } from '../cliente-interes/cliente-distancia.dto';
import { cliente } from '../clientes/cliente';
import { ClienteService } from '../clientes/cliente.service';

@Component({
  selector: 'app-knn-recomendaciones',
  templateUrl: './knn-recomendaciones.component.html',
  styleUrls: ['./knn-recomendaciones.component.css']
})
export class KnnRecomendacionesComponent {

  clienteId!: number;
  kValue!: number;
  recomendaciones!: ClienteDistanciaDTO[];
  nombreApellido!: string;
  resultadosBusqueda: cliente[] = []; // Tipo de datos que representa a tus clientes
  clienteSeleccionado!: cliente;

  constructor(
    private clienteInteresService: ClienteInteresService,
    private clienteService: ClienteService // Añade esta línea
  ) { }

  // onSubmit() {
  //   this.clienteInteresService.getKnnRecomendaciones(this.clienteId, this.kValue)
  //     .subscribe({
  //       next: (data) => {
  //         this.recomendaciones = data;
  //       },
  //       error: (error) => {
  //         console.error(error);
  //         // Manejar errores aquí (mostrar mensaje al usuario, por ejemplo)
  //       }
  //     });
  // }

    // Llamada cuando se envía el formulario para obtener recomendaciones
    onSubmit() {
      if (this.clienteSeleccionado && this.clienteSeleccionado.id) {
        this.clienteInteresService.getKnnRecomendaciones(this.clienteSeleccionado.id, this.kValue)
          .subscribe({
            next: (data) => {
              this.recomendaciones = data;
            },
            error: (error) => {
              console.error(error);
              // Manejar errores aquí
            }
          });
      }
    }

    buscarCliente() {
      if (this.nombreApellido.length > 2) {
        this.clienteService.buscarClientesPorNombreApellido(this.nombreApellido).subscribe({
          next: (data: cliente[]) => { // Especifica el tipo de 'data' aquí como 'Cliente[]'
            this.resultadosBusqueda = data;
          },
          error: (error: any) => { // Puedes dejar 'any' aquí o definir una interfaz más específica para el error
            console.error(error);
            // Manejar errores aquí (mostrar mensaje al usuario, por ejemplo)
          }
        });
      } else {
        this.resultadosBusqueda = []; // Limpiar los resultados si la búsqueda es muy corta
      }
    }
}
