import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RestHttpService } from 'src/app/_services/rest-http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-td-reset-password',
  templateUrl: './td-reset-password.component.html',
  styleUrls: ['./td-reset-password.component.css']
})
export class TdResetPasswordComponent implements OnInit {

  administrador: FormGroup;
  submitted = false;
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
    this.administrador = this.formBuilder.group({
      emailRestoration: ['', [Validators.required, Validators.email]],
    })
  }

  onSubmit() {
    this.submitted = true;

    if (this.administrador.invalid) {
      return;
    }
    
  } 
  get f() { return this.administrador.controls; }

  restoration() {
    // this.router.navigate(['/home/administrador'])
    //Obtener los datos que proviene de los inputs--
    //Declarar los Inputs
    var emailRestoration: any = this.administrador.get("emailRestoration").value;

    

    //Declaracion del arreglo que se envia
    this.arreglo = {
      emailRestoration: emailRestoration,

    }


    console.log("DATOS:: ", this.arreglo)
    console.log("Invalido: ", this.administrador.invalid);
    //if (this.administrador.invalid === false) {
      //---------------------  Suscripcion al servicio ------------------------------------>
      //#- Aca se definen los diferentes metodos para acceder a la API. 
    //   this.restHttpService.registerUser(this.arreglo).subscribe(
    //     data => {

    //       console.log("ITEM:", this.arreglo);
    //       console.log("DATO RECIBIDO: ", data);
    //       this.allCountries = Object.values(data);
    //       this.administrador.reset();

    //     },
    //     // Manejo de errores.
    //     error => {
    //       console.log("ocurrio el siguiente error");
    //       console.log(error.errorMessage);
    //     }
    //   );
    // } else {
    //   // this.toastr.error('¡Todos los campos son obligatorios!', 'Error de Registro');
    // }
    this.restHttpService.sendMessage(this.arreglo).subscribe(
      data => {

        /* console.log("ITEM:",this.arreglo1);
        this.allCountries = Object.values(data);*/
        console.log("Email Recibido: ", data);
        // this.toastr.success('¡EMAIL ENVIADO CORRECTAMENTE!', 'Registro Exitoso');
      },
      // Manejo de errores.
      error => {
        console.log("ocurrio el siguiente error");
        console.log(error.errorMessage);
      }
    );

  }

  // get f() { return this.administrador.controls; }




}
