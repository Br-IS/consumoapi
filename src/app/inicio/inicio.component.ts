import { Component, OnInit } from '@angular/core';
import {MusicaService} from "../modelo/musica.service";
import {Lista} from "../modelo/musica";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html'
})
export class InicioComponent implements OnInit {


  listas: Lista[] = [];

  constructor(private musicaService: MusicaService) { }

  ngOnInit(): void {
    this.getListas();
  }

  public getListas() {
    this.musicaService.readLista().subscribe(
      respuesta => {
        console.log(respuesta);
        this.listas = respuesta;
      }
    );
  }



}
