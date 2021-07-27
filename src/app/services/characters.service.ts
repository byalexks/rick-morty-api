import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  constructor(private http: HttpClient) {

  }
  getCharacters(page:number=1){
    return this.http.get(`https://rickandmortyapi.com/api/character/?page=${page}`);
  
  }
  searchCharacter(termino:String){
    return this.http.get(
      `https://rickandmortyapi.com/api/character/?name=${termino}`
    );
  }

}
