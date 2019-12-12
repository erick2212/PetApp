//Modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

//Componentes
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { MascotasComponent } from './pages/mascotas/mascotas.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AppRoutingModule } from './app.routes';
import { ClienteMascotasComponent } from './pages/cliente-mascotas/cliente-mascotas.component';
import { ProductComponent } from './pages/product/product.component';
import { BlogDetailsComponent } from './pages/blog-details/blog-details.component';

//admin
import { AdminClinicaAltaComponent } from './pages/admin/admin-clinica-alta/admin-clinica-alta.component';
import { AdminClinicasComponent } from './pages/admin/admin-clinicas/admin-clinicas.component';
import { AdminClinicaVerComponent } from './pages/admin/admin-clinica-ver/admin-clinica-ver.component';

//vet
import { VeterinarioBusquedaClientesComponent } from './pages/Vet/veterinario-busqueda-clientes/veterinario-busqueda-clientes.component';
import { VeterinarioCitaComponent } from './pages/Vet/veterinario-cita/veterinario-cita.component';
import { VeterinarioCitasComponent } from './pages/Vet/veterinario-citas/veterinario-citas.component';
import { VeterinarioClienteAltaComponent } from './pages/Vet/veterinario-cliente-alta/veterinario-cliente-alta.component';
import { VeterinarioClienteVerComponent } from './pages/Vet/veterinario-cliente-ver/veterinario-cliente-ver.component';
import { VeterinarioClienteVerSinPermisosComponent } from './pages/Vet/veterinario-cliente-ver-sin-permisos/veterinario-cliente-ver-sin-permisos.component';
import { VeterinarioClienteOrdenesProcedimientoComponent } from './pages/Vet/veterinario-cliente-ordenes-procedimiento/veterinario-cliente-ordenes-procedimiento.component';
import { VeterinarioClienteOrdenProcedimientoAltaComponent } from './pages/Vet/veterinario-cliente-orden-procedimiento-alta/veterinario-cliente-orden-procedimiento-alta.component';
import { VeterinarioClienteOrdenProcedimientoVerComponent } from './pages/Vet/veterinario-cliente-orden-procedimiento-ver/veterinario-cliente-orden-procedimiento-ver.component';
import { VeterinarioProductoAltaComponent } from './pages/Vet/veterinario-producto-alta/veterinario-producto-alta.component';
import { VeterinarioProductosComponent } from './pages/Vet/veterinario-productos/veterinario-productos.component';
import { VeterinarioProductoVerComponent } from './pages/Vet/veterinario-producto-ver/veterinario-producto-ver.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    CarritoComponent,
    MascotasComponent,
    FooterComponent,
    PageNotFoundComponent,
    AdminClinicaAltaComponent,
    AdminClinicasComponent,
    AdminClinicaVerComponent,
    VeterinarioBusquedaClientesComponent,
    VeterinarioCitaComponent,
    VeterinarioCitasComponent,
    VeterinarioClienteAltaComponent,
    VeterinarioClienteVerComponent,
    VeterinarioClienteVerSinPermisosComponent,
    VeterinarioClienteOrdenesProcedimientoComponent,
    VeterinarioClienteOrdenProcedimientoAltaComponent,
    VeterinarioClienteOrdenProcedimientoVerComponent,
    VeterinarioProductoAltaComponent,
    VeterinarioProductosComponent,
    VeterinarioProductoVerComponent,
    ClienteMascotasComponent,
    ProductComponent,
    BlogDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
