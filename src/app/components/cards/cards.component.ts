import { Component, OnInit  } from '@angular/core';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent {
  characters: any[] = [];
  constructor(private api: CharactersService) {
    
  }
  ngOnInit(): void {
    this.api.getCharacters().subscribe((data: any) => {
      this.characters = data.results;
      console.log(this.characters)
    });
    console.log(this.characters)
  }
}
