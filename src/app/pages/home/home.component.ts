import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  jsonData: any; // Assuming this will hold the loaded JSON data

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    const currentLanguage = localStorage.getItem('lang') || 'en';
    const jsonFilePath = `assets/i18n/${currentLanguage}.json`;

    this.httpClient.get(jsonFilePath).subscribe(
      (data: any) => {
        // Assuming you want to store the loaded JSON data in a variable
        this.jsonData = data?.menu;
        console.log(this.jsonData)
      },
      error => {
        console.error(`Error loading ${currentLanguage}.json:`, error);
      }
    );
  }
}
