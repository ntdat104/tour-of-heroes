import { Component, OnInit } from '@angular/core';
import { Hero } from 'interfaces/hero';
import { HeroService } from 'services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    const newHero: Hero = {
      id: Date.now(),
      name,
    };
    this.heroService.addHero(newHero).subscribe((hero) => {
      console.log(hero);
      this.getHeroes();
    });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter((h) => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe(() => {
      console.log('deleted hero:', hero);
    });
  }
}
