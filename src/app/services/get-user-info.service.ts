import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, Observer,of } from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetUserInfoService {
  private apiUrl = "https://reqres.in/api/users";
  private userCache: { [id: number]: any}={};

  constructor(private http: HttpClient) { }
  getAllUsers(card: number): Observable<any> {
    const url=`${this.apiUrl}?card=${card}`;
    return this.http.get(url);
  }

  getInfoById(id: number): Observable<any> {
    if(this.userCache[id]) {
      return of(this.userCache[id]);
    }
    else
    {
      const url=`${this.apiUrl}/${id}`;
      return this.http.get(url).pipe(
        tap(user => {
          this.userCache[id] = user;
        })
      );
    }
  }
}
