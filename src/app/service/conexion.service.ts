
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})

export class ConexionService {

  private url = environment.projectEndpoint;

  private header = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(
    private http: HttpClient){

  }

  getList(): Observable<HttpResponse<any>> {
    let url=`${this.url}Categoria`;
    console.log(url)
    return this.http.get(url ,{
       headers: this.header, observe: 'response'
    });
};
}
