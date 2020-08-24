import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { PlaceService } from "../../Services/place.service";
import { FormService } from "../../Services/form.service";
@Component({
  selector: "app-form-main",
  templateUrl: "./form-main.component.html",
  styleUrls: ["./form-main.component.css"],
})
export class FormMainComponent implements OnInit {
  groups = ["צימר", "וילה", "מלון"];
  places;
  formy: FormGroup;
  main_form: FormGroup;

  constructor(
    private _placeService: PlaceService,
    private _formService: FormService
  ) {}

  ngOnInit(): void {
    //this.submitFormTester(); //temp
    console.log("HELLO");
    this.main_form = this._formService.getForm();
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
