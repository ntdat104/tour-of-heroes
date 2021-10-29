import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hero } from 'interfaces/hero';
import { HEROES } from 'mocks/heroes';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private heroesUrl: string =
    'https://ntdat-tour-of-heroes.herokuapp.com/api/heroes';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(
    private httpClient: HttpClient,
    private messageService: MessageService,
  ) {}

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  getHeroes(): Observable<Hero[]> {
    this.log('fetched heroes');
    return this.httpClient
      .get<Hero[]>(this.heroesUrl)
      .pipe(map((res: any) => res.data));
  }

  getHero(id: number): Observable<Hero> {
    this.log(`fetched hero id=${id}`);
    return this.httpClient
      .get<Hero>(this.heroesUrl + `/${id}`)
      .pipe(map((res: any) => res.data));
  }

  searchHeroes(term: string): Observable<Hero[]> {
    this.log(`search hero q=${term}`);
    return this.httpClient
      .get<Hero[]>(`${this.heroesUrl}/?name_like=${term}`)
      .pipe(map((res: any) => res.data));
  }

  addHero(hero: Hero): Observable<Hero> {
    this.log(`add hero ${hero.name}`);
    return this.httpClient
      .post<Hero>(this.heroesUrl, hero, this.httpOptions)
      .pipe(map((res: any) => res.data));
  }

  deleteHero(id: number): Observable<Hero> {
    this.log(`delete hero id=${id}`);
    return this.httpClient
      .delete<Hero>(this.heroesUrl + `/${id}`, this.httpOptions)
      .pipe(map((res: any) => res.data));
  }

  updateHero(id: number, hero: Hero): Observable<Hero> {
    this.log(`update hero ${hero.name}`);
    return this.httpClient
      .put<Hero>(this.heroesUrl + `/${id}`, hero, this.httpOptions)
      .pipe(map((res: any) => res.data));
  }
}
