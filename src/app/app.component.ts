import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  personajes;
  img_corta="/portrait_xlarge.";
  title = 'app works!';
  
  constructor(private http: Http){}

  ngOnInit(){
    this.http.get("https://gateway.marvel.com/v1/public/characters?ts=1&apikey=332d7d0388b04738ed71de41a25745a8&hash=19ca5648a47abb71d1b27d6542691237")
      .subscribe(data => {
        this.personajes = data.json().data.results;
         console.log(this.personajes);
      });
  }
}
