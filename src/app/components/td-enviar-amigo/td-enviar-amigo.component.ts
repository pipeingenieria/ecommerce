import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RestHttpService } from 'src/app/_services/rest-http.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-td-enviar-amigo',
  templateUrl: './td-enviar-amigo.component.html',
  styleUrls: ['./td-enviar-amigo.component.css']
})
export class TdEnviarAmigoComponent implements OnInit {
  enviarAmigo: FormGroup;
  submitted  = false;
  arreglo: any;
  allCountries: any;
  precio;
  foto;
  nombre;
  gramos;
  descripcion;
  referencia;


  constructor(private formBuilder: FormBuilder,
    public restHttpService: RestHttpService,
    private route: ActivatedRoute,
    private router: Router,) { }

  ngOnInit() {
    window.scroll(0,0)
    this.enviarAmigo = this.formBuilder.group({
      nombres: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],

    })

      //llegada de datos por url
      var precio=this.route.snapshot.paramMap.get("precio")
      var nombre=this.route.snapshot.paramMap.get("nombre")
      var foto=this.route.snapshot.paramMap.get("imagen")
      var descripcion=this.route.snapshot.paramMap.get("descripcion")
      var referencia=this.route.snapshot.paramMap.get("referencia")
      this.detallesEnviar(precio,nombre,foto,descripcion,referencia)
  }


  detallesEnviar(precio,nombre,foto,descripcion,referencia){
    
    this.precio=precio
    this.nombre=nombre
    this.foto=foto
    this.descripcion=descripcion
    this.referencia=referencia

    
    //this.prueba(precio,nombre,imagen)
    
  }



  scrollUp(){
    window.scroll(0,0);
  }

  enviar(){
  //Obtener los datos que proviene de los inputs--
      //Declarar los Inputs
      var nombres: any = this.enviarAmigo.get("nombres").value;
      var email: any = this.enviarAmigo.get("email").value;
      var precio =this.precio
      var nombre  =this.nombre
      var foto =this.foto
      var descripcion =this.precio

      //Declaracion del arreglo que se envia
      this.arreglo = {
          nombres: nombres,
          email: email,
          precio:this.nombre,
          nombre:this.precio,
          foto:this.foto,
          descripcion:this.descripcion

      }


      console.log("DATOS:: ", this.arreglo)
      console.log("Invalido: ", this.enviarAmigo.invalid);
      // if (this.enviarAmigo.invalid === false) {
      //     //---------------------  Suscripcion al servicio ------------------------------------>
      //     //#- Aca se definen los diferentes metodos para acceder a la API. 
      //     this.restHttpService.registerUser(this.arreglo).subscribe(
      //         data => {

      //             console.log("ITEM:", this.arreglo);
      //             console.log("DATO RECIBIDO: ", data);
      //             this.allCountries = Object.values(data);
      //             this.enviarAmigo.reset();

      //         },
      //         // Manejo de errores.
      //         error => {
      //             console.log("ocurrio el siguiente error");
      //             console.log(error.errorMessage);
      //         }
      //     );
      // } else {
      //     // this.toastr.error('¡Todos los campos son obligatorios!', 'Error de Registro');
      // }
      if(this.enviarAmigo.invalid == false){
        this.restHttpService.enviarAmigo(this.arreglo).subscribe(
            data => {

                /* console.log("ITEM:",this.arreglo1);
                this.allCountries = Object.values(data);*/
                console.log("Email Recibido: ", this.arreglo);
                this.enviarAmigo.reset();
                this.submitted = false;
                // this.toastr.success('¡EMAIL ENVIADO CORRECTAMENTE!', 'Registro Exitoso');
                Swal.fire("Email enviado correctamente.")
            },
            // Manejo de errores.
            error => {
                console.log("ocurrio el siguiente error");
                console.log(error.errorMessage);
            }
        );

      }

    }



  get f() { return this.enviarAmigo.controls; }


  onSubmit() {
    this.submitted = true;

    if (this.enviarAmigo.invalid) {
        return;
    } 


  }




}
