import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PlaceService } from '../../Services/place.service';

@Component({
  selector: 'app-form-main',
  templateUrl: './form-main.component.html',
  styleUrls: ['./form-main.component.css']
})
export class FormMainComponent implements OnInit {
  groups: Array<string> = ['צימר', 'מלון', 'וילה']
  chosenGroup: string = 'צימר'
  main_form = new FormGroup({
    Name: new FormControl(),
    Area: new FormControl(),
    PriceMin: new FormControl(100),
    PriceMax: new FormControl(1000),
    Animals: new FormControl(false),
  })
  constructor(private _placeService: PlaceService) { }
  places: any
  ngOnInit(): void {
    console.log("CHOSEN GROUP: " + this.chosenGroup)
    this.submitFormTester(); //temp
  }
  submitFormTester(): void {
    this._placeService.submitFormTester().subscribe(data => {
      this.places = data
      console.log(this.places)
    }
    )
  }
  onGroupClick(group: string) {
    this.chosenGroup = group
    console.log("this group : " + this.chosenGroup);
  }
  onClickAnimals() {
    this.main_form.controls['Animals'].setValue(!this.main_form.controls['Animals'].value)
  }
  onSubmit() {
    console.log("Submitted: Area (form main comp): " + this.main_form.get('Area').value + "ANIMALS = " + this.main_form.get('Animals').value)
    this._placeService.submitFormTester(this.main_form.get('Area').value, this.main_form.get('Animals').value)
  }

}
