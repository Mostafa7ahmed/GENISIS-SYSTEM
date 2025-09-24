import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-feedback-client',
  imports: [CommonModule],
  templateUrl: './feedback-client.html',
  styleUrl: './feedback-client.scss'
})
export class FeedbackClient {
  isOpen = false;
  selected = 'ALL CLIENTS';
  options = ['ALL CLIENTS', 'COMPLETED', 'IN PROGRESS', 'PAUSED'];

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  selectOption(option: string) {
    this.selected = option;
    this.isOpen = false;
  }
  feedbacks = [
    {
      logo: 'assets/img/half-logo.svg',
      title: 'ARBUN APP - BRAND IDENTITY',
      comment: `“The design was great maybe the quality of the presentation could be much better, thank you so much”`,
      date: '14, OCT 24',
      category: 'Brand Identity',
      rating: 'assets/img/4blue-star.png'
    },
    {
      logo: 'assets/img/half-logo.svg',
      title: 'GENESIS - UI/UX DESIGN',
      comment: `“Amazing experience, the UI looks stunning and very professional, will come back again.”`,
      date: '20, SEP 24',
      category: 'UI/UX Design',
      rating: 'assets/img/4blue-star.png'
    },
     {
      logo: 'assets/img/half-logo.svg',
      title: 'ARBUN APP - BRAND IDENTITY',
      comment: `“The design was great maybe the quality of the presentation could be much better, thank you so much”`,
      date: '14, OCT 24',
      category: 'Brand Identity',
      rating: 'assets/img/4blue-star.png'
    },
    {
      logo: 'assets/img/half-logo.svg',
      title: 'GENESIS - UI/UX DESIGN',
      comment: `“Amazing experience, the UI looks stunning and very professional, will come back again.”`,
      date: '20, SEP 24',
      category: 'UI/UX Design',
      rating: 'assets/img/4blue-star.png'
    },
     {
      logo: 'assets/img/half-logo.svg',
      title: 'ARBUN APP - BRAND IDENTITY',
      comment: `“The design was great maybe the quality of the presentation could be much better, thank you so much”`,
      date: '14, OCT 24',
      category: 'Brand Identity',
      rating: 'assets/img/4blue-star.png'
    },
    {
      logo: 'assets/img/half-logo.svg',
      title: 'GENESIS - UI/UX DESIGN',
      comment: `“Amazing experience, the UI looks stunning and very professional, will come back again.”`,
      date: '20, SEP 24',
      category: 'UI/UX Design',
      rating: 'assets/img/4blue-star.png'
    },
     {
      logo: 'assets/img/half-logo.svg',
      title: 'ARBUN APP - BRAND IDENTITY',
      comment: `“The design was great maybe the quality of the presentation could be much better, thank you so much”`,
      date: '14, OCT 24',
      category: 'Brand Identity',
      rating: 'assets/img/4blue-star.png'
    },
    {
      logo: 'assets/img/half-logo.svg',
      title: 'GENESIS - UI/UX DESIGN',
      comment: `“Amazing experience, the UI looks stunning and very professional, will come back again.”`,
      date: '20, SEP 24',
      category: 'UI/UX Design',
      rating: 'assets/img/4blue-star.png'
    },
     {
      logo: 'assets/img/half-logo.svg',
      title: 'ARBUN APP - BRAND IDENTITY',
      comment: `“The design was great maybe the quality of the presentation could be much better, thank you so much”`,
      date: '14, OCT 24',
      category: 'Brand Identity',
      rating: 'assets/img/4blue-star.png'
    },
    {
      logo: 'assets/img/half-logo.svg',
      title: 'GENESIS - UI/UX DESIGN',
      comment: `“Amazing experience, the UI looks stunning and very professional, will come back again.”`,
      date: '20, SEP 24',
      category: 'UI/UX Design',
      rating: 'assets/img/4blue-star.png'
    }
  ];
}
