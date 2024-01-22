import { Component } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss'
})
export class BlogsComponent {
  lang:string | null="";
  ngOnInit(){
    this.lang=localStorage.getItem("lang")
    
  }
}
