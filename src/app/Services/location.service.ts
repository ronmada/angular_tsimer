import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
    debounceTime,
    switchMap,
    filter,
    map,
    tap,
    share,
} from 'rxjs/operators';
import { environment } from './../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class LocationService {
    locationsObs$: Observable<string[]>;
    private _url: string;

    constructor(private http: HttpClient) {
        this._url = environment._url;
    }

    locationInputObs(input: Observable<string>): void {
        const obs = input.pipe(
            tap((ev) => {
                const globalRegex = RegExp('^[a-zA-Z]', 'gi');
                if (!globalRegex.test(ev)) {
                    console.log('WRONG');
                }
            }),
            debounceTime(500),
            map((ev) => ev.trim()),
            filter((ev) => ev.length >= 3),
            switchMap((ev) => this.requestLocationsFromServer(ev)),
            share()
        );
        this.locationsObs$ = obs;
    }

    requestLocationsFromServer(inputString: string): Observable<string[]> {
        console.log(inputString);
        return this.http.get<string[]>(`${this._url}/locations/${inputString}`);
    }
}
