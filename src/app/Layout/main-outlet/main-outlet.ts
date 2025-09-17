import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "../navbar/navbar";
import { Footer } from "../footer/footer";

@Component({
  selector: 'app-main-outlet',
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './main-outlet.html',
  styleUrl: './main-outlet.scss'
})
export class MainOutlet {

}
