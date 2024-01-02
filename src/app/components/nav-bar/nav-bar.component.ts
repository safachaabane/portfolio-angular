import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  jsonData: any; 

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    const currentLanguage = localStorage.getItem('lang') || 'en';
    const jsonFilePath = `assets/i18n/${currentLanguage}.json`;

    this.httpClient.get(jsonFilePath).subscribe(
      (data: any) => {
        this.jsonData = data?.menu;
       
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
