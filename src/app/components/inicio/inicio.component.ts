import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, FormsModule, FormBuilder, Validators } from '@angular/forms';
import { RestHttpService } from '../../_services/rest-http.service';
import { HttpClient } from 'selenium-webdriver/http';
import { ActivatedRoute, Router } from '@angular/router';
import {TdCompraComponent} from '../td-compra/td-compra.component';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
    contactos: FormGroup;
    submitted = false;
    arreglo: any;
    allCountries: any;
    mostrar: Boolean = false;
    verArgollas: Boolean = true;
    verPulseras: Boolean = false;
    verCollares: Boolean = false;
    verAretes: Boolean = false;
    verDijes: Boolean = false;
    tipo: any;
    mostrarTexto: boolean = false;
    cambio: boolean = true;
    argollas:any;
    product:any;
    ocultarForm: boolean = false
    allDates: any;
    titulo: any;
    allDatesPar: any;
    allDatesImpar: any;
    allProducts:any;
  
    constructor(
      private formBuilder: FormBuilder,
      public restHttpService: RestHttpService,
      private route: ActivatedRoute,
      private router: Router,
    ) { }
  
    ngOnInit() {
      
      // window.scroll(0,0)

      this.contactos = this.formBuilder.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        mensaje: ['', Validators.required],
        telefono: ['', Validators.required],
        ciudad: ['', Validators.required],
  
      })
      this.argollas=[
          {
          "imagen":"argolla1.jpg"
          },
          {
            "imagen":"argolla2.jpg"
          },
          {
            "imagen":"argolla3.jpg"
          },
      ]

      // this.getAll();
    }

    // getAll(){

    //   this.restHttpService.getAllProducts().subscribe(
    //     data => {

    //         console.log("ITEM:", this.arreglo);
    //         console.log("DATO RECIBIDO: ", data);
    //         this.allProducts = Object.values(data);
    //         // this.submitted = false
    //       //  this.formProducto.reset();

    //     },
    //     // Manejo de errores.
    //     error => {
    //         console.log("ocurrio el siguiente error");
    //         console.log(error.errorMessage);
    //     }
    //   );
    // }
  
    scrollUp() {
      window.scroll(0, 0);
    }
  
    ver() {
      this.mostrar = true;
      
    }
  
    verTexto() {
      this.mostrarTexto = true;
      
    }
  
    verMenos() {
      this.mostrarTexto = false;
      
    }
  
  
    tipoM(tipo) {
      this.titulo = tipo;
      //  this.formProducto.get('tipoP').setValue(tipo);
       //this.formProducto.get('descripcion').setValue(tipo);
       console.log("TIPO::",tipo)
       this.submitted = false
       //this.formProducto.reset();
       switch (tipo) {
         case "argollas":
           this.ocultarForm = true;
           this.verArgollas = true;
           this.verCollares = false;
           this.verPulseras = false;
           this.verAretes = false;
           this.verDijes = false;
               this.product = {
                 tipoProducto: "argollas"
               }
               this.restHttpService.getProduct(this.product).subscribe(
                 data => {
   
                     console.log("ITEM:", this.arreglo);
                     console.log("DATO RECIBIDO: ", data);
                     this.allDates = Object.values(data);
                    //  this.allDates = this.allDates.filter(function(dato){ 
                    //   if(dato.indexOf("") == 0)
                    //      { 
                    //        console.log("posicion::::::", dato.indexOf())
                    //        return false; 
                    //      }
                    //    else{  
                    //      return true;     
                        
                    //    } 
                    //  });
                     
                     console.log("::::::::::::::::::::::",this.allDates)
                     this.allDatesPar;
                     this.allDatesImpar;
                     this.submitted = false
                    
                   //  this.formProducto.reset();
   
                 },
                 // Manejo de errores.
                 error => {
                     console.log("ocurrio el siguiente error");
                     console.log(error.errorMessage);
                 }
               );

               
              

           break;
         case "collares":
             this.ocultarForm = true;
           this.verCollares = true;
           this.verPulseras = false;
           this.verAretes = false;
           this.verArgollas = false;
           this.verDijes = false;
           this.product = {
             tipoProducto: "collares"
           }
           this.restHttpService.getProduct(this.product).subscribe(
             data => {
   
                 console.log("ITEM:", this.arreglo);
                 console.log("DATO RECIBIDO: ", data);
                 this.allDates = Object.values(data);
                 this.submitted = false
                 // this.formProducto.reset();
               //  this.formProducto.reset();
   
             },
             // Manejo de errores.
             error => {
                 console.log("ocurrio el siguiente error");
                 console.log(error.errorMessage);
             }
           );
           break;
         case "pulseras":
           this.ocultarForm = true;
           this.verPulseras = true;
           this.verAretes = false;
           this.verArgollas = false;
           this.verCollares = false;
           this.verDijes = false;
           this.product = {
             tipoProducto: "pulseras"
           }
           this.restHttpService.getProduct(this.product).subscribe(
             data => {
   
                 console.log("ITEM:", this.arreglo);
                 console.log("DATO RECIBIDO: ", data);
                 this.allDates = Object.values(data);
                 this.submitted = false
                 
               //  this.formProducto.reset();
   
             },
             // Manejo de errores.
             error => {
                 console.log("ocurrio el siguiente error");
                 console.log(error.errorMessage);
             }
           );
           break;
         case "aretes":
           this.ocultarForm = true;
           this.verAretes = true;
           this.verArgollas = false;
           this.verCollares = false;
           this.verPulseras = false;
           this.verDijes = false;
           this.product = {
             tipoProducto: "aretes"
           }
           this.restHttpService.getProduct(this.product).subscribe(
             data => {
   
                 console.log("ITEM:", this.arreglo);
                 console.log("DATO RECIBIDO: ", data);
                 this.allDates = Object.values(data);
                 this.allDatesPar;
                 this.allDatesImpar;
                 /* for(let i = 0; this.allDates.length; i++){
                   if(i % 0){
                    this.allDatesPar = this.allDates[i]
                   }
                   if(i !% 0){
                    this.allDatesImpar = this.allDates[i]
                   }

                 } */
                 this.submitted = false
                 // this.formProducto.reset();
               //  this.formProducto.reset();
   
             },
             // Manejo de errores.
             error => {
                 console.log("ocurrio el siguiente error");
                 console.log(error.errorMessage);
             }
           );
           break;
         case "dijes":
           this.ocultarForm = true;
           this.verDijes = true;
           this.verAretes = false;
           this.verArgollas = false;
           this.verCollares = false;
           this.verPulseras = false;
           this.product = {
             tipoProducto: "dijes"
           }
           this.restHttpService.getProduct(this.product).subscribe(
             data => {
   
                 console.log("ITEM:", this.arreglo);
                 console.log("DATO RECIBIDO: ", data);
                 this.allDates = Object.values(data);
                 this.submitted = false
               //  this.formProducto.reset();
   
             },
             // Manejo de errores.
             error => {
                 console.log("ocurrio el siguiente error");
                 console.log(error.errorMessage);
             }
           );
           break;
       }
     }
  
  
    enviar() {
      //Obtener los datos que proviene de los inputs--
      //Declarar los Inputs
      var nombres: any = this.contactos.get("name").value;
      var email: any = this.contactos.get("email").value;
      var mensaje: any = this.contactos.get("mensaje").value;
      var telefono: any = this.contactos.get("telefono").value;
      var ciudad: any = this.contactos.get("ciudad").value;
  
      //Declaracion del arreglo que se envia
      this.arreglo = {
        nombres: nombres,
        email: email,
        mensaje: mensaje,
        telefono: telefono,
        ciudad: ciudad,
  
      }
  
  
      console.log("DATOS:: ", this.arreglo)
      console.log("Invalido: ", this.contactos.invalid);
      if (this.contactos.invalid === false) {
        this.restHttpService.contactos(this.arreglo).subscribe(
          data => {
    
            /* console.log("ITEM:",this.arreglo1);
            this.allCountries = Object.values(data);*/
            this.submitted = false;
            this.contactos.reset();
            console.log("Email Recibido: ", this.arreglo);
            Swal.fire("Mensaje enviado correctamente.")
            // this.toastr.success('¡EMAIL ENVIADO CORRECTAMENTE!', 'Registro Exitoso');
          },
          // Manejo de errores.
          error => {
            console.log("ocurrio el siguiente error");
            console.log(error.errorMessage);
          }
        );
    
      }
    }
  
  
  
    get f() { return this.contactos.controls; }
  
  
    onSubmit() {
      this.submitted = true;
  
      if (this.contactos.invalid) {
        return;
      }
  
    }

    clickImagen(precio,nombre,imagen,gramos,descripcion,referencia){
      let compra: TdCompraComponent
      //compra.detallesCompra(precio,nombre,imagen,gramos)
      //this.router.navigate["/compra/precio/nombre/imagen/gramos"]
      this.router.navigateByUrl(`home/compra/${nombre}/${precio}/${imagen}/${gramos}/${descripcion}/${referencia}`)
    }
  

}
