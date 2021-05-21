import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Giphy } from './giphy';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GifsServiceService {
  
  private apiKey = environment.api_key;
  private query!: string;

  constructor(private http: HttpClient) { }

  getGifs() {
    return this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${this.query}&limit=50&offset=0&rating=G&lang=en`);
  }

  trendingGifs() {
    return this.http.get(`https://api.giphy.com/v1/gifs/trending?api_key=${this.apiKey}&limit=50&rating=G`);
  }

  randomGif() {
    return this.http.get(`https://api.giphy.com/v1/gifs/random?api_key=${this.apiKey}&tag=&rating=R`);
  }

  searchGifs(query: string) {
    this.query = query;
  }
}

