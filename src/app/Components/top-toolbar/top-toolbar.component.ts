import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-top-toolbar",
  templateUrl: "./top-toolbar.component.html",
  styleUrls: ["./top-toolbar.component.css"],
})
export class TopToolbarComponent implements OnInit {
  toolbarItems: Array<{ _path: string; name: string }> = [
    { _path: "about", name: "אודותינו" },
    { _path: "opinionss", name: "חוות דעת" },
  ];

  ngOnInit(): void {
    return;
  }
}
