import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PlaceService } from '../../Services/place.service';
import { FormService } from '../../Services/form.service';
import { Place } from '../../Models/Place';
import { Observable } from 'rxjs';
import { tap, share } from 'rxjs/operators';

@Component({
    selector: 'app-form-main',
    templateUrl: './form-main.component.html',
    styleUrls: ['./form-main.component.css'],
})
export class FormMainComponent implements OnInit {
    places$: Observable<Place[]>;
    main_form: FormGroup = this._formService.main_form;
    locations: string[];
    filterdList: string[];
    possibleLocations: string[] = [];
    locationsObs$: Observable<string[]>;
    hotelList$: Observable<Place[]>;

    constructor(
        private _placeService: PlaceService,
        private _formService: FormService
    ) {}

    ngOnInit(): void {
        this.locationsObs$ = this.listenToInput();
    }
    listenToInput(): Observable<string[]> {
        return this._formService.getInputs(
            this.main_form.get('location').valueChanges
        );
    }

    onGroupClick(group: string): void {
        this.main_form.controls['kind_of_place'].setValue(group);
        console.log(
            'this group : ' + this.main_form.get('kind_of_place').value
        );
    }

    onClickAnimals(): void {
        this.main_form.controls['animal'].setValue(
            !this.main_form.controls['animal'].value
        );
    }

    onSubmit(): void {
        const formReady = this._formService.prepareForm(this.main_form.value);
        this.places$ = this._placeService.getFilterdPlaces(formReady).pipe(
            tap((v) => console.log(v)),
            share()
        );
    }
}
