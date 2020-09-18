import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { debounceTime, switchMap, filter, map, tap } from 'rxjs/operators';
import { environment } from './../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class FormService {
    private _url: string;

    constructor(private http: HttpClient) {
        this._url = environment._url;
    }
    main_form = new FormGroup({
        kind_of_place: new FormControl(),
        name: new FormControl(),
        area: new FormControl(),
        animal: new FormControl(),
        location: new FormControl(),
    });

    merged_locations: string[];

    // getForm(): FormGroup {
    //     return this.main_form;
    // }

    // defineLocationArray(locationList: string[]): string[] {
    //     const locationObjss = {
    //         country_name: <string[]>[],
    //         city_name: <string[]>[],
    //     };
    //     locationList.forEach((item) => {
    //         locationObjss.city_name.push(item.split(',')[0].trim());
    //         locationObjss.country_name.push(item.split(',')[1].trim());
    //     });
    //     for (const [key, value] of Object.entries(locationObjss)) {
    //         locationObjss[key] = [...new Set(value)].sort();
    //     }
    //     const merged_locations = [
    //         ...locationObjss.country_name,
    //         ...locationObjss.city_name,
    //     ];
    //     console.log('merged locations', merged_locations);
    //     return merged_locations;
    // }

    // checkPossibleLocations(
    //     input_value: string,
    //     merged_locations: string[]
    // ): string[] {
    //     console.log('location value changed');
    //     console.log(input_value);
    //     const list = merged_locations.filter((item) => {
    //         if (input_value == '') return;
    //         return item.toLowerCase().startsWith(input_value.toLowerCase());
    //     });
    //     return list;
    // }

    // getLocations(): Promise<unknown> {
    //   return new Promise((resolve) => {
    //     console.log("getting all possible locations");
    //     this.http
    //       .get<string[]>(`${this._url}/locations/`)
    //       .subscribe((locationList) => {
    //         console.log("LOCATION LIST ");
    //         console.log(locationList);
    //         this.merged_locations = this.defineLocationArray(locationList);
    //         resolve();
    //       });
    //   });
    // }
    getInputs(input: Observable<string>): Observable<string[]> {
        return input.pipe(
            tap((ev) => {
                const globalRegex = RegExp('^[a-zA-Z]', 'gi');
                if (!globalRegex.test(ev)) {
                    console.log('WRONG');
                }
            }),
            debounceTime(500),
            map((ev) => ev.trim()),
            filter((ev) => ev.length >= 3),
            switchMap((v) => this.requestToServer(v))
        );
    }
    requestToServer(inputString: string): Observable<string[]> {
        console.log(inputString);
        return this.http.get<string[]>(
            `${this._url}/locations2/${inputString}`
        );
    }
    prepareForm(data: HttpParams): HttpParams {
        Object.keys(data).forEach((key) => {
            if (data[key] === null || data[key] === '' || data[key] === false)
                delete data[key];
        }); //remove nulls & unid
        return data;
    }
    // getLocations(): Promise<string[]> {
    //     return new Promise((resolve) => {
    //         console.log('getting all possible locations');
    //         this.http
    //             .get<string[]>(`${this._url}/locations/`)
    //             .subscribe((locationList) => {
    //                 console.log('LOCATION LIST ');
    //                 console.log(locationList);
    //                 const mergedLocations = this.defineLocationArray(
    //                     locationList
    //                 );
    //                 resolve(mergedLocations);
    //             });
    //     });
    // }
}
