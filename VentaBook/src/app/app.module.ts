import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListaCarritoComponent } from './lista-carrito/lista-carrito.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { ContactosComponent } from './contactos/contactos.component';
import { PagoComponent } from './pago/pago.component';
import { SearchComponent } from './search/search.component';
import { FiltroPipe } from './filtro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ListaProductosComponent,
    ListaCarritoComponent,
    DetalleProductoComponent,
    ContactosComponent,
    PagoComponent,
    SearchComponent,
    FiltroPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
