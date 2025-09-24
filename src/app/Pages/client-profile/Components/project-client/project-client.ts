import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project-client',
  imports: [CommonModule , RouterLink],
  templateUrl: './project-client.html',
  styleUrl: './project-client.scss'
})
export class ProjectClient {
  isOpen = false;
  selected = 'ALL PROJECTS';
  options = ['ALL PROJECTS', 'COMPLETED', 'IN PROGRESS', 'IN PROGRESS'];

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  selectOption(option: string) {
    this.selected = option;
    this.isOpen = false;
  }

  projects = [
  {
    id: 1,
    title: 'SOCIAL MEDIA POSTS',
    companyType: 'Jewelry Brand',
    description: `The design was great maybe the quality of the presentation could be much better, thank
you so much, “The design was great maybe the quality of the presentation could be
much better, thank you so much, The design was great maybe the quality of the
presentation could be much better, thank you so much`,
    status: 'IN PROGRESS',
    statusColor: '#0B6B6E',
    assignedTo: [
      'assets/img/profile.svg',
      'assets/img/profile.svg',
      'assets/img/profile.svg',
    ],
    assignedDate: '14, OCT 24',
    dueDate: '15 NOV'
  },
  {
    id: 2,
    title: 'SOCIAL MEDIA POSTS',
    companyLogo: 'assets/img/gafla.svg',
    companyName: 'GAFLA',
    companyType: 'Jewelry Brand',
    description: `The design was great maybe the quality of the presentation 
    could be much better, thank you so much`,
    status: 'IN PROGRESS',
    statusColor: '#0B6B6E',
    assignedTo: [
      'assets/img/profile.svg',
      'assets/img/profile.svg',
      'assets/img/profile.svg',
    ],
    assignedDate: '14, OCT 24',
    dueDate: '15 NOV'
  },
  {
    id: 3,
    title: 'SOCIAL MEDIA POSTS',
    companyLogo: 'assets/img/gafla.svg',
    companyName: 'GAFLA',
    companyType: 'Jewelry Brand',
    description: `The design was great maybe the quality of the presentation 
    could be much better, thank you so much`,
    status: 'IN PROGRESS',
    statusColor: '#0B6B6E',
    assignedTo: [
      'assets/img/profile.svg',
      'assets/img/profile.svg',
      'assets/img/profile.svg',
    ],
    assignedDate: '14, OCT 24',
    dueDate: '15 NOV'
  }
];
}
