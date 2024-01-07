// cliente-interes.service.ts
import { Injectable } from '@angular/core';
import { clienteInteres } from './cliente-interes';
import { ClienteDistanciaDTO } from './cliente-distancia.dto';
import { tendenciaInteres } from '../tendencias-intereses/tendenciaInteres';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteInteresService {

  //private urlEndPoint: string = 'http://localhost:8080/api/cliente-intereses';
  private urlEndPoint: string = 'https://apires-spring-knn-production.up.railway.app/api/cliente-intereses';


  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })

  constructor(private http: HttpClient) { }

  // Nuevo método para obtener los intereses con número de usuarios
  getInteresesConUsuarios(): Observable<any[]> {
    const url = `${this.urlEndPoint}/intereses-usuarios`; // Actualizado para usar la variable urlEndPoint
    return this.http.get<any[]>(url);
  }


  getClientesInteres(): Observable<clienteInteres[]> {
    return this.http.get(this.urlEndPoint).pipe(
      map((response) => response as clienteInteres[]))
  }

  create(clienteInteres: clienteInteres): Observable<clienteInteres> {
    return this.http.post<clienteInteres>(this.urlEndPoint, clienteInteres, { headers: this.httpHeaders })
  }

  getClienteInteres(id: number): Observable<clienteInteres> {
    return this.http.get<clienteInteres>(`${this.urlEndPoint}/${id}`)
  }

  update(clienteInteres: clienteInteres): Observable<clienteInteres> {
    return this.http.put<clienteInteres>(`${this.urlEndPoint}/${clienteInteres.id}`, clienteInteres, { headers: this.httpHeaders })
  }

  delete(id: number): Observable<clienteInteres> {
    return this.http.delete<clienteInteres>(`${this.urlEndPoint}/${id}`, { headers: this.httpHeaders })
  }

  getKnnRecomendaciones(clienteId: number, k: number): Observable<ClienteDistanciaDTO[]> {
    // Construir la URL para la solicitud
    const url = `${this.urlEndPoint}/${clienteId}/recomendaciones?k=${k}`;

    // Hacer la solicitud GET y devolver el Observable
    return this.http.get<ClienteDistanciaDTO[]>(url);
  }

  getTendenciasIntereses(inicio: string, fin: string): Observable<tendenciaInteres[]> {
    const url = `${this.urlEndPoint}/tendencias?inicio=${inicio}&fin=${fin}`;
    return this.http.get<tendenciaInteres[]>(url);
  }

}
