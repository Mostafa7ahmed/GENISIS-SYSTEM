import { Component } from '@angular/core';
import { UploadFiles } from "./components/upload-files/upload-files";
import { Chat } from "./components/chat/chat";
import { Todolist } from "./components/todolist/todolist";
import { Feedback } from "./components/feedback/feedback";

@Component({
  selector: 'app-project-details',
  imports: [UploadFiles, Chat, Todolist, Feedback],
  templateUrl: './project-details.html',
  styleUrl: './project-details.scss'
})
export class ProjectDetails {

}
