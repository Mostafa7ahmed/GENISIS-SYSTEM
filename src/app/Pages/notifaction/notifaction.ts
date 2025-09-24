import { Component } from '@angular/core';

@Component({
  selector: 'app-notifaction',
  imports: [],
  templateUrl: './notifaction.html',
  styleUrl: './notifaction.scss'
})
export class Notifaction {


    isOpen = false;
  selected = 'ALL NOTIFICATIONS';
  options = ['ALL NOTIFICATIONS', 'COMPLETED', 'IN PROGRESS', 'IN PROGRESS'];

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  selectOption(option: string) {
    this.selected = option;
    this.isOpen = false;
  }
  notifications = [
    {
      message: 'You have unseen message from Client Gafla',
      date: '14, OCT 24',
      time: '6:00 AM'
    },
    {
      message: 'You have unseen message from Project Social Media Posts for Gafla',
      date: '14, OCT 24',
      time: '6:00 AM'
    },
    {
      message: 'Ahmed Mohamed have achieved a new Title ( Rising Talent )',
      date: '14, OCT 24',
      time: '6:00 AM'
    },
    {
      message: 'Kareem had Bonus of 2,000 EGP',
      date: '14, OCT 24',
      time: '6:00 AM'
    },
    {
      message: 'Project Arbun Branding Feedback Added',
      date: '14, OCT 24',
      time: '6:00 AM'
    },
    {
      message: 'Project Arbun Branding Feedback Added',
      date: '14, OCT 24',
      time: '6:00 AM'
    },
    {
      message: 'Project Arbun Branding Feedback Added',
      date: '14, OCT 24',
      time: '6:00 AM'
    }
  ];
}
