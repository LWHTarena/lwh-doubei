import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Login} from '../../model/login';
import {Router} from '@angular/router';
import {LoginService} from '../../services/login.service';
import {ApplySettleInComponent} from './apply-settle-in/apply-settle-in.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  @ViewChild(ApplySettleInComponent)
  applyComponent: ApplySettleInComponent;

  loginForm: FormGroup;
  login = new Login();
  submitted = false;
  formErrors = {};
  validationMessages = {};
  baseUrl = 'http://114.55.89.35/TPtest/index.php';
  imageCheckCode = '';

  constructor(private fb: FormBuilder,
              private router: Router,
              private loginService: LoginService) {
    this.imageCheckCode = `${this.baseUrl}?g=Api&m=Checkcode&a=index&
    code_len=4&use_noise=1&%24use_curve=0&font_size=15&width=100&height=35&
    charset=1234567890&time=${Math.random()}`;

    this.formErrors = {
      'supplier_user_name': '',
      'supplier_user_password': '',
      'verify': ''
    }

    this.validationMessages = {
      'supplier_user_name': {
        'required': '请输入用户名',
        'minlength': '用户名必须多于6个字符',
        'maxlength': '用户名必须少于20个字符',
        'forbidden': '用户名不能有空格'
      },
      'supplier_user_password': {
        'required': '请输入密码',
        'minlength': '密码必须多于6个字符',
        'maxlength': '密码必须少于20个字符'
      },
      'verify': {
        'required': '请输入验证码',
        'minlength': '验证码为4位字符',
        'maxlength': '验证码为4位字符'
      },
    };
  }

  onSubmit() {
    this.submitted = true;
    this.login = this.loginForm.value;
    this.loginService.login(this.login)
      .subscribe(data => {
        this.router.navigate(['index/course/courseManage']);
      },
        error => {
        console.log(error)
        })
  }

  ngOnInit() {
    this.buildForm();
  }

  public showApplyModal(): void {
    this.applyComponent.applyModal.show();
  }

  private buildForm(): void {
      this.loginForm = this.fb.group({
        'supplier_user_name': [this.login.supplier_user_name, [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20),
          this.forbiddenCharValidator(/ /i, 'forbidden')
        ]],
        'supplier_user_password': [this.login.supplier_user_passwprd, [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20)
        ]],
        'verify': [this.login.verify, [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(4)
        ]]
      })

      this.loginForm.valueChanges
        .subscribe(data => this.loginService.onValueChanged(
          this.loginForm, this.formErrors, this.validationMessages, data));

      this.loginService.onValueChanged(this.loginForm,  this.formErrors, this.validationMessages);
  }

  private forbiddenCharValidator(regExp: RegExp, s: string) {

  }

  refreshCode(): void {
    this.imageCheckCode = `${this.baseUrl}?g=Api&m=Checkcode&a=index&
    code_len=4&use_noise=1&%24use_curve=0&font_size=15&width=100&height=35&
    charset=1234567890&time=${Math.random()}`;
  }
}
