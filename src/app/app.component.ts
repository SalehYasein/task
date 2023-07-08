import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingService } from './services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'salehTask';
LoadingService: any;
  constructor(public http: HttpClient,public loadingService: LoadingService){}
  getUsers():void {
    this.loadingService.show();
    this.http.get('https://reqres.in/api/users').subscribe( () => {
      this.loadingService.hide();
    },
    (error: any) =>{
      this.loadingService.hide();
    }
    );
  }

}
