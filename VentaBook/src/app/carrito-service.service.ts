import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CarritoServiceService {
  items=[];
  Pcarrito;
  url="http://127.0.0.1/practica/"
  constructor(private http:HttpClient) { }

  addCarrito(producto){
    let cantidad=1;
    let encontre=false;
    this.items.forEach((elemento)=>{
        if(elemento.id==producto.id){
          elemento.cantidad+=1;
          encontre=true;
        }
    });

    if(!encontre){
      this.Pcarrito={"id":producto.id,"nombre":producto.nombre,"precio":producto.precio,"cantidad":cantidad};
      this.items.push(this.Pcarrito);
    }
  }
  infoItems(){
    return this.items;
  }
  cleanCarrito(){
    this.items=[];
    return this.items;
  }

  Guardar(datos){
    return this.http.post(`${this.url}guardar.php`,JSON.stringify(datos));
  }
}
