import { Component, Input } from '@angular/core';
import { Place } from '../../Models/Place';
@Component({
    selector: 'app-place-details',
    templateUrl: './place-details.component.html',
    styleUrls: ['./place-details.component.css'],
})
export class PlaceDetailsComponent {
    @Input() place: Place;
}
