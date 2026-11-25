import { Component } from '@angular/core';
import { Header } from '../header/header';
import { ProfileCard } from '../profile-card/profile-card';
import { Skills } from '../skills/skills';
import { Footer } from '../footer/footer';
import { Proficiency } from '../proficiency';

@Component({
  selector: 'app-home',
  imports: [Header, ProfileCard, Skills, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  // The Home page owns all CV data and passes it down to the children.
  fullName = 'Marcelo, Sofia Seline S.';
  location = 'Angeles City, Tabun';
  email = 'marcelosofiaseline@gmail.com';
  phone = '09912167563';

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

  proficiencies: Proficiency[] = [
    { tool: 'Visual Studio Code', level: 'Advanced' },
    { tool: 'Git and GitHub', level: 'Intermediate' },
    { tool: 'Node.js and npm', level: 'Intermediate' },
    { tool: 'Angular CLI', level: 'Beginner' },
    { tool: 'Figma', level: 'Intermediate' }
  ];

  message = 'Click any of the skills!';

  // Runs when the Skills component emits a skillSelected event.
  onSkillSelected(skill: string) {
    this.message = `You selected: ${skill}`;
  }
}