import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { CharactersServices } from './services/characters.service'; 

import 'rxjs/add/operator/map';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  personajes;
  img_corta="/portrait_xlarge.";
  title = 'app works!';
  
  constructor(private service: CharactersServices){}

  ngOnInit(){
    this.service.getCharacters()
      .subscribe(personajes => this.personajes = personajes);
  }
}
