import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { EMPTY, Observable, of } from 'rxjs';
import { Place } from '../Models/Place';
import { environment } from './../../environments/environment';
import { mergeMap, share, tap } from 'rxjs/operators';
@Injectable({
    providedIn: 'root',
})
export class PlaceService {
    private _url: string;
    places$: Observable<Place[]>;

    constructor(private http: HttpClient) {
        this._url = environment._url;
    }

    // getAllPlaces(): Observable<Place[]> {
    //     return this.http.get<Place[]>(this._url);
    // }

    // getOnePlace(id = '5f3eb98b372984107d16d704'): Observable<Place> {
    //     return this.http.get<Place>(`${this._url}/id/${id}`);
    // }

    getFilterdPlaces(data: HttpParams): void {
        console.log('clicked on submit, this is the filter');
        console.log(data);
        const obs = this.http
            .get<Place[]>(`${this._url}/places/`, {
                params: data,
            })
            .pipe(
                tap((v) => console.log(v)),
                mergeMap((val) => (val.length ? of(val) : EMPTY)),
                share()
            );
        this.places$ = obs;
    }
}
// return this.http.post<Place[]>(`${this._url}/special/`, data);
