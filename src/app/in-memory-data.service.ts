import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Iron Man' },
      { id: 2, name: 'Capitán América' },
      { id: 3, name: 'Thor' },
      { id: 4, name: 'Hulk' },
      { id: 5, name: 'Viuda Negra' },
      { id: 6, name: 'Pantera Negra' },
      { id: 7, name: 'Spider-Man' },
      { id: 8, name: 'Lobezno' },
      { id: 9, name: 'Capitana Marvel' },
      { id: 10, name: 'Antman' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}