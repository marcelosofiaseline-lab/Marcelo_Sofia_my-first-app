import { Component } from '@angular/core';
import { ProfileCard } from './profile-card/profile-card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProfileCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  fullName = 'Marcelo, Sofia Seline S.';
  location = 'Angeles City, Tabun';
  email = 'marcelosofiaseline@gmail.com';
  phone = '0991 216 7563';

  profile = 'I love Web Development!';

  skills = [
    'HTML and CSS',
    'JavaScript',
    'Multi-Media',
    'Figma Design',
    'Video Editing',
    'Graphic Design',
    'Content Creation',
    'FreeLance Artist'
  ];

  message = 'Hello! Click the Button!';
  clickCount = 0;

  showMessage() {
    this.clickCount++;
    this.message = `You clicked the button ${this.clickCount} time(s).`;
  }
}
