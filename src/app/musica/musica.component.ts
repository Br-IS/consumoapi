import {Component, OnInit} from '@angular/core';
import {MusicaService} from "../modelo/musica.service";
import {Cancion, Lista} from "../modelo/musica";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-musica',
  templateUrl: './musica.component.html'
})
export class MusicaComponent implements OnInit {

  //public informacion: any = [];

  cancione: Cancion = new Cancion();

  canciones: Cancion[] = [];
  listas: Lista[] = [];

  constructor(private musicaService: MusicaService, public modal: NgbModal, private activatedRoute: ActivatedRoute, private router: Router,) {
  }

  ngOnInit(): void {
    this.getCanciones();
    this.getListas();
    this.CargarMusica();

  }

  public getCanciones() {
    this.musicaService.readMusica().subscribe(
      respuesta => {
        console.log(respuesta);
        this.canciones = respuesta;
      }
    );
  }

  public getListas() {
    this.musicaService.readLista().subscribe(
      respuesta => {
        console.log(respuesta);
        this.listas = respuesta;
      }
    );
  }

  CrearMusica() {
    this.musicaService.createMusica(this.cancione).subscribe(response => {
      this.router.navigate(['/musica']);
      window.location.reload();
    });
  }

  DeleteMusica(titulo: String): void {
    this.musicaService.deleteMusica(titulo).subscribe(response => {
      this.router.navigate(['/musica']);
      window.location.reload();
    })
  }

  CargarMusica(): void {
    this.activatedRoute.params.subscribe(
      e => {
        let id = e['titulo'];
        if (id) {
          this.musicaService.readMusicabyId(id).subscribe(
            respuesta => {
              this.cancione = respuesta;
            }
          );
        }
      }
    );
  }

  /*
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
   */


  /*
  EditarMusica(nombre: String) {
    this.musicaService.updateMusica(nombre, this.cancione).subscribe(response => {
      this.router.navigate(['/musica']);
      window.location.reload();
    })
  }*/


  /*
  artistas.forEach(item => {
    item.discos.forEach(disco => console.log(disco.titulo))
  });

          respuesta.forEach(lista =>{
         // lista.cancion.forEach(cancion => console.log(cancion.titulo));
          lista.cancion.forEach(cancion => {
            console.log(cancion)
            this.canciones1. push(cancion);
          })
        })

   */

}
