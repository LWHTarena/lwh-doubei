import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UtilService} from '../../services/util.service';
import {LoginService} from '../../services/login.service';
import {IndexRoutingModule} from './index-routing.module';
import {CollapseModule} from 'ngx-bootstrap';
import {IndexComponent} from '../../components/index/index.component';

@NgModule({
  imports: [
    CommonModule,
    IndexRoutingModule,
    CollapseModule.forRoot()
  ],
  declarations: [
    IndexComponent
  ],
  providers: [ UtilService , LoginService]
})
export class IndexModule { }
