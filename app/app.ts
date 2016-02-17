import {Component, bind, bootstrap, ViewEncapsulation, NgFor, NgIf} from 'angular2/angular2';
import {
  RouteConfig,
  ROUTER_DIRECTIVES,
  ROUTER_BINDINGS,
  ROUTER_PRIMARY_COMPONENT
} from 'angular2/router';
import {HTTP_BINDINGS} from 'angular2/http';

import {Home} from './components/home/home';
import {About} from './components/about/about';
import {NameList} from './services/name_list';
import {Sign} from './components/sign/sign';
import {LogIn} from './components/login/login';
import {CarUpload} from './services/car_upload';
import {User} from './services/user';
@Component({
  selector: 'app',
  viewBindings: [NameList, CarUpload],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [ROUTER_DIRECTIVES, NgFor, NgIf]
})


@RouteConfig([
  { path: '/', redirectTo: '/home' },
  { path: '/home', component: Home, as: 'Home' },
  { path: '/about', component: About, as: 'About' },
  { path: '/login', component: LogIn, as: 'LogIn' },
  { path: '/sign', component: Sign, as: 'Sign'}
])

class App {
  constructor(public user: User) {
    user.get();
  }
}


bootstrap(App, [
  ROUTER_BINDINGS,
  bind(ROUTER_PRIMARY_COMPONENT).toValue(App),
  HTTP_BINDINGS,
  User
]);
