import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-top-toolbar-list-details',
  templateUrl: './top-toolbar-list-details.component.html',
  styleUrls: ['./top-toolbar-list-details.component.css']
})
export class TopToolbarListDetailsComponent implements OnInit {

  constructor() { }
  @Input() detail : string;
  ngOnInit(): void {
  }

}
