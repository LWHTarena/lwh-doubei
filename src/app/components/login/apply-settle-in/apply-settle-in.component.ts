import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap';

/************
 * 入驻申请组件
 ************/

@Component({
  selector: 'app-apply-settle-in',
  templateUrl: './apply-settle-in.component.html',
  styleUrls: ['./apply-settle-in.component.sass']
})
export class ApplySettleInComponent implements OnInit {

  @ViewChild('applyModal')
  public applyModal: ModalDirective;

  constructor() { }

  ngOnInit() {
  }

}
