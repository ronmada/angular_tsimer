import { Component, OnInit, Input } from "@angular/core";
import { PlaceService } from "../../Services/place.service";
import { Place } from "../../Models/Place";

@Component({
  selector: "app-place-list",
  templateUrl: "./place-list.component.html",
  styleUrls: ["./place-list.component.css"],
})
export class PlaceListComponent implements OnInit {
  // id: string;
  // public places = [];
  // onePlace = {};
  @Input() placeList : Place[]
  constructor(private _placeService: PlaceService) {}
  ngOnInit(): void {
    // this.getAllPlaces()
    //this.getOnePlace()
  }
  // getAllPlaces(): void {
  //   this._placeService.getAllPlaces().subscribe((data) => {
  //     this.places = data;
  //     console.log(this.places[0]["name"]);
  //     console.log("data is:  " + data[1]);
  //   });
  // }
  // getOnePlace(): void {
  //   const id = "5f3eb98b372984107d16d704";
  //   this._placeService.getOnePlace(id).subscribe((data) => {
  //     this.onePlace = data;
  //     console.log("OnePlace is:  " + this.onePlace["name"]);
  //   });
  // }
}
