import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  
  main_form = new FormGroup({
    kind_of_place: new FormControl("צימר"),
    name: new FormControl(),
    area: new FormControl(),
    priceMin: new FormControl(100),
    priceMax: new FormControl(1000),
    animal: new FormControl(false),
  });
  
  getForm(): FormGroup {
    return this.main_form;
  }
}
