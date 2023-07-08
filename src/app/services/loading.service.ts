import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loadCount=0;
  get isLoading(): boolean{
    return this.loadCount>0;
  }
  show():void{
    this.loadCount++;
  }
  hide():void{
    if(this.loadCount > 0){
      this.loadCount--;
    }
  }

  constructor() { }
}
