import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesComponent } from './heroes.component';

@NgModule({
  declarations: [HeroesComponent],
  imports: [CommonModule, HeroesRoutingModule],
})
export class HeroesModule {}
