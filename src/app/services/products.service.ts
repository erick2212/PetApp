import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { analyzeAndValidateNgModules } from '@angular/compiler';


//const URL_API = 'https://localhost:44359/api/producto/getall'; //URL API
//const URL_API = '../../assets/Data/prodctos.json'; //URL API
const URL_API = 'https://apipettde.azurewebsites.net/api/producto/getall'; //URL API

const URL_GUARDAR = 'https://apipettde.azurewebsites.net/api/producto/comprar'; //URL API

const URL_API_COMPRADOS = 'https://apipettde.azurewebsites.net/api/producto/getcomprados';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }
  

  getAll(){
    return this.http.get(URL_API); //URL DATOS, CONSUMO DE UN OBSERVABLE
  }

  getComprados(){
    return this.http.get(URL_API_COMPRADOS); //URL DATOS, CONSUMO DE UN OBSERVABLE
  }

  realizarCompra(idProducto: number){
    this.http.post<any>(URL_GUARDAR, {"producto_id": 1, "cliente_id": 1, "Cantidad": 2});
  }

  postExample(idProducto: number){
    this.http.post(URL_GUARDAR, {
      'producto_id': 1,
      'cliente_id': 1,
      'Cantidad': 1
        });
  }

  public register(idProducto: number) {
    const url = URL_GUARDAR;
    var parametros = {
      "producto_id": 1,
      "cliente_id": 1,
      "Cantidad": 1
     }
    //const prod = {'producto_id': 1, 'cliente_id': 1,  'Cantidad': 1};
    // var result = this.http.post(url, parametros);
    // console.log(result);
    //return this.http.post(url, parametros);
    this.http.post(URL_GUARDAR,

    {

    "producto_id":  idProducto,

    "cliente_id":  1,

    "Cantidad":  1

    })

    .subscribe(

    data  => {

    console.log("PUT Request is successful ", data);

    },

    error  => {

    console.log("Rrror", error);

    }

    );
  }

  getByCode(code: string){
    return new Observable(observer => {
      this.http.get(URL_API).subscribe((data: any[]) => {
        const filter = data.filter(item => item.id == code);
        observer.next(filter[0]); //se devuelve el índice 0 para sólo enviar el primer elemento del arreglo
      })
    })
  }


}
