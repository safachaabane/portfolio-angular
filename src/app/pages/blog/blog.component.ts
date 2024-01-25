import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {
  dataBlog=history.state.data;
  faLeft=faLeftLong
  constructor (private location: Location){

  }
  backLastPage() {
    this.location.back(); 
  }

}
