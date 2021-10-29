import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HeroDetailComponent } from 'components/hero-detail/hero-detail.component';
import { MessagesComponent } from 'components/messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroSearchComponent } from './components/hero-search/hero-search.component';

@NgModule({
  declarations: [AppComponent, HeroDetailComponent, MessagesComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
