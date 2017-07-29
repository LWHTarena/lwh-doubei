import { Injectable } from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {FormGroup} from '@angular/forms';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class UtilService {

  static API_HOST = 'http://114.55.89.35/TPtest/index.php?g=Supplier';
  static CONTENT_TYPE = 'application/json';

  constructor(public http: Http) {

  }

  /***
   * 提取数据
   **/
  private extractData(res: Response) {
    const body = res.json();
    if (body['status'] === 0) {
      return body['data'];
    }

    if (body['status'] === '1') {
      throw new Error(body['error']);
    } else if (body['status'] === 1) {
      throw new Error(body['error']);
    } else if (body['status'] === 10001) {
      throw new Error(body['error']);
    } else if (body['status'] === 10002) {
      throw new Error(body['error']);
    } else {
      throw new Error(body['error'] || '未知错误');
    }
  }

  /**
   * Error handler
   * @param error
   * @returns {any}
   */
  private handleError(error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body['error'] || JSON.stringify(body);
      errMsg = `${error['status']} - ${error['statusText'] || ''} ${err}`;
    } else {
      errMsg = error['message'] ? error['message'] : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  /**
   * 抽象出的基本post方法
   * @param postUrl
   * @param body
   * @returns {Observable<R|T>}
   */
  public basePost(postUrl: string, body?: any): Observable<any> {

    const headers = new Headers({'Content-Type': UtilService.CONTENT_TYPE});
    const options = new RequestOptions({headers: headers});

    if (!body) {
      body = null;
    }

    return this.http.post(UtilService.API_HOST + postUrl, body, options)
      .map(res => {
        return this.extractData(res);
      })
      .catch(error => {
        return this.handleError(error);
      });
  }


  /**
   * 自定义表单验证
   * @param form form表单
   * @param formErrors 有哪些可能的Errors要被枚举
   * @param validationMessages 有哪些Errors对应的信息要被传递
   * @param data
   */
  public onValueChanged(form: FormGroup, formErrors: any, validationMessages: any, data?: any): void {
    if (!form) {
      return;
    }
    for (const field in formErrors) {
      if (formErrors.hasOwnProperty(field)) {
        formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = validationMessages[field];
          for (const key in control.errors) {
            formErrors[field] += `${messages[key]}`;
            break;
          }
        }
      }
    }
  }
}
