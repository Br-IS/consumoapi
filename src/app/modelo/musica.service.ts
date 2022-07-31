import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Cancion, Lista} from "./musica";


@Injectable({
  providedIn: 'root'
})
export class MusicaService {

  private url = 'https://m5b.herokuapp.com/';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private httpClient: HttpClient) {
  }

  //CANCION
  //CREATE
  createMusica(cancion: Cancion) {
    return this.httpClient.post(this.url + 'canciones/crear', cancion, {headers: this.httpHeaders});
  }

  //READ
  readMusica(): Observable<Cancion[]> {
    return this.httpClient.get(this.url + 'canciones/list').pipe(map(result => result as Cancion[]));
  }

  readMusicabyId(titulo: String): Observable<Cancion> {
    return this.httpClient.get(this.url + 'canciones/' + titulo).pipe(map(result => result as Cancion));
  }

//DELETE
  deleteMusica(titulo: String) {
    return this.httpClient.delete(this.url + 'canciones/' + titulo, {headers: this.httpHeaders});
  }

  asignarCancioneLista(titulo: String, nombre: String) {
    console.log(this.url+'canciones/api/'+titulo+'/'+nombre);
    return this.httpClient.post(this.url + 'canciones/api/' + titulo + '/' + nombre, {headers: this.httpHeaders})


  }


  //LISTA
  //Search by id
  readListaById(nombre: String): Observable<Lista> {
    return this.httpClient.get(this.url + 'listas/' + nombre).pipe(map(result => result as Lista));
  }

  //CREATE
  createLista(lista: Lista) {
    return this.httpClient.post(this.url + 'listas/crear', lista, {headers: this.httpHeaders});
  }

  //READ
  readLista(): Observable<Lista[]> {
    return this.httpClient.get(this.url + 'listas/list').pipe(map(result => result as Lista[]));
  }

  //UPDATE
  updateLista(nombre: String, lista: Lista) {
    return this.httpClient.post(this.url + 'listas/' + nombre, lista, {headers: this.httpHeaders})

  }

  //DELETE
  deleteLista(nombre: String) {
    return this.httpClient.delete(this.url + 'listas/' + nombre, {headers: this.httpHeaders});
  }


}
