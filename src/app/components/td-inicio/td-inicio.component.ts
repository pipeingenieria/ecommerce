import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, FormsModule, FormBuilder, Validators } from '@angular/forms';
import { RestHttpService } from '../../_services/rest-http.service';
import { HttpClient } from 'selenium-webdriver/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-td-inicio',
  templateUrl: './td-inicio.component.html',
  styleUrls: ['./td-inicio.component.css']
})
export class TdInicioComponent implements OnInit {
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


  }

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
    switch (tipo) {
      case "argollas":
        this.verArgollas = true;
        this.verCollares = false;
        this.verPulseras = false;
        this.verAretes = false;
        this.verDijes = false;
        break;
      case "collares":
        this.verCollares = true;
        this.verPulseras = false;
        this.verAretes = false;
        this.verArgollas = false;
        this.verDijes = false;
        break;
      case "pulseras":
        this.verPulseras = true;
        this.verAretes = false;
        this.verArgollas = false;
        this.verCollares = false;
        this.verDijes = false;
        break;
      case "aretes":
        this.verAretes = true;
        this.verArgollas = false;
        this.verCollares = false;
        this.verPulseras = false;
        this.verDijes = false;
        break;
      case "dijes":
        this.verDijes = true;
        this.verAretes = false;
        this.verArgollas = false;
        this.verCollares = false;
        this.verPulseras = false;
        break;
    }


  }

  enviar() {
    //Obtener los datos que proviene de los inputs--
    //Declarar los Inputs
    var nombresJuridica: any = this.contactos.get("name").value;
    var email: any = this.contactos.get("email").value;
    var mensaje: any = this.contactos.get("mensaje").value;

    //Declaracion del arreglo que se envia
    this.arreglo = {
      nombres: name,
      email: email,
      mensaje: mensaje,

    }


    console.log("DATOS:: ", this.arreglo)
    console.log("Invalido: ", this.contactos.invalid);
    if (this.contactos.invalid === false) {
      //---------------------  Suscripcion al servicio ------------------------------------>
      //#- Aca se definen los diferentes metodos para acceder a la API. 
      this.restHttpService.createProduct(this.arreglo).subscribe(
        data => {

          console.log("ITEM:", this.arreglo);
          console.log("DATO RECIBIDO: ", data);
          this.allCountries = Object.values(data);
          this.contactos.reset();

        },
        // Manejo de errores.
        error => {
          console.log("ocurrio el siguiente error");
          console.log(error.errorMessage);
        }
      );
    } else {
      // this.toastr.error('¡Todos los campos son obligatorios!', 'Error de Registro');
    }
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



  get f() { return this.contactos.controls; }


  onSubmit() {
    this.submitted = true;

    if (this.contactos.invalid) {
      return;
    }

  }

}
