import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetUserInfoService } from 'src/app/services/get-user-info.service';

@Component({
  selector: 'app-one-user-info',
  templateUrl: './one-user-info.component.html',
  styleUrls: ['./one-user-info.component.css']
})


export class OneUserInfoComponent implements OnInit {
user:any;
constructor(
  private route: ActivatedRoute,
  private router:Router,
private getUserService: GetUserInfoService
){}

ngOnInit(): void {

  const userId = this.route.snapshot.paramMap.get('id');
  if (userId) {
    const id = parseInt(userId, 10);
    this.getUserService.getInfoById(id).subscribe(response => {
      this.user = response.data;
    });
  }
}
goBack(): void {
  this.router.navigate(['/']);
}
}
