import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class CharactersServices{
    constructor(private http: Http){}

    /**
     * Get all characters
     */
    getCharacters(){
        return this.http.get("https://gateway.marvel.com/v1/public/characters?ts=1&apikey=332d7d0388b04738ed71de41a25745a8&hash=19ca5648a47abb71d1b27d6542691237")
            .map( res => res.json().data.results);
    }
}