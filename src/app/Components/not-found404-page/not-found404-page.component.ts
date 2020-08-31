import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-not-found404-page",
  templateUrl: "./not-found404-page.component.html",
  styleUrls: ["./not-found404-page.component.css"],
})
export class NotFound404PageComponent implements OnInit {
  constructor(private router: Router) {}
  errorMsg : string
  ngOnInit(): void {
    this.errorMsg = `The page ${this.router.url} doesn't exist`
  }
}
