// cliente-distancia.dto.ts
export class ClienteDistanciaDTO {
  clienteId: number;
  distancia: number;

  constructor(clienteId: number, distancia: number) {
    this.clienteId = clienteId;
    this.distancia = distancia;
  }
}
