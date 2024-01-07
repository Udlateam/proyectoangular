//cliente-interes-form.component.ts
import { Component, OnInit } from '@angular/core';
import { clienteInteres } from './cliente-interes';
import { ClienteInteresService } from './cliente-interes.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-cliente-interes-form',
  templateUrl: './cliente-interes-form.component.html'
})
export class ClienteInteresFormComponent implements OnInit {

  public clienteInteres: clienteInteres = new clienteInteres()
  public titulo: string = "Crear Cliente-Interes"

  constructor(private clienteInteresService: ClienteInteresService,
    private router: Router,
    private activatedRouted: ActivatedRoute) { }

  ngOnInit() {
    this.cargarClienteInteres();
  }

  cargarClienteInteres(): void {
    this.activatedRouted.params.subscribe(params => {
      let id = params['id']
      if (id) {
        this.clienteInteresService.getClienteInteres(id).subscribe((clienteInteres) => {
          this.clienteInteres = clienteInteres;
          this.titulo = "Editar Cliente-Interes";  // Cambia el título a "Editar Cliente"
        })
      } else {
        this.titulo = "Crear Cliente-Interes";  // Si no hay id, es un nuevo cliente
      }
    })
  }

  create(): void {
    this.clienteInteresService.create(this.clienteInteres)
      .subscribe(clienteInteres => {
        this.router.navigate(['/clientes-interes'])
        swal('Nuevo Cliente-Interes', `ClienteInteres ${clienteInteres.clienteApellido} creado con exito`, 'success')
      }
      );
  }

  update(): void {
    this.clienteInteresService.update(this.clienteInteres)
      .subscribe(clienteInteres => {
        this.router.navigate(['/clientes-interes'])
        swal('Cliente Actualizado', `ClienteInteres ${clienteInteres.clienteApellido} actualizado con éxito!`, 'success')
      }

      )
  }


}
