import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { PlaceService } from "../../Services/place.service";
@Component({
  selector: "app-form-main",
  templateUrl: "./form-main.component.html",
  styleUrls: ["./form-main.component.css"],
})
export class FormMainComponent implements OnInit {
  groups: Array<string> = ["צימר", "וילה", "מלון"];
  places;
  userTest = {
    name: "Moshe",
    age: 30,
  };
  main_form = new FormGroup({
    kind_of_place: new FormControl("צימר"),
    name: new FormControl(),
    area: new FormControl(),
    priceMin: new FormControl(100),
    priceMax: new FormControl(1000),
    animal: new FormControl(false),
  });

  constructor(private _placeService: PlaceService) {}

  ngOnInit(): void {
    //this.submitFormTester(); //temp
  }

  onGroupClick(group: string): void {
    this.main_form.controls["kind_of_place"].setValue(group);
    console.log("this group : " + this.main_form.get("kind_of_place").value);
  }

  onClickAnimals(): void {
    this.main_form.controls["animal"].setValue(
      !this.main_form.controls["animal"].value
    );
  }

  onSubmit(): void {
    this._placeService
      .getFilterdPlaces(this.main_form.value)
      .subscribe((data) => {
        this.places = data;
        console.log(this.places);
      });
  }
}
