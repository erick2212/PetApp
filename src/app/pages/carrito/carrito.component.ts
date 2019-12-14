import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styles: []
})
export class CarritoComponent implements OnInit {

  misDatos: any[] = [];

  constructor(private router: ActivatedRoute, private productSvs: ProductsService) { 
    this.productSvs.getComprados().subscribe((data: any[]) => {
      this.misDatos = data;
      //console.log(data);
    })
  }

  ngOnInit() {
  }

}
