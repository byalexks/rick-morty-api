import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  dateSearched: any[] = [];

  constructor(private search: CharactersService) {}

  ngOnInit(): void {}
  searchCH(buscarTexto: String){
    this.search.searchCharacter(buscarTexto)
    .subscribe((x:any) =>{
      console.log(x.results)
      this.dateSearched = x.results;
    })
  }

}
