import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { MascotasComponent } from './pages/mascotas/mascotas.component';
import { ProductsComponent } from './pages/products/products.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

//Admin
import { AdminClinicaAltaComponent } from './pages/admin/admin-clinica-alta/admin-clinica-alta.component';
import { AdminClinicasComponent } from './pages/admin/admin-clinicas/admin-clinicas.component';
import { AdminClinicaVerComponent } from './pages/admin/admin-clinica-ver/admin-clinica-ver.component';

//Veterinaria
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
import { ProductComponent } from './pages/product/product.component';
import { BlogDetailsComponent } from './pages/blog-details/blog-details.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent , data: {title: 'Home', icon: ''}},
    { path: 'carrito', component: CarritoComponent , data: {title: 'Carrito de Compras', icon: ''}},
    { path: 'mascotas', component: MascotasComponent },
    { path: 'blog', component: BlogDetailsComponent , data: {title: 'Blog', icon: ''}},
    {path: 'producto/:code', component: ProductComponent, data: {title: 'Producto', icon: ''}},
    {path: 'productos', component: ProductsComponent, data: {title: 'Productos', icon: ''}},
    
    //admin
    { 
        path: 'adminClinicas', 
        component: AdminClinicasComponent,
        children: [
            { path: 'adminClinicaAlta', component: AdminClinicaAltaComponent, data: {title: 'Alta', icon: ''}},
            { path: 'adminClinicaVer', component: AdminClinicaVerComponent, data: {title: 'Detalle', icon: ''}},
            { path: '', redirectTo: 'adminClinicas', pathMatch: 'full'},
            { path: '**', redirectTo: 'adminClinicas', pathMatch: 'full'}
        ] ,
        data: {title: 'Clinicas', icon: ''}
    },

    //vet
    { 
        path: 'veterinarioBusquedaClientes', 
        component: VeterinarioBusquedaClientesComponent,
        children: [
            { path: 'veterinarioClienteVer', component: VeterinarioClienteVerComponent, data: {title: 'Detalle', icon: ''}},
            { path: 'veterinarioClienteAlta', component: VeterinarioClienteAltaComponent, data: {title: 'Alta', icon: ''}},
            { path: '', redirectTo: 'veterinarioBusquedaClientes', pathMatch: 'full'},
            { path: '**', redirectTo: 'veterinarioBusquedaClientes', pathMatch: 'full'}
        ] ,
        data: {title: 'Clientes', icon: ''}
    },
    { path: 'veterinarioClienteOrdenesProcedimiento', component: VeterinarioClienteOrdenesProcedimientoComponent},
    { path: 'veterinarioProductoVer', component: VeterinarioProductoVerComponent},
    { 
        path: 'veterinarioCitas', 
        component: VeterinarioCitasComponent,
        children: [
            { path: 'veterinarioCita', component: VeterinarioCitaComponent, data: {title: 'Cita', icon: ''}},
            { path: '', redirectTo: 'veterinarioCitas', pathMatch: 'full'},
            { path: '**', redirectTo: 'veterinarioCitas', pathMatch: 'full'}
        ] ,
        data: {title: 'Citas', icon: ''}
    },
    { path: 'veterinarioClienteVerSinPermisos', component: VeterinarioClienteVerSinPermisosComponent},
    { path: 'veterinarioClienteOrdenProcedimientoAlta', component: VeterinarioClienteOrdenProcedimientoAltaComponent},
    { path: 'veterinarioClienteOrdenProcedimientoVer', component: VeterinarioClienteOrdenProcedimientoVerComponent},
    { 
        path: 'veterinarioProductos', 
        component: VeterinarioProductosComponent,
        children: [
            { path: 'veterinarioProductoAlta', component: VeterinarioProductoAltaComponent, data: {title: 'Alta', icon: ''}},
            { path: '', redirectTo: 'veterinarioProductos', pathMatch: 'full'},
            { path: '**', redirectTo: 'veterinarioProductos', pathMatch: 'full'}
        ] ,
        data: {title: 'Productos', icon: ''}
    },


    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent },

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
