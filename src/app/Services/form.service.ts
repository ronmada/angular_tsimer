import { Injectable } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class FormService {
  constructor(private http: HttpClient) {}

  private readonly _url = "http://localhost:5000/places";
  private readonly _urlHOST =
    " https://fathomless-crag-75187.herokuapp.com/places";

  main_form = new FormGroup({
    kind_of_place: new FormControl("צימר"),
    name: new FormControl(),
    area: new FormControl(),
    priceMin: new FormControl(100),
    priceMax: new FormControl(1000),
    animal: new FormControl(false),
    location: new FormControl(),
  });

  location_value: string;
  locationList: Array<string>;
  filteredList: string[];
  country_name: string[] = [];
  city_name: string[] = [];
  getForm(): FormGroup {
    return this.main_form;
  }
  formLisenter(): void {
    console.log(this.locationList);
    this.filteredList = this.locationList;
    for (let x = 0; x < this.locationList.length; x++) {
      this.city_name.push(this.locationList[x].split(",")[0].trim());
      this.country_name.push(this.locationList[x].split(",")[1].trim());
    }
    [...new Set(this.city_name)];
    this.city_name.sort();
    const unique = [...new Set(this.country_name)];

    this.country_name.sort();
    console.log(unique);
    console.log(this.city_name);
    this.main_form
      .get("location")
      .valueChanges.subscribe((input_value: string) => {
        console.log("location value changed");
        this.location_value = input_value;
        console.log(input_value);
        // console.log(this.main_form.get("location").value);
        // console.log(this.main_form.value);
        this.filteredList = this.locationList.filter((item) => {
          //  console.log(item)
          item.startsWith(input_value);
        });
        console.log(this.filteredList.length);
      });
  }

  getLocations(): void {
    console.log("getting all possible locations");
    this.http
      .get<string[]>(`${this._url}/locations/`)
      .subscribe((locationList) => {
        this.locationList = locationList;
        console.log("LOCATION LIST ");
        // console.log(this.locationList);
        this.formLisenter();
      });
  }
}
