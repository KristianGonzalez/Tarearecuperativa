import { Component, OnInit } from '@angular/core';
import {productos} from '../productos';
import {CarritoServiceService} from '../carrito-service.service';


@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent{

  productos=productos;

  comprar(producto){
    this.CarritoService.addCarrito(producto)
    window.alert("Producto comprado con el ID "+producto.id);
  }


  constructor(private CarritoService:CarritoServiceService){

  }

}
