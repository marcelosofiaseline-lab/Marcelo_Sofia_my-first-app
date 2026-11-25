import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-profile-card',
  styleUrl: './profile-card.css',
  templateUrl: './profile-card.html',
})
export class ProfileCard {
  cardTitle = 'A Little About Me';
  description = 'I am a 3rd Year Web Developer in Holy Angel University, You can call me Seline! I try to learn new things to be able to extend my knowledge in Web Development.';
}
