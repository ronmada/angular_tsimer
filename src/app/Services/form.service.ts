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
    // priceMin: new FormControl(),
    // priceMax: new FormControl(),
    animal: new FormControl(false),
    location: new FormControl(),
  });

  merged_locations: string[];

  getForm(): FormGroup {
    return this.main_form;
  }

  defineLocationArray(locationList: string[]): string[] {
    const locationObjss = {
      country_name: <string[]>[],
      city_name: <string[]>[],
    };
    locationList.forEach((item) => {
      locationObjss.city_name.push(item.split(",")[0].trim());
      locationObjss.country_name.push(item.split(",")[1].trim());
    });
    for (const [key, value] of Object.entries(locationObjss)) {
      locationObjss[key] = [...new Set(value)].sort();
    }
    const merged_locations = [
      ...locationObjss.country_name,
      ...locationObjss.city_name,
    ];
    console.log("merged locations", merged_locations);
    return merged_locations;
  }

  checkPossibleLocations(input_value: string , merged_locations : string[]): string[] {
    console.log("location value changed");
    console.log(input_value);
    const list = merged_locations.filter((item) => {
      if (input_value == "") return;
      return item.toLowerCase().startsWith(input_value.toLowerCase());
    });
    return list;
  }

  // getLocations(): Promise<unknown> {
  //   return new Promise((resolve) => {
  //     console.log("getting all possible locations");
  //     this.http
  //       .get<string[]>(`${this._url}/locations/`)
  //       .subscribe((locationList) => {
  //         console.log("LOCATION LIST ");
  //         console.log(locationList);
  //         this.merged_locations = this.defineLocationArray(locationList);
  //         resolve();
  //       });
  //   });
  // }
  getLocations(): Promise<string[]> {
    return new Promise((resolve) => {
      console.log("getting all possible locations");
      this.http
        .get<string[]>(`${this._url}/locations/`)
        .subscribe((locationList) => {
          console.log("LOCATION LIST ");
          console.log(locationList);
          const mergedLocations = this.defineLocationArray(locationList)
          resolve(mergedLocations);
          // this.merged_locations = this.defineLocationArray(locationList);
          // merged = this.merged_locations;
          // console.log("22222");
          // resolve(merged);
        });
    });
  }
  formAutoComplete() : void{
    return
  }
}
