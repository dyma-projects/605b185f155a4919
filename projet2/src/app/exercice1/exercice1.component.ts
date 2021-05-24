import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-exercice1",
  templateUrl: "./exercice1.component.html",
  styleUrls: ["./exercice1.component.css"],
})
export class Exercice1Component implements OnInit {
  public liaison1: string = "une interpolation";
  private isClicked: boolean = false;
  public couleur: string = "yellow";
  public buttonLabel: string = "Cliquez ici";

  constructor() {}

  ngOnInit(): void {}

  public changeButton(): void {
    if (this.isClicked) {
      this.couleur = "green";
      this.buttonLabel = "Je suis true";
    } else {
      this.couleur = "red";
      this.buttonLabel = "Je suis false";
    }
    this.isClicked = !this.isClicked;
  }

  public defaultButton() {
    this.couleur = "yellow";
    this.buttonLabel = "Cliquez ici";
  }
}
