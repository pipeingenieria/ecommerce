import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
/* import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do'; */
import { HttpErrorResponse } from "@angular/common/http";


@Injectable()
export class RestHttpService {

  public baseUrl1 = 'https://restcountries.eu/rest/v2'
  public allCountries;
  public currentCountry;
  body:any={
    nombre:"",
  };

  // public baseUrl = 'https://tejidodorado.appspot.com'
  public baseUrl = 'http://localhost:8080'

  public createProduct(body):any{
    console.log("ACA ESTA EL BODY:",body)
    let myResponse = this._http.post(this.baseUrl + '/createProduct', body)
    console.log(myResponse)
    return myResponse;
  }

  public getProduct(body):any{
    console.log("ACA ESTA EL BODY:",body)
    let myResponse = this._http.post(this.baseUrl + '/getProduct', body)
    console.log(myResponse)
    return myResponse;
  }

  public updateProduct(body):any{
    console.log("ACA ESTA EL BODY:",body)
    let myResponse = this._http.post(this.baseUrl + '/updateProduct', body)
    console.log(myResponse)
    return myResponse;
  }

  public loginUser(body):any{
    console.log("ACA ESTA EL BODY:",body)
    let myResponse = this._http.post(this.baseUrl + '/loginUser', body)
    console.log(myResponse)
    return myResponse;
  }

  public deleteProduct(body):any{
    console.log("ACA ESTA EL BODY:",body)
    let myResponse = this._http.post(this.baseUrl + '/deleteProduct', body)
    console.log(myResponse)
    return myResponse;
  }

  public getAllProducts():any{
    console.log("ACA ESTA EL BODY:",)
    let myResponse = this._http.get(this.baseUrl + '/getAllProducts')
    console.log(myResponse)
    return myResponse;
  }
  

  /* MAILER */
  public sendMessage(body): any {
    console.log("ACA ESTA EL EMAIL:",body);
    let myResponse = this._http.post('https://tejidodorado.appspot.com/formulario', body);
    console.log(myResponse);
    return myResponse;
  }
   /* FIN -- MAILER */

   public enviarAmigo(body): any {
    console.log("ACA ESTA EL EMAIL:",body);
    let myResponse = this._http.post(this.baseUrl + '/enviarAmigo', body);
    console.log(myResponse);
    return myResponse;
  }

  public contactos(body): any {
    console.log("ACA ESTA EL EMAIL:",body);
    let myResponse = this._http.post(this.baseUrl + '/contactos', body);
    console.log(myResponse);
    return myResponse;
  }

  public confirmarCompra(body): any {
    console.log("ACA ESTA EL EMAIL:",body);
    let myResponse = this._http.post(this.baseUrl + '/confirmarCompra', body);
    console.log(myResponse);
    return myResponse;
  }

  

  constructor(private _http:HttpClient) { }

}
