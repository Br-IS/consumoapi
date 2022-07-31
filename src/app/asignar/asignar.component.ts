import {Component, OnInit} from '@angular/core';
import {Cancion, Lista} from "../modelo/musica";
import {MusicaService} from "../modelo/musica.service";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-asignar',
  templateUrl: './asignar.component.html'
})
export class AsignarComponent implements OnInit {

  canciones: Cancion[] = [];
  listas: Lista[] = [];

  cancion: Cancion = new Cancion();
  lista: Lista = new Lista();

  //checkAccion: checkbox = new checkbox();

  constructor(private musicaService: MusicaService, private activatedRoute: ActivatedRoute, private router: Router,) {
  }

  ngOnInit(): void {
    this.getListas();
    this.getCanciones();
    this.CargarMusica();
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

  public getCanciones() {
    this.musicaService.readMusica().subscribe(
      respuesta => {
        console.log(respuesta);
        this.canciones = respuesta;
      }
    );
  }

  public checkBoxActivos(titulo: String, nombre: String): void {
    this.musicaService.asignarCancioneLista(titulo, nombre).subscribe(
      es => {
        this.router.navigate(['/asignar']);
        window.location.reload();
      }
    );
  }

  /*

  CrearMusica() {
    this.musicaService.createMusica(this.cancione).subscribe(response => {
      this.router.navigate(['/musica']);
      window.location.reload();
    });
  }
   */


  CargarMusica(): void {
    this.activatedRoute.params.subscribe(
      e => {
        let id = e['titulo'];
        if (id) {
          this.musicaService.readMusicabyId(id).subscribe(
            respuesta => {
              this.cancion = respuesta;
            }
          );
        }
      }
    );
  }

  CargarLista(): void {
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
