import { Component, OnInit } from '@angular/core';
import {CarritoServiceService} from '../carrito-service.service'
import {FormBuilder} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-lista-carrito',
  templateUrl: './lista-carrito.component.html',
  styleUrls: ['./lista-carrito.component.css']
})
export class ListaCarritoComponent implements OnInit {
  items;
  checkoutForm;
  mensaje;
  titulomensaje;

  constructor(private CarritoService:CarritoServiceService, private formBuilder: FormBuilder,private route: ActivatedRoute,) { 
    
    this.checkoutForm = this.formBuilder.group({
      nombre: '',
      correo: ''
    });

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      console.log(params.get('productoID'));
    });
    this.items=this.CarritoService.infoItems();
  }
  onSubmit(datos){
    console.log(datos);
    this.mensaje=this.CarritoService.Guardar(datos);

    this.mensaje.subscribe(resultados=>{
        this.titulomensaje=resultados.mensaje;
        console.log(resultados);
    })

    window.alert("productos comprados");
  }

}