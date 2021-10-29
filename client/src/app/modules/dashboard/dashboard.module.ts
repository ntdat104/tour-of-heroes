import { HeroSearchComponent } from './../../components/hero-search/hero-search.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [DashboardComponent, HeroSearchComponent],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
