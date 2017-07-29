import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found.component';

export const routes: Routes = [
  {path:  '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'index', loadChildren: 'app/modules/index/index.module#IndexModule'},
  {path: 'login', loadChildren: 'app/modules/login/login.module#LoginModule'},
  {path: '**', component: PageNotFoundComponent, data: {title: '404'}}
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
