import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OneUserInfoComponent } from './components/one-user-info/one-user-info.component';
import { UsersListComponent } from './components/users-list/users-list.component';

const routes: Routes = [
  {path: '', component: UsersListComponent},
  {path: 'user/:id', component:OneUserInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
