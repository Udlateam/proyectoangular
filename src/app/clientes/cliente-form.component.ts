//cliente-form.component.ts
import { Component, OnInit } from '@angular/core';
import { cliente } from './cliente';
import { ClienteService } from './cliente.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html'
})
export class ClienteFormComponent implements OnInit {

  public cliente: cliente = new cliente()
  public titulo: string = "Crear Usuario"

  constructor(private clienteService: ClienteService,
    private router: Router,
    private activatedRouted: ActivatedRoute) { }


  ngOnInit() {
    this.cargarCliente();
  }

  cargarCliente(): void {
    this.activatedRouted.params.subscribe(params => {
      let id = params['id']
      if (id) {
        this.clienteService.getCliente(id).subscribe((cliente) => {
          this.cliente = cliente;
          this.titulo = "Editar Cliente";  // Cambia el título a "Editar Cliente"
        })
      } else {
        this.titulo = "Crear Cliente";  // Si no hay id, es un nuevo cliente
      }
    })

  }

  create(): void {
    this.clienteService.create(this.cliente)
      .subscribe(cliente => {
        this.router.navigate(['/clientes'])
        swal('Nuevo Cliente', `Cliente ${cliente.nombre} creado con exito`, 'success')
      }
      );
  }

  update(): void {
    this.clienteService.update(this.cliente)
      .subscribe(cliente => {
        this.router.navigate(['/clientes'])
        swal('Cliente Actualizado', `Cliente ${cliente.nombre} actualizado con éxito!`, 'success')
      }

      )
  }
}
