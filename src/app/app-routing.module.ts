import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NoticeComponent } from './notice/notice.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'notice/:id',
    component: NoticeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
