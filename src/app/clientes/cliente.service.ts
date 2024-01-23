// cliente.service.ts
import { Injectable } from '@angular/core';
// import { CLIENTES } from './clientes.json';
import { cliente } from './cliente'; // Importando la clase cliente
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  //private urlEndPoint: string = 'http://localhost:8080/api/clientes';

  // Cambia la URL para apuntar a tu backend desplegado
  private urlEndPoint: string = 'https://apires-spring-knn-production.up.railway.app/api/clientes';

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })

  constructor(private http: HttpClient) { }

  buscarClientesPorNombreApellido(query: string): Observable<cliente[]> {
    // Asegúrate de que el nombre del parámetro de la query coincide con lo que espera tu API
    return this.http.get<cliente[]>(`${this.urlEndPoint}/buscar?query=${query}`);
  }

  getClientes(): Observable<cliente[]> {
    //return of(CLIENTES);
    return this.http.get(this.urlEndPoint).pipe(
      map((response) => response as cliente[]))
  }

  create(cliente: cliente): Observable<cliente> {
    return this.http.post<cliente>(this.urlEndPoint, cliente, { headers: this.httpHeaders })
  }

  getCliente(id: number): Observable<cliente> {
    return this.http.get<cliente>(`${this.urlEndPoint}/${id}`)
  }

  update(cliente: cliente): Observable<cliente> {
    return this.http.put<cliente>(`${this.urlEndPoint}/${cliente.id}`, cliente, { headers: this.httpHeaders })
  }

  delete(id: number): Observable<cliente> {
    return this.http.delete<cliente>(`${this.urlEndPoint}/${id}`, { headers: this.httpHeaders })
  }
}
