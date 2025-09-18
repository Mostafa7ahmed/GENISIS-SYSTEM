import { Component } from '@angular/core';
import { Footer } from "../footer/footer";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-mainlayout-non-nav',
  imports: [Footer, RouterOutlet],
  templateUrl: './mainlayout-non-nav.html',
  styleUrl: './mainlayout-non-nav.scss'
})
export class MainlayoutNonNav {

}
