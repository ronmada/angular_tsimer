import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable({
    providedIn: 'root',
})
export class FormService {
    form_ = new FormGroup({
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
