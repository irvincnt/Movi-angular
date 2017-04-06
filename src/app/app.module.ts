import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { CharactersServices } from './services/characters.service'; 

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    CharactersServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
