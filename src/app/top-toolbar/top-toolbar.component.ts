import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-toolbar',
  templateUrl: './top-toolbar.component.html',
  styleUrls: ['./top-toolbar.component.css']
})
export class TopToolbarComponent implements OnInit {
  toolbarlist = ["צימרים","בתי מלון","וילות"]
  constructor() { }

  ngOnInit(): void {
  }

}
