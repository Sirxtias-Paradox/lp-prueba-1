import { Component } from '@angular/core';
import { LPService } from '../services/lp.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-lp-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor( private lpService: LPService ) {}


  get characters(): Character[] {
    return [...this.lpService.characters];
  }


  onDeleteCharacter( id: string ):void {
    this.lpService.deleteCharacterById( id );
  }

  onNewCharacter( character: Character ):void {
    this.lpService.addCharacter( character );
  }
}
