import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PlaceService } from '../../Services/place.service';
import { FormService } from '../../Services/form.service';
import { Place } from '../../Models/Place';
import { Observable } from 'rxjs';
import { LocationService } from '../../Services/location.service';

@Component({
    selector: 'app-form-main',
    templateUrl: './form-main.component.html',
    styleUrls: ['./form-main.component.css'],
})
export class FormMainComponent implements OnInit {
    places$: Observable<Place[]>;
    main_form: FormGroup = this._formService.main_form;
    locationsObs$: Observable<string[]>;

    constructor(
        private _placeService: PlaceService,
        private _formService: FormService,
        private _locationService: LocationService
    ) {}

    ngOnInit(): void {
        this.locationsObs$ = this.listenToInput();
    }

    listenToInput(): Observable<string[]> {
        return this._locationService.locationInputObs(
            this.main_form.get('location').valueChanges
        );
    }

    onClickAnimals(): void {
        this.main_form.controls['animal'].setValue(
            !this.main_form.controls['animal'].value
        );
    }

    onSubmit(): void {
        const formReady = this._formService.prepareForm(this.main_form.value);
        this.places$ = this._placeService.getFilterdPlaces(formReady);
    }
    
    // onGroupClick(group: string): void {
    //     this.main_form.controls['kind_of_place'].setValue(group);
    //     console.log(
    //         'this group : ' + this.main_form.get('kind_of_place').value
    //     );
    // }
}
