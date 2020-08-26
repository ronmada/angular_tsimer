import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Place } from "../Models/Place";

@Injectable({
  providedIn: "root",
})
export class PlaceService {
  private readonly _url = "http://localhost:5000/places";
  private readonly _urlHOST =
    " https://fathomless-crag-75187.herokuapp.com/places";

  constructor(private http: HttpClient) {}

  getAllPlaces(): Observable<Place[]> {
    return this.http.get<Place[]>(this._url);
  }

  getOnePlace(id = "5f3eb98b372984107d16d704"): Observable<Place> {
    return this.http.get<Place>(`${this._url}/id/${id}`);
  }

  getFilterdPlaces(data = { defult: "defult" }): Observable<Place[]> {
    console.log("submitting area,place from service:");
    Object.keys(data).forEach(
      (key) => data[key] == undefined && delete data[key]
    ); //remove nulls & unid
    console.log(data);
    const heady = {
      "Content-Type": "application/json",
    };
    return this.http.get<Place[]>(`${this._url}/special/`, {
      params: data,
      headers: heady,
    });
  }
}
