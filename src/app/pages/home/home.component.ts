import { Component, OnInit } from '@angular/core';
import  PNotify  from 'pnotify/dist/es/PNotify';
import  PNotifyButtons  from 'pnotify/dist/es/PNotifyButtons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { 
    PNotifyButtons; // Initiate the module. Important!
    PNotify.alert({
      Title: "Titulo de la alerta",
      text: "texto",
      animation: "fade",
      icon:"",
      shadow:true,
      delay: 1000*10,
    }); }

  ngOnInit() {
  }

}
