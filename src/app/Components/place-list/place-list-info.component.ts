import { Component, Input } from '@angular/core';
import { Place } from '../../Models/Place';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-place-list-info',
    templateUrl: './place-list-info.component.html',
    styleUrls: ['./place-list-info.component.css'],
})
export class PlaceListInfoComponent {
    @Input() placeList$: Observable<Place[]>;
}
