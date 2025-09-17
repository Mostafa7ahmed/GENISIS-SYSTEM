import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  cards = signal([
    {
      name: "Youssef Elazaly",
      job: "Senior Graphic Designer",
      date: "4TH, OCT",
      tagImg: "assets/img/Group 289 (2).png",
      profileImg: "assets/img/EDITED 8 1.svg",
      talent: "Rising Talent",
      percent: "87%",
      route: "/profile/1"
    },
    {
      name: "Mostafa Ahmed",
      job: "Frontend Developer",
      date: "10TH, OCT",
      tagImg: "assets/img/Group 289 (2).png",
      profileImg: "assets/img/EDITED 8 1.svg",
      talent: "Top Rated",
      percent: "92%",
      route: "/profile/2"
    },
    {
      name: "Sara Mohamed",
      job: "UI/UX Designer",
      date: "15TH, OCT",
      tagImg: "assets/img/Group 289 (2).png",
      profileImg: "assets/img/EDITED 8 1.svg",
      talent: "Rising Talent",
      percent: "81%",
      route: "/profile/3"
    },
     {
      name: "Youssef Elazaly",
      job: "Senior Graphic Designer",
      date: "4TH, OCT",
      tagImg: "assets/img/Group 289 (2).png",
      profileImg: "assets/img/EDITED 8 1.svg",
      talent: "Rising Talent",
      percent: "87%",
      route: "/profile/1"
    },
    {
      name: "Mostafa Ahmed",
      job: "Frontend Developer",
      date: "10TH, OCT",
      tagImg: "assets/img/Group 289 (2).png",
      profileImg: "assets/img/EDITED 8 1.svg",
      talent: "Top Rated",
      percent: "92%",
      route: "/profile/2"
    },
    {
      name: "Sara Mohamed",
      job: "UI/UX Designer",
      date: "15TH, OCT",
      tagImg: "assets/img/Group 289 (2).png",
      profileImg: "assets/img/EDITED 8 1.svg",
      talent: "Rising Talent",
      percent: "81%",
      route: "/profile/3"
    },
     {
      name: "Youssef Elazaly",
      job: "Senior Graphic Designer",
      date: "4TH, OCT",
      tagImg: "assets/img/Group 289 (2).png",
      profileImg: "assets/img/EDITED 8 1.svg",
      talent: "Rising Talent",
      percent: "87%",
      route: "/profile/1"
    },
    {
      name: "Mostafa Ahmed",
      job: "Frontend Developer",
      date: "10TH, OCT",
      tagImg: "assets/img/Group 289 (2).png",
      profileImg: "assets/img/EDITED 8 1.svg",
      talent: "Top Rated",
      percent: "92%",
      route: "/profile/2"
    },
    {
      name: "Sara Mohamed",
      job: "UI/UX Designer",
      date: "15TH, OCT",
      tagImg: "assets/img/Group 289 (2).png",
      profileImg: "assets/img/EDITED 8 1.svg",
      talent: "Rising Talent",
      percent: "81%",
      route: "/profile/3"
    },
     {
      name: "Youssef Elazaly",
      job: "Senior Graphic Designer",
      date: "4TH, OCT",
      tagImg: "assets/img/Group 289 (2).png",
      profileImg: "assets/img/EDITED 8 1.svg",
      talent: "Rising Talent",
      percent: "87%",
      route: "/profile/1"
    },
    {
      name: "Mostafa Ahmed",
      job: "Frontend Developer",
      date: "10TH, OCT",
      tagImg: "assets/img/Group 289 (2).png",
      profileImg: "assets/img/EDITED 8 1.svg",
      talent: "Top Rated",
      percent: "92%",
      route: "/profile/2"
    },
    {
      name: "Sara Mohamed",
      job: "UI/UX Designer",
      date: "15TH, OCT",
      tagImg: "assets/img/Group 289 (2).png",
      profileImg: "assets/img/EDITED 8 1.svg",
      talent: "Rising Talent",
      percent: "81%",
      route: "/profile/3"
    },
     {
      name: "Youssef Elazaly",
      job: "Senior Graphic Designer",
      date: "4TH, OCT",
      tagImg: "assets/img/Group 289 (2).png",
      profileImg: "assets/img/EDITED 8 1.svg",
      talent: "Rising Talent",
      percent: "87%",
      route: "/profile/1"
    },
    {
      name: "Mostafa Ahmed",
      job: "Frontend Developer",
      date: "10TH, OCT",
      tagImg: "assets/img/Group 289 (2).png",
      profileImg: "assets/img/EDITED 8 1.svg",
      talent: "Top Rated",
      percent: "92%",
      route: "/profile/2"
    },
    {
      name: "Sara Mohamed",
      job: "UI/UX Designer",
      date: "15TH, OCT",
      tagImg: "assets/img/Group 289 (2).png",
      profileImg: "assets/img/EDITED 8 1.svg",
      talent: "Rising Talent",
      percent: "81%",
      route: "/profile/3"
    },
     {
      name: "Youssef Elazaly",
      job: "Senior Graphic Designer",
      date: "4TH, OCT",
      tagImg: "assets/img/Group 289 (2).png",
      profileImg: "assets/img/EDITED 8 1.svg",
      talent: "Rising Talent",
      percent: "87%",
      route: "/profile/1"
    },
    {
      name: "Mostafa Ahmed",
      job: "Frontend Developer",
      date: "10TH, OCT",
      tagImg: "assets/img/Group 289 (2).png",
      profileImg: "assets/img/EDITED 8 1.svg",
      talent: "Top Rated",
      percent: "92%",
      route: "/profile/2"
    },
    {
      name: "Sara Mohamed",
      job: "UI/UX Designer",
      date: "15TH, OCT",
      tagImg: "assets/img/Group 289 (2).png",
      profileImg: "assets/img/EDITED 8 1.svg",
      talent: "Rising Talent",
      percent: "81%",
      route: "/profile/3"
    },
     {
      name: "Youssef Elazaly",
      job: "Senior Graphic Designer",
      date: "4TH, OCT",
      tagImg: "assets/img/Group 289 (2).png",
      profileImg: "assets/img/EDITED 8 1.svg",
      talent: "Rising Talent",
      percent: "87%",
      route: "/profile/1"
    },
    {
      name: "Mostafa Ahmed",
      job: "Frontend Developer",
      date: "10TH, OCT",
      tagImg: "assets/img/Group 289 (2).png",
      profileImg: "assets/img/EDITED 8 1.svg",
      talent: "Top Rated",
      percent: "92%",
      route: "/profile/2"
    },
    {
      name: "Sara Mohamed",
      job: "UI/UX Designer",
      date: "15TH, OCT",
      tagImg: "assets/img/Group 289 (2).png",
      profileImg: "assets/img/EDITED 8 1.svg",
      talent: "Rising Talent",
      percent: "81%",
      route: "/profile/3"
    },
  ]);
}
