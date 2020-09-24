import { Component, Input } from '@angular/core';
import { Place } from '../../Models/Place';

@Component({
    selector: 'app-place-features',
    templateUrl: './place-features.component.html',
    styleUrls: ['./place-features.component.css'],
})
export class PlaceFeaturesComponent {
    @Input() place: Place;
}
