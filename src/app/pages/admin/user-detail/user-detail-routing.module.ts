import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {UserDetailPage} from './user-detail.page';

const routes: Routes = [
  {
    path: '',
    component: UserDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserDetailPageRoutingModule {
}