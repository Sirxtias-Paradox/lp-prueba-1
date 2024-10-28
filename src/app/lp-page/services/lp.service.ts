import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';


@Injectable({
  providedIn: 'root'
})

export class LPService {


  public characters: Character[] = [{
    id: uuid(),
    name: 'Maxy',
    age: 21
  },{
    id: uuid(),
    name: 'Mary',
    age: 21
  },{
    id: uuid(),
    name: 'Primrose',
    age: 18
  }];


  addCharacter( character: Character ):void {

    const newCharacter: Character = { id: uuid(), ...character }

    this.characters.push(newCharacter);
  }
  // onDeleteCharacter( index: number ) {
  //   this.characters.splice( index,1 );
  // }

  deleteCharacterById( id:string ) {
    this.characters = this.characters.filter( character => character.id !== id );
  }

}
