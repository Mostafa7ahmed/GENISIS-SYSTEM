import { Component } from '@angular/core';
import { ProjectClient } from "./Components/project-client/project-client";
import { FeedbackClient } from "./Components/feedback-client/feedback-client";

@Component({
  selector: 'app-client-profile',
  imports: [ProjectClient, FeedbackClient],
  templateUrl: './client-profile.html',
  styleUrl: './client-profile.scss'
})
export class ClientProfile {

}
