import { Component, OnInit } from '@angular/core';
import {TdNavComponent} from '../td-nav/td-nav.component'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TdEnviarAmigoComponent } from '../td-enviar-amigo/td-enviar-amigo.component';

@Component({
  selector: 'app-td-compra',
  templateUrl: './td-compra.component.html',
  styleUrls: ['./td-compra.component.css']
})
export class TdCompraComponent implements OnInit {

  compra: FormGroup;
  precio;
  imagen;
  nombre;
  gramos;
  descripcion;
  referencia;

  constructor(
    //private nav: TdNavComponent,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    window.scroll(0,0)

    //llegada de datos por url
      var nombre=this.route.snapshot.paramMap.get("nombre")
      var precio=this.route.snapshot.paramMap.get("precio")
      var imagen=this.route.snapshot.paramMap.get("imagen")
      var gramos=this.route.snapshot.paramMap.get("gramos")
      var descripcion=this.route.snapshot.paramMap.get("descripcion")
      var referencia=this.route.snapshot.paramMap.get("referencia")
      this.detallesCompra(precio,nombre,imagen,gramos,descripcion,referencia)
      this.compra = this.formBuilder.group({
      cantidad: ['', Validators.required],
      /* password: ['', Validators.required], */
    })
  }

  scrollUp() {
    window.scroll(0, 0);
  }

  

  detallesCompra(precio,nombre,imagen,gramos,descripcion,referencia){
    
    this.precio=precio
    this.nombre=nombre
    this.imagen=imagen
    this.gramos=gramos
    this.descripcion=descripcion
    this.referencia=referencia

    
    //this.prueba(precio,nombre,imagen)
    
  }

  enviarNav(){
    let nav = new TdNavComponent(this.formBuilder)
    var cantidad: any = this.compra.get("cantidad").value;
    nav.recibirDetalles(this.precio,this.nombre,this.imagen,this.gramos,this.referencia,cantidad)
    location.reload()
    window.scroll(0,0)
  }

  enviarAmigo(precio,nombre,foto,descripcion,referencia){
    let enviar: TdEnviarAmigoComponent
    //compra.detallesCompra(precio,nombre,imagen,gramos)
    //this.router.navigate["/compra/precio/nombre/imagen/gramos"]
    this.router.navigateByUrl(`home/enviarAmigo/${precio}/${nombre}/${foto}/${descripcion}/${referencia}`)
  }

}
