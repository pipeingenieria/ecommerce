import { Injectable } from '@angular/core'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class CargaImagenService{

	public url_servidor = "https://www.payment.com.co/imagenes/cargando-imagen.php";

	constructor(private http: HttpClient){}

	public postFileImagen(imagenParaSubir: File){

		const formData = new FormData(); 
		formData.append('imagenPropia', imagenParaSubir, imagenParaSubir.name); 
		return this.http.post(this.url_servidor, formData,{headers: 
			{'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 
			'Access-Control-Allow-Headers': 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method',
			'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
			'Allow': 'GET, POST, OPTIONS, PUT, DELETE'
		},
			
		 });

	}

}