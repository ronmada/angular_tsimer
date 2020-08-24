import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
// import { Toolbarlist } from "../../Models/Toolbarlist";
@Component({
  selector: "app-top-toolbar",
  templateUrl: "./top-toolbar.component.html",
  styleUrls: ["./top-toolbar.component.css"],
})
export class TopToolbarComponent implements OnInit {
  toolbarList = [];
  toolbarItems: Array<{ _path: string; name: string }> = [
    { _path: "about", name: "אודותינו" },
    { _path: "opinions", name: "חוות דעת" },
  ];
  itemListOptions = "";
  mainListIn = false;
  subListIn = false;
  constructor(private router : Router){}
  ngOnInit(): void {
    console.log("top-toolbar comp " + this.router.url)
    this.initToolbarList();
  }

  initToolbarList(): void {
    console.log("initToolbarList");
    this.toolbarList.push(
      {
        id: "tsim",
        name: "צימרים",
        options: [
          "לפי שעה",
          "לזוגות",
          "למשפחות",
          "נגיש לנכים",
          "עם כלבים",
          "לחיילים",
          "למגזר הדתי",
        ],
      },
      { id: "miv", name: "מבצעים", options: ["oi", "vey", "גדול"] }
    );
  }

  // subListOnClick(itemlistoption: Toolbarlist, single_option: string) :void {return
  // }

  getMainList(): void {
    this.isMainListIn();
    // this.itemListOptions = options;
  }

  isMainListOut(): void {
    this.mainListIn = false;
  }

  isMainListIn(): void {
    this.mainListIn = true;
    this.subListIn = true;
  }

  isSubListIn(): void {
    this.subListIn = true;
  }

  isSubListOut(): void {
    this.subListIn = false;
  }
  // onItemitemlistClick(itemlist :{ id: string; name: string } ): void {
  //   console.log(itemlist.id)
  //   this.router.navigate([`/${itemlist.id}`])
  //   return;
  // }
}
