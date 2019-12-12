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

const routes: Routes = [
    { path: 'Home', component: HomeComponent },
    { path: 'Carrito', component: CarritoComponent },
    { path: 'Mascotas', component: MascotasComponent },
    { path: 'Productos', component: ProductsComponent },
    
    //admin
    { path: 'AdminClinicaAltaComponent', component: AdminClinicaAltaComponent},
    { path: 'AdminClinicaVerComponent', component: AdminClinicaVerComponent},
    { path: 'AdminClinicasComponent', component: AdminClinicasComponent},

    //vet
    { path: 'VeterinarioBusquedaClientesComponent', component: VeterinarioBusquedaClientesComponent},
    { path: 'VeterinarioCitaComponent', component: VeterinarioCitaComponent},
    { path: 'VeterinarioClienteAltaComponent', component: VeterinarioClienteAltaComponent},
    { path: 'VeterinarioClienteOrdenesProcedimientoComponent', component: VeterinarioClienteOrdenesProcedimientoComponent},
    { path: 'VeterinarioProductoVerComponent', component: VeterinarioProductoVerComponent},
    { path: 'VeterinarioCitasComponent', component: VeterinarioCitasComponent},
    { path: 'VeterinarioClienteVerComponent', component: VeterinarioClienteVerComponent},
    { path: 'VeterinarioClienteVerSinPermisosComponent', component: VeterinarioClienteVerSinPermisosComponent},
    { path: 'VeterinarioClienteOrdenProcedimientoAltaComponent', component: VeterinarioClienteOrdenProcedimientoAltaComponent},
    { path: 'VeterinarioClienteOrdenProcedimientoVerComponent', component: VeterinarioClienteOrdenProcedimientoVerComponent},
    { path: 'VeterinarioProductoAltaComponent', component: VeterinarioProductoAltaComponent},
    { path: 'VeterinarioProductosComponent', component: VeterinarioProductosComponent},


    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent },

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash:true})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
