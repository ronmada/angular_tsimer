import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Place } from '../Models/Place';
@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  private readonly _url: string = 'http://localhost:5000/places'
  private readonly _urlHOST: string = ' https://fathomless-crag-75187.herokuapp.com/places'

  constructor(private http: HttpClient) { }

  getAllPlaces(): Observable<Place[]> {
    return this.http.get<Place[]>(this._url);

  }
  getOnePlace(id: string = '5f3eb98b372984107d16d704'): Observable<Place> {
    return this.http.get<Place>(`${this._url}/id/${id}`);
  }
  submitFormTester(area: string = "צפון", animal: Boolean = true): Observable<Place[]> {
    let data = {
      area: area,
      animal: String(animal)
    }
    console.log("submitting area,place from service: " + area, animal)
    return this.http.get<Place[]>(`${this._url}/special/`, { params: data })

  }
}
