import { Component } from '@angular/core';
import { Heroes } from '../../../interface/heroes';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  public deleteHero?: Heroes;
  public emptyHero: boolean = false;
  get capitaliceName(): string {
    return this.heroes[0].name.toUpperCase();
  }

  public heroes: Heroes[] = [
    {
      name: 'Spiderman',
      age: 30,
      powers: ['spider-sense', 'spider-sense', 'spider-sense', 'spider-sense'],
      getName: () => 'Spiderman',
    },
    {
      name: 'Hulk',
      age: 40,
      powers: ['spider-sense', 'spider-sense', 'spider-sense', 'spider-sense'],
      getName: () => 'Hulk',
    },
    {
      name: 'Ironman',
      age: 50,
      powers: ['spider-sense', 'spider-sense', 'spider-sense', 'spider-sense'],
      getName: () => 'Ironman',
    },
  ];

  removeLastHero(): void {
    this.deleteHero = this.heroes.pop();

    // get size delete deleteHero
    const size = this.heroes.length;

    console.log(this.deleteHero);
    if (this.deleteHero) {
      this.emptyHero = true;
      console.log('El heroe ha sido eliminado');
    } else {
      this.emptyHero = false;
      console.log('No hay heroes para eliminar');
    }
  }
}
