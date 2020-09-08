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
    kind_of_place: new FormControl("villa"),
    name: new FormControl(),
    area: new FormControl("negev"),
    priceMin: new FormControl(100),
    priceMax: new FormControl(1000),
    animal: new FormControl(false),
    location: new FormControl(null),
  });
  locationObjss = {
    country_name: <string[]>[],
    city_name: <string[]>[],
  };
  location_value: string;
  locationList: Array<string>;
  filteredList: string[] = [];
  merged_locations: string[];
  getForm(): FormGroup {
    return this.main_form;
  }
  defineLocationArray(): void {
    for (let x = 0; x < this.locationList.length; x++) {
      this.locationObjss.city_name.push(
        this.locationList[x].split(",")[0].trim()
      );
      this.locationObjss.country_name.push(
        this.locationList[x].split(",")[1].trim()
      );
    }
    this.locationObjss.city_name = [
      ...new Set(this.locationObjss.city_name),
    ].sort();
    this.locationObjss.country_name = [
      ...new Set(this.locationObjss.country_name),
    ].sort();
    this.merged_locations = this.locationObjss.country_name.concat(
      this.locationObjss.city_name
    );
  }
  formLisenter(): void {
    this.defineLocationArray();
    this.main_form
      .get("location")
      .valueChanges.subscribe((input_value: string) => {
        console.log("location value changed");
        this.location_value = input_value;
        console.log(input_value);
        const list = this.merged_locations.filter((item) => {
          if (input_value == "") return;
          return item.toLowerCase().startsWith(input_value.toLowerCase());
        });
        this.setFilterdList(list)
      });
  }
  setFilterdList(filteredList : string[]) : void {
    this.filteredList = filteredList
    console.log(this.filteredList);
  }
   getLocations(): void {
    console.log("getting all possible locations");
    this.http
      .get<string[]>(`${this._url}/locations/`)
      .subscribe((locationList) => {
        this.locationList = locationList;
        console.log("LOCATION LIST ");
        console.log(this.locationList);
        this.formLisenter();
      });
  }
  getFilterdList(): string[] {
    return this.filteredList;
  }
}
