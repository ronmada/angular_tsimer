import { Component, OnInit } from '@angular/core';
import { Toolbarlist } from "../../Models/Toolbarlist";
@Component({
  selector: 'app-top-toolbar',
  templateUrl: './top-toolbar.component.html',
  styleUrls: ['./top-toolbar.component.css']
})
export class TopToolbarComponent implements OnInit {
  constructor() { }

  toolbarlist = ["צימרים", "מבצעים", "חוות דעת", "אודותינו", "בתי מלון", "וילות", "אטרקציות"]

  something;
  baba = new Toolbarlist();
  applier;
  /*
  todom = new  Toolbarlist [
     { todoid: "att", name: 'אטרקציות', options: ["1", "two", "3"] },
    { id: "miv", name: 'מבצעים' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ];*/
  ngOnInit(): void {
  }

  randomfunc(something) {
    console.log(something)
    this.something = something;
  }
  initToolbar(){
    this.baba.
  }
}
