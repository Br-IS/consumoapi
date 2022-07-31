
export class Cancion{
  titulo: string = "";
  artista: string= "";
  album: string= "";
  anio: string= "";
}

export class Lista {
  nombre: string ="";
  descripcion: string="";
  cancion: Cancion[] = [];

}

/*
export interface Lista {
  nombre: string;
  descripcion: string;
  cancion: Cancion[];
}

export interface Cancion {
  titulo: string;
  artista: string;
  album: string;
  anio: string;
}
*/

