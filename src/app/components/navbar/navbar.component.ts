import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  comprados: number;
  misDatos: any[] = [];
  breadcrumb: any = {}
  constructor(private router: Router, private productSvs: ProductsService) {
    this._getBreadcrumbs().subscribe(event => {
      this.breadcrumb = event;
      this.getComprados();
      //console.log(event);
    });
  }

  getComprados(){
    this.productSvs.getComprados().subscribe((data: any[]) => {
      this.misDatos = data;
      this.comprados = data.length;
      console.log(this.comprados);
    })
  }

  ngOnInit() {
  }

  _getBreadcrumbs() {
    return this.router.events.pipe(
      filter(event => event instanceof ActivationEnd),
      map((event: ActivationEnd) => event.snapshot.data)
    )
  }

}
