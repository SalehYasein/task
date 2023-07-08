import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetUserInfoService } from 'src/app/services/get-user-info.service';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users :any[]=[];
  searchQuery = '';

  constructor(private router:Router, private getUsersService:GetUserInfoService){}
ngOnInit(): void {
  this.getUsers(1);
}
getUsers(card: number): void {
  this.getUsersService.getAllUsers(card).subscribe(response => {
    this.users = response.data;
  });
}
moveToUserInfo(id: number): void {
  this.router.navigate(['user',id]);
}
search(): void{
if(this.searchQuery.trim() !==''){
  const id = parseInt(this.searchQuery);
  if(id<=6)
  this.router.navigate(['user',id]);
  else
  alert('ID should be 6 or less')
  }
}
}
