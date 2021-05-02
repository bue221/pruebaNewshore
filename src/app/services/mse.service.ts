import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MseService {
  private baseUrl: string = 'https://hp-api.herokuapp.com/api/';

  constructor(private _httpClient: HttpClient) {}

  getCharacters(): Observable<any> {
    let url: string = this.baseUrl + 'characters';
    return this._httpClient.get(url);
  }

  getHouseCharacters(query: string): Observable<any> {
    let url: string = this.baseUrl + 'characters/house/' + query;
    return this._httpClient.get(url);
  }
}
