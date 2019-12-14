import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import PNotify from 'pnotify/dist/es/PNotify';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styles: []
})
export class ProductComponent implements OnInit {

  product: any = {};

  constructor(private router: ActivatedRoute, private productSvc: ProductsService) { 
    this.router.params.subscribe(params => { 
      const code = params['code'];
      this.productSvc.getByCode(code).subscribe((data: any) => {
        this.product = data;
        console.log(this.product);
      });
    })
  }

  ngOnInit() {
  }

  agregarCarrito(idProducto: number){
    //validar
    //Guardar en base de datos
    this.productSvc.register(idProducto);
    PNotify.alert('Compra realizada correctamente!');
    
  }

}
