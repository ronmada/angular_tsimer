import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Place } from '../Models/Place';
@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  private _url: string = 'http://localhost:5000/places/'

  constructor(private http: HttpClient) { }

  getAllPlaces(): Observable<Place[]> {
    return this.http.get<Place[]>(this._url);

  }
  getOnePlace(data: string = ''): Observable<Place> {
    return this.http.get<Place>(this._url + data);
  }
}
