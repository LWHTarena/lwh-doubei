import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {LoginRoutingModule} from './login-routing.module';
import {ModalModule} from 'ngx-bootstrap';
import {LoginComponent} from '../../components/login/login.component';
import {ApplySettleInComponent} from '../../components/login/apply-settle-in/apply-settle-in.component';
import {CountDownPipe} from '../../pipes/count-down.pipe';
import {ForgetPassComponent} from '../../components/login/forget-pass/forget-pass.component';
import {UtilService} from '../../services/util.service';
import {LoginService} from '../../services/login.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LoginRoutingModule,
    ModalModule.forRoot()
  ],
  declarations: [
    LoginComponent,
    ApplySettleInComponent,
    CountDownPipe,
    ForgetPassComponent
  ],
  providers: [ UtilService, LoginService ]
})
export class LoginModule { }
