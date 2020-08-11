import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-form-main',
  templateUrl: './form-main.component.html',
  styleUrls: ['./form-main.component.css']
})
export class FormMainComponent implements OnInit {
  groups: Array<string> = []

  main_form = new FormGroup({
    Name: new FormControl(),
    Area: new FormControl(),
    PriceMin: new FormControl(100),
    PriceMax: new FormControl(1000),
    Animals: new FormControl(false),
  })
  constructor() { }

  ngOnInit(): void {
    this.groups = ["צימר", "מלון", "וילה"];
  }
  onGroupClick(group: string) {
    console.log("this group : " + group);
  }
  onClickAnimals() {
    this.main_form.controls['Animals'].setValue(!this.main_form.controls['Animals'].value)
  }
  onSubmit() {
    console.log("Submitted: Area: " + this.main_form.get('Area').value + "ANIMALS = " + this.main_form.get('Animals').value)
  }

}
