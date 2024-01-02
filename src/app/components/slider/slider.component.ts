import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})

export class SliderComponent implements OnInit {
  jsonData: any; 

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    const currentLanguage = localStorage.getItem('lang') || 'en';
    const jsonFilePath = `assets/i18n/${currentLanguage}.json`;

    this.httpClient.get(jsonFilePath).subscribe(
      (data: any) => {
        this.jsonData = data?.slider;
       
      },
      error => {
        console.error(`Error loading ${currentLanguage}.json:`, error);
      }
    );
  }

  onChange(language: string) {
    localStorage.setItem('lang', language);
    this.ngOnInit();
  }
}
