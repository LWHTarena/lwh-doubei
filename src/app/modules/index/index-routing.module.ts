import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from '../../components/index/index.component';

const routes: Routes = [
  {path: '', component: IndexComponent, data: {title: 'index'},
    children: [
      {path: 'course', loadChildren: 'app/modules/course/course.module#CourseModule'},
      {path: 'settings', loadChildren: 'app/modules/settings/settings.module#SettingsModule'}
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    RouterModule
  ]
})
export class IndexRoutingModule { }
