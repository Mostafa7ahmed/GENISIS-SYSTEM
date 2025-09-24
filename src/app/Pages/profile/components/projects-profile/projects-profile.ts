import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects-profile',
  imports: [CommonModule, RouterLink],
  templateUrl: './projects-profile.html',
  styleUrl: './projects-profile.scss'
})
export class ProjectsProfile {
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

  projects = [
  {
    id: 1,
    title: 'SOCIAL MEDIA POSTS',
    companyLogo: 'assets/img/gafla.svg',
    companyName: 'GAFLA',
    companyType: 'Jewelry Brand',
    description: `The design was great maybe the quality of the presentation 
    could be much better, thank you so much`,
    status: 'Paused',
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
    status: 'Paused',
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
    status: 'Paused',
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
