import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotificationComponent } from './notification/notification.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'home'
  // },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'notification',
    component: NotificationComponent
  },
  // {
  //   path: '**',
  //   component: HomeComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
