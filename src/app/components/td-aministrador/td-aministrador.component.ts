import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , ReactiveFormsModule , FormsModule, FormBuilder, Validators } from '@angular/forms';
import { RestHttpService } from 'src/app/_services/rest-http.service';
import { formatNumber } from '@angular/common';
import { CargaImagenService } from 'src/app/_services/uploader.service';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import Swal from 'sweetalert2';

const URL = 'http://localhost:8080/api/upload';

@Component({
  selector: 'app-td-aministrador',
  templateUrl: './td-aministrador.component.html',
  styleUrls: ['./td-aministrador.component.css']
})
export class TdAministradorComponent implements OnInit {
  ocultarForm: boolean = false
  formProducto: FormGroup;
  submitted = false;
  verArgollas: Boolean = false;
  verPulseras: Boolean = false;
  verCollares: Boolean = false; 
  verAretes: Boolean = false;
  verDijes: Boolean = false;
  arreglo: any;
  allDates: any;
  tipo: any;
  tipoForm: any;
  values:any="";
  control:boolean=true;
  estado:any;
  public respuestaImagenEnviada;
  public resultadoCarga;
  public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});

  titulo: any;
  product:any;
  _id:any;
  editProduct:any;
  deleteProduct:any;
  public labels: any = {
    previousLabel: 'Anterior',
    nextLabel: 'Siguiente',
};
  constructor(
    private formBuilder: FormBuilder,
    public restHttpService: RestHttpService,
    private enviandoImagen: CargaImagenService,
    ) { }

  ngOnInit() {
    window.scroll(0,0);
    this.formProducto = this.formBuilder.group({
      nombre: ['', Validators.required],
      gramos: ['', Validators.required],
      descripcion: ['', Validators.required],
      referencia: ['', Validators.required],
      valor: ['', Validators.required],
      foto: ['', Validators.required],
      tipoP: ['', Validators.required],

    }) 

    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
        //  console.log('ImageUpload:uploaded:', item, status, response);
         alert('File uploaded successfully');
     };

  
  }

  scrollUp() {
    window.scroll(0, 0);
  }
  

  /* acesor a form */
  get f() { return this.formProducto.controls; }


  onSubmit() {
    this.submitted = true;

    if (this.formProducto.invalid) {
        return;
    } 

 
  }

  tipoM(tipo) {
   this.titulo = tipo;
    this.formProducto.get('tipoP').setValue(tipo);
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

  /* setAretes(){

      this.formProducto.get('tipoP').setValue('aretes');
  } */

  /* setArgollas(){

    this.formProducto.get('tipoP').setValue('argollas');
  }

  setDijes(){

    this.formProducto.get('tipoP').setValue('dijes');
  }
  setPulseras(){

    this.formProducto.get('tipoP').setValue('pulseras');
  } 
  setCollares(){

    this.formProducto.get('tipoP').setValue('collares');
  }  */

  // admin(tipoP){
  //   this.tipoForm=this.formProducto.get("tipoP")
  //   console.log("TIPO:::::",this.tipoForm)
  // }



  enviar(){
    //Obtener los datos que proviene de los inputs--
       //Declarar los Inputs
      //  document.getElementById("tipoP").style.visibility = "hidden";
       var nombre: any = this.formProducto.get("nombre").value;
       var gramos: any = this.formProducto.get("gramos").value;
       var descripcion: any = this.formProducto.get("descripcion").value;
       var referencia: any = this.formProducto.get("referencia").value;
       var valor: any = this.formProducto.get("valor").value;
       var foto: any = this.formProducto.get("foto").value;
       var sliceImagen: any = foto.slice(12)
       var tipoProducto: any = this.formProducto.get("tipoP").value;

       //Declaracion del arreglo que se envia
       this.arreglo = {
           nombre: nombre,
           gramos: gramos,
           descripcion: descripcion,
           referencia: referencia,
           valor: valor,
           foto: sliceImagen,
           tipoProducto: tipoProducto


       }


       console.log("DATOS:: ", this.arreglo)
       console.log("Invalido: ", this.formProducto.invalid);
       if (this.formProducto.invalid === false) {
           //---------------------  Suscripcion al servicio ------------------------------------>
           //#- Aca se definen los diferentes metodos para acceder a la API. 
           this.restHttpService.createProduct(this.arreglo).subscribe(
               data2 => {

                   console.log("ITEM:", this.arreglo);
                   console.log("DATO RECIBIDO: ", data2);
                  //  this.allDates = Object.values(data2);
                   this.submitted = false
                   this.formProducto.reset();
                   Swal.fire({
                    position: 'center',
                    type: 'success', 
                    title: 'Archivo guardado exitosamente',
                    showConfirmButton: false,
                    timer: 1500
                  })

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

   onKeyDelete(event:any,dato){
      
      dato.replace(".", "");
      this.formProducto.get('valor').setValue(dato)
      this.control=false
    }

   onKey(event:any,dato,estado){
    var numero=""
    if(dato.length){
      console.log("nuevaCadena",dato)
    }
    if(dato.length==0){
      console.log("nuevaCadena",dato)
    }
    if(dato.length<=3){
      this.formProducto.get('valor').setValue(dato)
      console.log("nuevaCadena",dato)
    }
    if(dato.length==3 && this.control==true){
      dato=dato+'.'
      this.formProducto.get('valor').setValue(dato)
      console.log("nuevaCadena",dato)
    }
    if(dato.length==7 && this.control==true){
      dato=dato+'.'
      this.formProducto.get('valor').setValue(dato)
      console.log("nuevaCadena",dato)
    }
    if(dato.length==11 && this.control==true){
      dato=dato+'.'
      this.formProducto.get('valor').setValue(dato)
      console.log("nuevaCadena",dato)
    }
    if(dato.length==15 && this.control==true){
      dato=dato+'.'
      this.formProducto.get('valor').setValue(dato)
      console.log("nuevaCadena",dato)
    }
    this.control=true
    
   }
  
   editar(referencia, tipoProducto){
     this._id={
       referencia:referencia,
       tipoProducto: tipoProducto,
    };

    this.restHttpService.updateProduct(this._id).subscribe(
      data => {

          console.log("ITEM:", this.arreglo);
          console.log("DATO RECIBIDO: ", data);
          this.editProduct = Object.values(data);
          this.submitted = false
          this.formProducto.get("nombre").setValue(data.nombre);
          this.formProducto.get("gramos").setValue(data.gramos);
          this.formProducto.get("descripcion").setValue(data.descripcion);
          this.formProducto.get("referencia").setValue(data.referencia);
          this.formProducto.get("valor").setValue(data.valor);
          this.formProducto.get("foto").setValue("");
          this.formProducto.get("tipoP").setValue(tipoProducto);
          console.log(":::::::::::::::::::::::::::::::", data.nombre);

          // this.formProducto.reset();

      },
      // Manejo de errores.
      error => {
          console.log("ocurrio el siguiente error");
          console.log(error.errorMessage);
      }
  );
    
    console.log("EDITARRRR:::", referencia)
  }

    delete(referencia, tipoProducto){
      this._id={
        referencia:referencia,
        tipoProducto: tipoProducto,
    };

    Swal.fire({
      title: 'Estas seguro de eliminar ?',
      text: "¡No podrás revertir esto!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Eliminar!',
          'Producto eliminado',
          'success'
        )
        this.restHttpService.deleteProduct(this._id).subscribe(
          data => {
    
              console.log("ITEM:", this.arreglo);
              console.log("DATO RECIBIDO: ", data);
              this.deleteProduct = Object.values(data);
            //  this.submitted = false
            //  this.formProducto.get("nombre").setValue(data.nombre);
            //  this.formProducto.get("gramos").setValue(data.gramos);
            //  this.formProducto.get("descripcion").setValue(data.descripcion);
            //  this.formProducto.get("referencia").setValue(data.referencia);
            //  this.formProducto.get("valor").setValue(data.valor);
            //  this.formProducto.get("foto").setValue("");
            //  this.formProducto.get("tipoP").setValue("argollas");
            //  console.log(":::::::::::::::::::::::::::::::", data.nombre);
    
              // this.formProducto.reset();
    
          },
          // Manejo de errores.
          error => {
              console.log("ocurrio el siguiente error");
              console.log(error.errorMessage);
          }
      );
      }
    })
  }

 
  
   

cargandoImagen(files: FileList){

		this.enviandoImagen.postFileImagen(files[0]).subscribe(

			response => {
				this.respuestaImagenEnviada = response; 
				if(this.respuestaImagenEnviada <= 1){
					console.log("Error en el servidor"); 
				}else{

					if(this.respuestaImagenEnviada.code == 200 && this.respuestaImagenEnviada.status == "success"){

						this.resultadoCarga = 1;

					}else{
						this.resultadoCarga = 2;
					}

				}
			},
			error => {
				console.log(<any>error);
			}

		);//FIN DE METODO SUBSCRIBE

	
   //console.log("EDITARRRR:::", referencia)
 }
 

}
