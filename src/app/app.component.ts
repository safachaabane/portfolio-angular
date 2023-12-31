import { Component } from '@angular/core';
import { LoadingService } from './services/loading.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'portfolio-angular';
  loading:boolean=false;
  constructor(private loadingService:LoadingService) {
    //  this.translateService.get("name").subscribe({
    //   next: (res)=>{ console.log(res);
    //   },
    // })  
  }
  ngOnInit()
  {
    this.loading=this.loadingService.loading;

  }
}