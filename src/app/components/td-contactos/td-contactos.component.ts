import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RestHttpService } from 'src/app/_services/rest-http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from 'selenium-webdriver/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-td-contactos',
  templateUrl: './td-contactos.component.html',
  styleUrls: ['./td-contactos.component.css']
})
export class TdContactosComponent implements OnInit {
  contactos: FormGroup;
  submitted  = false;
  arreglo: any;
  allCountries: any;
  constructor(
      private formBuilder: FormBuilder,
      public restHttpService: RestHttpService,
      private route: ActivatedRoute,
      private router: Router,
   ) { }

   ngOnInit() {
    window.scroll(0,0)
    this.contactos = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['', Validators.required],
      telefono: ['', Validators.required],
      ciudad: ['', Validators.required],

    }) 
    
  }

  get f() { return this.contactos.controls; }


    onSubmit() {
      this.submitted = true;
  
      if (this.contactos.invalid) {
          return;
      } 
  
  
    }

    scrollUp(){
        window.scroll(0,0);
    }

  enviar(){
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
            //---------------------  Suscripcion al servicio ------------------------------------>
            //#- Aca se definen los diferentes metodos para acceder a la API. 
            this.restHttpService.contactos(this.arreglo).subscribe(
                data => {
    
                    /* console.log("ITEM:",this.arreglo1);
                    this.allCountries = Object.values(data);*/
                    console.log("Email Recibido: ", data);
                    this.submitted = false;
                    this.contactos.reset();
                    // alert("Mensaje enviado correctamente")
                    Swal.fire("Mensaje Enviado Correctamente")
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

}
