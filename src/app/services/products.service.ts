import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const URL_API = 'https://apipettde.azurewebsites.net/api/producto'; //URL API
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getAll(){
    this.http.get('URL_API') //URL DATOS, CONSUMO DE UN OBSERVABLE
  }


}
