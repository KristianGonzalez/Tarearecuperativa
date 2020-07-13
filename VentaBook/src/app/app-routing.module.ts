import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaCarritoComponent } from './lista-carrito/lista-carrito.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { ContactosComponent } from './contactos/contactos.component';
import { PagoComponent } from './pago/pago.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', component: ListaProductosComponent },
  { path: 'carrito', component: ListaCarritoComponent },
  { path: 'carrito/:productoID', component: ListaCarritoComponent },
  { path: 'producto/:productoID',component: DetalleProductoComponent },
  { path: 'contacto', component: ContactosComponent },
  { path: 'pago', component: PagoComponent },
  { path: 'search', component: SearchComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
