import { Component } from '@angular/core';
import { Footer } from "../footer/footer";
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-mainlayout-non-nav',
  imports: [Footer, RouterOutlet, RouterLink],
  templateUrl: './mainlayout-non-nav.html',
  styleUrl: './mainlayout-non-nav.scss'
})
export class MainlayoutNonNav {

}
