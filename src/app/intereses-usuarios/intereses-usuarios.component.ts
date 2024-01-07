import { Component, OnInit } from '@angular/core';
import { ClienteInteresService } from '../cliente-interes/cliente-interes.service';
@Component({
  selector: 'app-intereses-usuarios',
  templateUrl: './intereses-usuarios.component.html',
  styleUrls: ['./intereses-usuarios.component.css']
})
export class InteresesUsuariosComponent implements OnInit{

  intereses: any[] = [];

  constructor(private clienteInteresService: ClienteInteresService) { }

  ngOnInit(): void {
    this.clienteInteresService.getInteresesConUsuarios().subscribe(data => {
      this.intereses = data;
    });
  }

}
