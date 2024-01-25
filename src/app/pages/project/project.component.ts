import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { faCode, faLeftLong, faLink } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  dataProjet=history.state.data;
  faLeft=faLeftLong;
  faLink=faLink
  faCode=faCode
constructor (private location: Location){

}
ngOnInit(){
}
backLastPage() {
  this.location.back(); // <-- go back to previous location on cancel
}
}
