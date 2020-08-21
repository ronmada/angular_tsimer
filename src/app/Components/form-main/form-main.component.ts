import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PlaceService } from '../../Services/place.service';
@Component({
  selector: 'app-form-main',
  templateUrl: './form-main.component.html',
  styleUrls: ['./form-main.component.css']
})
export class FormMainComponent implements OnInit {

  groups: Array<string> = ["צימר", "וילה", "מלון"]
  places: any

  main_form = new FormGroup({
    kind_of_place: new FormControl("צימר"),
    name: new FormControl(),
    area: new FormControl(),
    priceMin: new FormControl(100),
    priceMax: new FormControl(1000),
    animals: new FormControl(false),
  })

  constructor(private _placeService: PlaceService) { }

  ngOnInit(): void {
    this.submitFormTester(); //temp
  }

  submitFormTester(): void {
    this._placeService.submitFormTester().subscribe(data => {
      this.places = data
      console.log(this.places)
    })
  }

  onGroupClick(group: string) {
    this.main_form.controls['kind_of_place'].setValue(group);
    console.log("this group : " + this.main_form.get('kind_of_place').value);
  }

  onClickAnimals() {
    this.main_form.controls['animals'].setValue(!this.main_form.controls['animals'].value)
  }

  onSubmit() {
    console.log(this.main_form.value)
    console.log("Submitted: Area (form main comp): " + this.main_form.get('area').value + "animals = " + this.main_form.get('animals').value)
    this._placeService.submitFormTester(this.main_form.get('area').value, this.main_form.get('animals').value)
  }

}
