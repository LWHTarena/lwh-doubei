import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{

  constructor(private router: Router,
              private activatedRouter: ActivatedRoute,
              private titleService: Title){

  }


  ngOnInit(){
    /** 动态路由添加对应的页面title **/
    this.router.events
      .filter(event => event instanceof NavigationEnd )
      .map(() => this.activatedRouter)
      .map(route => {
        while (route.firstChild){
          route = route.firstChild;
        }
        return route;
      })
      .filter(route => route.outlet === 'primary')
      .mergeMap(route => route.data)
      .subscribe((event) => this.titleService.setTitle(event['title']));
  }

}
