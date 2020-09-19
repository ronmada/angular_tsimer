import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PlaceService } from '../../Services/place.service';
import { FormService } from '../../Services/form.service';
import { LocationService } from '../../Services/location.service';

@Component({
    selector: 'app-form-main',
    templateUrl: './form-main.component.html',
    styleUrls: ['./form-main.component.css'],
})
export class FormMainComponent implements OnInit {
    form_: FormGroup;
    constructor(
        public _placeService: PlaceService,
        private _formService: FormService,
        public _locationService: LocationService
    ) 
    {
        this.form_ = this._formService.form_;
    }

    ngOnInit(): void {
        this.listenToInput();
    }
 
    listenToInput(): void {
        this._locationService.locationInputObs(
            this.form_.get('location').valueChanges
        );
    }

    onClickAnimals(): void {
        this.form_.controls['animal'].setValue(
            !this.form_.controls['animal'].value
        );
    }

    onSubmit(): void {
        const formReady = this._formService.prepareForm(this.form_.value);
        this._placeService.getFilterdPlaces(formReady);
    }

    // onGroupClick(group: string): void {
    //     this.main_form.controls['kind_of_place'].setValue(group);
    //     console.log(
    //         'this group : ' + this.main_form.get('kind_of_place').value
    //     );
    // }
}
