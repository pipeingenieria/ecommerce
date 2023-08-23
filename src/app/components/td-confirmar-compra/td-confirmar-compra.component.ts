import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RestHttpService } from 'src/app/_services/rest-http.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-td-confirmar-compra',
  templateUrl: './td-confirmar-compra.component.html',
  styleUrls: ['./td-confirmar-compra.component.css']
})
export class TdConfirmarCompraComponent implements OnInit {

  contactos: FormGroup;
  submitted = false;
  arreglo: any;
  allCountries: any;

  constructor(
    private formBuilder: FormBuilder,
    public restHttpService: RestHttpService,
    private route: ActivatedRoute,
    private router: Router,) { }
    array: any;
    array2:any;
    array3:any;

  ngOnInit() {
    window.scroll(0,0)

    this.array=localStorage.getItem('currentProduct')
    this.array2=JSON.parse(this.array)
    this.array3=Object.values(this.array2);

    console.log(":::::::::::::",this.array2);

    this.contactos = this.formBuilder.group({
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      direccion: ['', Validators.required],
      barrio: ['', Validators.required],
      ciudad: ['', Validators.required],
      pais: ['', Validators.required],
      departamento: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      movil: ['', Validators.required],
      telefonoFijo: ['', Validators.required],
      mensaje: [''],

    })
  }

  get f() { return this.contactos.controls; }


  onSubmit() {
    this.submitted = true;

    if (this.contactos.invalid) {
        return;
    } 


  }

  scrollUp() {
    window.scroll(0, 0);
  }

  enviar()
  {
    //Obtener los datos que proviene de los inputs--
      //Declarar los Inputs
      var nombres: any = this.contactos.get("nombres").value;
      var apellidos: any = this.contactos.get("apellidos").value;
      var direccion: any = this.contactos.get("direccion").value;
      var barrio: any = this.contactos.get("barrio").value;
      var ciudad: any = this.contactos.get("ciudad").value;
      var pais: any = this.contactos.get("pais").value;
      var departamento: any = this.contactos.get("departamento").value;
      var email: any = this.contactos.get("email").value;
      var movil: any = this.contactos.get("movil").value;
      var telefonoFijo: any = this.contactos.get("telefonoFijo").value;
      var mensaje: any = this.contactos.get("mensaje").value;
      var cantidad = this.array3[0].cantidad;
      var referencia = this.array3[0].referencia;
      var nombre = this.array3[0].descripcion;
      

      //Declaracion del arreglo que se envia
      this.arreglo = {
          nombres: nombres,
          apellidos: apellidos,
          direccion: direccion,
          barrio: barrio,
          ciudad: ciudad,
          mensaje: mensaje,
          pais: pais,
          departamento: departamento,
          email: email,
          movil: movil,
          telefonoFijo: telefonoFijo,
          cantidad: cantidad,
          referencia:referencia,
          nombre:nombre,
          

      }
      console.log("arreglo para enviar::", this.arreglo)

      if(this.contactos.invalid == false){

      this.restHttpService.confirmarCompra(this.arreglo).subscribe(
          data => {

              /* console.log("ITEM:",this.arreglo1);
              this.allCountries = Object.values(data);*/
              console.log("Email Recibido: ", data);
              this.contactos.reset();
              this.submitted = false;
              
              Swal.fire("Su solicitud de compra ha sido enviada, Tejido Dorado se pondra en contacto con usted")
              
              // this.toastr.success('¡EMAIL ENVIADO CORRECTAMENTE!', 'Registro Exitoso');
              // this.submitted = false
          },
          // Manejo de errores.
          error => {
              console.log("ocurrio el siguiente error");
              console.log(error.errorMessage);
          }
      );
      // for(let i=0;i=3;i++){
      //   console.log("ACAAAA::::",i)
      // }
      // var x = ""
    }
  }




}
