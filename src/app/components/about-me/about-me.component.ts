import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: [
    './about-me.component.scss',
    '../qualifications/qualifications.component.scss',
  ],
})
export class AboutMeComponent {
  yearsOfExperience: number;

  constructor() {
    const startDate = new Date(2022, 4, 1); // Mois = 4 → mai (car 0 = janvier)
    const now = new Date();
    const diffInMs = now.getTime() - startDate.getTime();
    const diffInYears = diffInMs / (1000 * 60 * 60 * 24 * 365.25);
    this.yearsOfExperience = Math.floor(diffInYears);
  }
}
