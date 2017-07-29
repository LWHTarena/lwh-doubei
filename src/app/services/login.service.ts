import { Injectable } from '@angular/core';
import {UtilService} from './util.service';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LoginService extends UtilService {

  constructor(http: Http) {
    super(http);
  }

  /**
   * login
   * @param body
   * @returns {Observable<any>}
   */
  login(body: any): Observable<any> {
    return super.basePost('&m=LoginSupplier&a=Login', body);
  }

  /**
   * 退出登录
   * @param body
   * @returns {Observable<any>}
   */
  logout(body: any): Observable<any> {
    return super.basePost('&m=UserSupplier&a=login_out', body);
  }


  /**
   * 发送验证码
   * @param body
   * @returns {Observable<any>}
   */
  sendSMSCode(body: any): Observable<any> {
    return super.basePost('&m=LoginSupplier&a=phone_code_send', body);
  }

  /**
   * 入驻提交申请
   * @param body
   * @returns {Observable<any>}
   */
  settleIn(body: any): Observable<any> {
    return super.basePost('&m=LoginSupplier&a=join_add', body);
  }
}
