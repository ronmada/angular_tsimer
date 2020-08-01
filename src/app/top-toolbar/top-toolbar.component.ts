import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-toolbar',
  templateUrl: './top-toolbar.component.html',
  styleUrls: ['./top-toolbar.component.css']
})
export class TopToolbarComponent implements OnInit {
  toolbarlist = ["צימרים", "מבצעים", "חוות דעת", "אודותינו", "בתי מלון", "וילות", "אטרקציות"]
  constructor() { }

  ngOnInit(): void {
  }

}
