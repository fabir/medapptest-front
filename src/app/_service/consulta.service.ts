import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ConsultaListaExamenDTO } from '../_dto/consultaListaExamenDTO';
import { Consulta } from '../_model/consulta';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  consultaCambio = new Subject<Consulta[]>();
  mensajeCambio = new Subject<string>();

  url: string = `${environment.host}/consultas`;
  constructor(private http: HttpClient) { }

  registrar(consultaDTO: ConsultaListaExamenDTO){
   return this.http.post(this.url, consultaDTO);
  }

  listar(){
    return this.http.get<Consulta[]>(this.url);
  }

  listarPageable(p: number, s:number){
   return this.http.get<any>(`${this.url}/pageable?page=${p}&size=${s}`);
  }

  listarPorId(idConsulta: number) {
    return this.http.get<Consulta>(`${this.url}/${idConsulta}`);
  }

  modificar(consulta: ConsultaListaExamenDTO) {
    return this.http.put(this.url, consulta);
  }

  eliminar(idConsulta: number) {
    return this.http.delete(`${this.url}/${idConsulta}`);
  }

}
