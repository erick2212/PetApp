import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-cliente-mascotas',
  templateUrl: './cliente-mascotas.component.html',
  styles: []
})
export class ClienteMascotasComponent implements OnInit {

  misdatos: any;

  constructor(private productsSvc: ProductsService) { 
      this.productsSvc.apiUsers().subscribe((data: any) => {
        this.misdatos = data;
        console.log("PUT Request is successful ", this.misdatos);
      })
  }

  ngOnInit() {
  }

}
