//cliente-interes.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { clienteInteres } from './cliente-interes';
import { ClienteInteresService } from './cliente-interes.service';
import { ClienteDistanciaDTO } from './cliente-distancia.dto';
import swal from 'sweetalert2';

@Component({
  selector: 'app-cliente-interes',
  templateUrl: './cliente-interes.component.html',
  styleUrls: ['./cliente-interes.component.css']
})
export class ClienteInteresComponent implements OnInit {

  clientesInteres: clienteInteres[] = [];

  constructor(private clienteInteresService: ClienteInteresService) {
  }

  obtenerRecomendacionesKnn(clienteId: number, k: number) {
    this.clienteInteresService.getKnnRecomendaciones(clienteId, k).subscribe(
      recomendaciones => {
        // Manejar las recomendaciones aquí
        console.log(recomendaciones);
      },
      error => {
        // Manejar el error aquí
        console.error(error);
      }
    );
  }

  ngOnInit() {
    this.clienteInteresService.getClientesInteres().subscribe(
      clientesInteres => this.clientesInteres = clientesInteres
    );
  }



  delete(clienteInteres: clienteInteres): void {
    swal({
      title: '¿Estás Seguro?',
      text: `¿Seguro que desea eliminar al interes con id ${clienteInteres.interesId}?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: false,
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.clienteInteresService.delete(clienteInteres.id!).subscribe(
          response => {
            this.clientesInteres = this.clientesInteres.filter(cli => cli !== clienteInteres)
            swal(
              'Cliente Eliminado!',
              `Interes del Cliente ${clienteInteres.clienteId} eliminado con éxito.`,
              'success'
            )
          }
        )
      }
    })
  }
}
