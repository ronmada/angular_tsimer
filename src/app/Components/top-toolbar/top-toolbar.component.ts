import { Component, OnInit } from '@angular/core';
import { Toolbarlist } from "../../Models/Toolbarlist";
@Component({
  selector: 'app-top-toolbar',
  templateUrl: './top-toolbar.component.html',
  styleUrls: ['./top-toolbar.component.css']
})
export class TopToolbarComponent implements OnInit {
  constructor() { }
  toolbarList: Array<Toolbarlist> = []
  itemListOptions: any = '';
  mainListIn: boolean = false
  subListIn: boolean = false

  ngOnInit(): void {
    this.initToolbarList()
  }

  initToolbarList(): void {
    this.toolbarList.push(
      { id: "tsim", name: 'צימרים', options: ["לפי שעה", "לזוגות", "למשפחות", "נגיש לנכים", "עם כלבים", "לחיילים", "למגזר הדתי"] },
      { id: "miv", name: 'מבצעים', options: ["oi","vey","גדול"]});
  }

  subListOnClick(itemlistoption: Toolbarlist, single_option: string) {
  }

  getMainList(options: Object): void {
    this.isMainListIn()
    this.itemListOptions = options;
  }

  isMainListOut(): void {
    this.mainListIn = false
  }

  isMainListIn(): void {
    this.mainListIn = true
    this.subListIn = true
  }

  isSubListIn(): void {
    this.subListIn = true
  }

  isSubListOut(): void {
    this.subListIn = false
  }
}
