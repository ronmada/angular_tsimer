import { Component, OnInit } from '@angular/core';
import { PlaceService } from '../../Services/place.service';
@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.css']
})
export class PlaceListComponent implements OnInit {
  id : string 
  public places = [];
  onePlace: Object = {}
  
  constructor(private _placeService: PlaceService) { }

  ngOnInit(): void {
    // this.getAllPlaces()
    this.getOnePlace()

  }
  // getAllPlaces(): void {
  //   this._placeService.getAllPlaces().subscribe(data => {
  //     this.places = data
  //     console.log(this.places[0]['name'])
  //     console.log("data is:  " + data[1])

  //   }
  //   )
  // }
  getOnePlace(): void {
    let id : string = '5f3bf251af5c4518951b945a'
    this._placeService.getOnePlace(id).subscribe(data => {
      this.onePlace = data
      console.log("OnePlace is:  " + this.onePlace['name'])
    })

  }
}