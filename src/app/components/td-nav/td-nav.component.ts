import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-td-nav',
  templateUrl: './td-nav.component.html',
  styleUrls: ['./td-nav.component.css']
})
export class TdNavComponent implements OnInit {

  array: any;
  array2:any;
  array3:any;
  length;
  length2;
  arrayprueba;
  precio;
  imagen;
  nombre;
  descripcion;
  gramos;
  posicion;
  total;
  referencia;
  position:any={};
  nav: FormGroup;
  user:any= 
    {
     
    }
    
   ;

  constructor(
    private formBuilder: FormBuilder
    ) { }

  ngOnInit() {
    /* localStorage.setItem('currentProduct', JSON.stringify(this.user)); */
    if(localStorage.getItem('currentProduct')){
    this.array=localStorage.getItem('currentProduct')
    this.array2=JSON.parse(this.array)
    this.array3=Object.values(this.array2)
    //this.arregloTotal=.reduce(function(a, b){ return parseInt(a)+parseInt(b); })
    this.total=this.array3.reduce(function(a, b){ return parseInt(a)+parseInt(b); })
    //this.total=this.array3.reduce(function(a, b){ return a + b; })
    this.length=this.array3.length;
    /* for(let i=0; i=this.length;i++){
      this.position[1]=this.array3[1].posicion
      console.log("position::::",this.position[1])
    }
    console.log("currentProduct::::",this.array3[1]) */
    this.nav = this.formBuilder.group({
      posicion: ['', Validators.required],
      /* password: ['', Validators.required], */
    })
    this.nav.get("posicion").setValue(this.length);
    this.posicion = this.nav.get("posicion").value;
    
    }
    
  }

  enviarCarrito(precio,nombre,imagen,gramos,cantidad,referencia){
    if(!localStorage.getItem('currentProduct')){
      localStorage.setItem('currentProduct', JSON.stringify(this.user));
    }/* else{
      localStorage.setItem('currentProduct', JSON.stringify(this.user));
    } */
    this.array=localStorage.getItem('currentProduct')
    this.array2=JSON.parse(this.array)
    this.array3=Object.values(this.array2)
    this.user=this.array3
    this.length=this.user.length;
    this.length2=this.user.length;
    this.arrayprueba=
      {
        descripcion:nombre,
        precio:precio,
        gramos:gramos,
        imagen:imagen,
        cantidad:referencia,
        referencia:cantidad,
        posicion:this.length,
      }
    
    this.user.push(this.arrayprueba)
    localStorage.setItem('currentProduct', JSON.stringify(this.user));
    this.array=localStorage.getItem('currentProduct')
    this.array2=JSON.parse(this.array)
    this.array3=Object.values(this.array2)
    this.length=this.array3.length;
    console.log("currentProduct::::",this.user)
  }

  recibirDetalles(precio,nombre,imagen,gramos,cantidad,referencia){
    this.precio=precio
    this.nombre=nombre
    this.gramos=gramos
    this.referencia=referencia
    this.enviarCarrito(precio,nombre,imagen,gramos,cantidad,referencia)
  }

  limpiar(){
    localStorage.removeItem('currentProduct');
    location.reload()
  }

  eliminar(posicion){
    
      // alert("eliminar posicion:"+posicion)
      this.array3.splice(posicion,1)
      localStorage.setItem('currentProduct', JSON.stringify(this.array3))
      localStorage.key(posicion)
      location.reload()

  }
    

}
