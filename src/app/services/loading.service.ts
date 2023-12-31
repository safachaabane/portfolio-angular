import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  loading:boolean=false;
  constructor() { }
  showLoading(){
  this.loading=true;
  }
  hideLoading(){
  this.loading=false;
  }
}
