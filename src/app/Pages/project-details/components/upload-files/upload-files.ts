import { CommonModule } from '@angular/common';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { ShortenPipe } from '../../../../Shared/pipes/shorten-pipe';

@Component({
  selector: 'app-upload-files',
  imports: [CommonModule , ShortenPipe],
  templateUrl: './upload-files.html',
  styleUrl: './upload-files.scss'
})
export class UploadFiles {
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  // الصور القديمة
  assignedTo: string[] = [
    'assets/img/logo-2.svg',
    'assets/img/logo-2.svg',
    'assets/img/logo-3.svg'
  ];

  // فتح input
  onUploadClick() {
    this.fileInput.nativeElement.click();
  }

  files: { name: string; size: string; type: string }[] = [];

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      Array.from(input.files).forEach(file => {
        this.files.push({
          name: file.name,
          size: (file.size / (1024 * 1024)).toFixed(1) + 'MB',
          type: file.type
        });
      });
    }
  }
}

