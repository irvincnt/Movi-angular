import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { CharactersServices } from './services/characters.service'; 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  personajes;
  img_corta="/portrait_xlarge.";
  img_link = 'https://image.tmdb.org/t/p/w154';
  
  constructor(private service: CharactersServices){}

  ngOnInit(){
    this.service.getCharacters()
      .subscribe(
        personajes => this.personajes = personajes,
        err => {
          'Error en el servidor'
        });
  }
}
