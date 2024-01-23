// cliente-distancia.dto.ts
export class ClienteDistanciaDTO {
  clienteId: number;
  distancia: number;
  nombre?: string; // Agregado para almacenar el nombre del cliente
  apellido?: string; // Agregado para almacenar el apellido del cliente

  constructor(clienteId: number, distancia: number, nombre?: string, apellido?: string) {
    this.clienteId = clienteId;
    this.distancia = distancia;
    this.nombre = nombre;
    this.apellido = apellido;
  }
}
