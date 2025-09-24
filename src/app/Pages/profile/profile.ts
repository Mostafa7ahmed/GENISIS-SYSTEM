import { Component } from '@angular/core';
import { ProjectsProfile } from "./components/projects-profile/projects-profile";
import { FeedbackProfile } from "./components/feedback-profile/feedback-profile";

@Component({
  selector: 'app-profile',
  imports: [ProjectsProfile, FeedbackProfile],
  templateUrl: './profile.html',
  styleUrl: './profile.scss'
})
export class Profile {

}
