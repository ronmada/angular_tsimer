import { Component, OnInit } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { PlaceService } from '../../Services/place.service'
import { FormService } from '../../Services/form.service'
import { Place } from '../../Models/Place'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-form-main',
  templateUrl: './form-main.component.html',
  styleUrls: ['./form-main.component.css'],
})
export class FormMainComponent implements OnInit {
  places$: Observable<Place[]>
  main_form: FormGroup = this._formService.main_form
  locations: string[]
  filterdList: string[]
  possibleLocations: string[] = []
  locationsObs$: Observable<string[]>
  hotelList$: Observable<Place[]>
  constructor(
    private _placeService: PlaceService,
    public _formService: FormService
  ) {}
  getPossibleLocations(): void {
    console.log('started getPossibleLocations')
    // this._formService.getLocations().then((possibleLocations) => {
    //   this.filterdList = possibleLocations;
    //   console.log("array", possibleLocations);
    //   this.possibleLocations = [...possibleLocations];
    // });
  }
  // listenToInput(): void {
  //   console.log("I AM AT listenToInput");
  //   this.main_form.get("location").valueChanges.subscribe((input) => {
  //     this.filterdList = this._formService.checkPossibleLocations(
  //       input,
  //       this.possibleLocations
  //     );
  //     console.log("filterd list : ", this.filterdList);
  //   });
  // }

  listenToInput(): Observable<string[]> {
    return this._formService.getInputs(
      this.main_form.get('location').valueChanges
    )
  }
  ngOnInit(): void {
    this.getPossibleLocations()
    this.locationsObs$ = this.listenToInput()
  }
  onGroupClick(group: string): void {
    this.main_form.controls['kind_of_place'].setValue(group)
    console.log('this group : ' + this.main_form.get('kind_of_place').value)
  }

  onClickAnimals(): void {
    this.main_form.controls['animal'].setValue(
      !this.main_form.controls['animal'].value
    )
  }

  onSubmit(): void {
    this.places$= this._placeService.getFilterdPlaces(this.main_form.value)
    
  }
  // clickFunc(location: string): void {
  //   console.log('i am here  ', location)
  //   this.hotelList$ = this._placeService.requestServerHotels(location)
  // }
}
