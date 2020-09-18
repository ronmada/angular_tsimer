import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpParams } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class FormService {
    main_form = new FormGroup({
        kind_of_place: new FormControl(),
        name: new FormControl(),
        area: new FormControl(),
        animal: new FormControl(),
        location: new FormControl(),
    });

    prepareForm(data: HttpParams): HttpParams {
        Object.keys(data).forEach((key) => {
            if (data[key] === null || data[key] === '' || data[key] === false)
                delete data[key];
        }); //remove nulls & unid
        return data;
    }
}
