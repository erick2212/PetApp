import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: []
})
export class ProductsComponent implements OnInit {

  productList: any[] = [];

  constructor(private productSvs: ProductsService) { 
  
  }

  ngOnInit() {
  }

}
