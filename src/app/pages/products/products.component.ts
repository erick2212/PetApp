import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: []
})
export class ProductsComponent implements OnInit {

  misDatos: any[] = [];
  guardado: number;

  constructor(private router: ActivatedRoute, private productSvs: ProductsService) { 
    this.productSvs.getAll().subscribe((data: any[]) => {
      this.misDatos = data;
      //console.log(data);
    })
  }

  ngOnInit() {
  }

  agregarCarrito(idProducto: number){
    //validar
    //Guardar en base de datos
    this.productSvs.register(idProducto)
  }

}
