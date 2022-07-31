import {Component, OnInit} from '@angular/core';

import {MusicaService} from "../modelo/musica.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {Lista} from "../modelo/musica";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html'
})
export class ListaComponent implements OnInit {

  listas: Lista[] = [];

  lista: Lista = new Lista();

  constructor(private musicaService: MusicaService, public modal: NgbModal, private activatedRoute: ActivatedRoute, private router: Router,) {
  }

  ngOnInit(): void {
    this.getListas();
    this.CargarLista();
  }

  public getListas() {
    this.musicaService.readLista().subscribe(
      respuesta => {
        console.log(respuesta);
        this.listas = respuesta;
      }
    );
  }

  public CrearLista(): void {
    this.musicaService.createLista(this.lista).subscribe(response => {
      this.router.navigate(['/lista']);
      window.location.reload();
    });
  }

  public EditarListas(nombre: String): void {
    this.musicaService.updateLista(nombre, this.lista).subscribe(response => {
      this.router.navigate(['/lista']);
      window.location.reload();
    })
  }

  public EliminarLista(nombre: String): void {
    this.musicaService.deleteLista(nombre).subscribe(response => {
      this.router.navigate(['/lista']);
      window.location.reload();
    })
  }

  public CargarLista(): void {
    this.activatedRoute.params.subscribe(
      e => {

        let id = e['nombre'];
        if (id) {
          this.musicaService.readListaById(id).subscribe(
            es => this.lista = es
          );
        }

      })
  }


}
