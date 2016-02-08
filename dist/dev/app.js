var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var http_1 = require('angular2/http');
var home_1 = require('./components/home/home');
var about_1 = require('./components/about/about');
var name_list_1 = require('./services/name_list');
var users_1 = require('./components/users/users');
var sign_1 = require('./components/sign/sign');
var login_1 = require('./components/login/login');
var user_service_1 = require('./components/users/services/user_service');
var user_1 = require('./services/user');
var App = (function () {
    function App(user) {
        this.user = user;
    }
    App = __decorate([
        angular2_1.Component({
            selector: 'app',
            viewBindings: [name_list_1.NameList, user_service_1.UserService, user_1.User],
            template: "\n    <div class=\"body\">\n    \t<section class=\"sample-app-content\">\n    \t  <nav>\n    \t    <a [router-link]=\"['/Home']\">Home</a>\n    \t    <a [router-link]=\"['/About']\">About</a>\n    \t    <a [router-link]=\"['/Sign']\">Sign</a>\n    \t    <a [router-link]=\"['/LogIn']\" >LogIn</a>\n    \t    {{!user.currUser[email]\n    \t    <a [router-link]=\"['/Users', 'Users-home']\">Users</a>\n    \t  </nav>\n    \t  <router-outlet></router-outlet>\n    \t</section>\n    </div>\n  ",
            styles: ["\n    .sample-app-content {\n      font-family: Verdana;\n    }\n    .sample-app-content h1 {\n      color: #999;\n      font-size: 3em;\n    }\n    .sample-app-content h2 {\n      color: #990000;\n      font-size: 2em;\n    }\n    .sample-app-content p,\n    .sample-app-content nav {\n      padding: 30px;\n    }\n    .sample-app-content li,\n    .sample-app-content p {\n      font-size: 1.2em;\n    }\n    .sample-app-content li {\n      font-family: Consolas;\n    }\n    .sample-app-content nav a {\n      display: inline-block;\n      margin-right: 15px;\n    }\n    .sample-app-content input,\n    .sample-app-content button {\n      padding: 5px;\n      font-size: 1em;\n      outline: none;\n    }\n\n    .top-bar {\n      display: flex;\n    }\n\n    .flex-fill {\n      flex: 1;\n    }\n\n    .flex-rows {\n      flex-direction: column;\n    }\n  "],
            encapsulation: angular2_1.ViewEncapsulation.None,
            directives: [router_1.ROUTER_DIRECTIVES, angular2_1.NgFor, angular2_1.NgIf]
        }),
        router_1.RouteConfig([
            { path: '/', redirectTo: '/home' },
            { path: '/home', component: home_1.Home, as: 'Home' },
            { path: '/about', component: about_1.About, as: 'About' },
            { path: '/login', component: login_1.LogIn, as: 'LogIn' },
            { path: '/sign', component: sign_1.Sign, as: 'Sign' },
            { path: '/users/...', component: users_1.Users, as: 'Users' }
        ]), 
        __metadata('design:paramtypes', [user_1.User])
    ], App);
    return App;
})();
angular2_1.bootstrap(App, [
    router_1.ROUTER_BINDINGS,
    angular2_1.bind(router_1.ROUTER_PRIMARY_COMPONENT).toValue(App),
    http_1.HTTP_BINDINGS,
    user_1.User
]);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6WyJBcHAiLCJBcHAuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEseUJBQXlFLG1CQUFtQixDQUFDLENBQUE7QUFDN0YsdUJBS08saUJBQWlCLENBQUMsQ0FBQTtBQUN6QixxQkFBNEIsZUFBZSxDQUFDLENBQUE7QUFFNUMscUJBQW1CLHdCQUF3QixDQUFDLENBQUE7QUFDNUMsc0JBQW9CLDBCQUEwQixDQUFDLENBQUE7QUFDL0MsMEJBQXVCLHNCQUFzQixDQUFDLENBQUE7QUFDOUMsc0JBQW9CLDBCQUEwQixDQUFDLENBQUE7QUFDL0MscUJBQW1CLHdCQUF3QixDQUFDLENBQUE7QUFDNUMsc0JBQW9CLDBCQUEwQixDQUFDLENBQUE7QUFDL0MsNkJBQTBCLDBDQUEwQyxDQUFDLENBQUE7QUFFckUscUJBQW1CLGlCQUFpQixDQUFDLENBQUE7QUFDckM7SUFnRkVBLGFBQW1CQSxJQUFVQTtRQUFWQyxTQUFJQSxHQUFKQSxJQUFJQSxDQUFNQTtJQUM3QkEsQ0FBQ0E7SUFqRkhEO1FBQUNBLG9CQUFTQSxDQUFDQTtZQUNUQSxRQUFRQSxFQUFFQSxLQUFLQTtZQUNmQSxZQUFZQSxFQUFFQSxDQUFDQSxvQkFBUUEsRUFBRUEsMEJBQVdBLEVBQUVBLFdBQUlBLENBQUNBO1lBQzNDQSxRQUFRQSxFQUFFQSwyZUFjVEE7WUFDREEsTUFBTUEsRUFBRUEsQ0FBQ0EsNjFCQTZDUkEsQ0FBQ0E7WUFDRkEsYUFBYUEsRUFBRUEsNEJBQWlCQSxDQUFDQSxJQUFJQTtZQUNyQ0EsVUFBVUEsRUFBRUEsQ0FBQ0EsMEJBQWlCQSxFQUFFQSxnQkFBS0EsRUFBRUEsZUFBSUEsQ0FBQ0E7U0FDN0NBLENBQUNBO1FBR0RBLG9CQUFXQSxDQUFDQTtZQUNYQSxFQUFFQSxJQUFJQSxFQUFFQSxHQUFHQSxFQUFFQSxVQUFVQSxFQUFFQSxPQUFPQSxFQUFFQTtZQUNsQ0EsRUFBRUEsSUFBSUEsRUFBRUEsT0FBT0EsRUFBRUEsU0FBU0EsRUFBRUEsV0FBSUEsRUFBRUEsRUFBRUEsRUFBRUEsTUFBTUEsRUFBRUE7WUFDOUNBLEVBQUVBLElBQUlBLEVBQUVBLFFBQVFBLEVBQUVBLFNBQVNBLEVBQUVBLGFBQUtBLEVBQUVBLEVBQUVBLEVBQUVBLE9BQU9BLEVBQUVBO1lBQ2pEQSxFQUFFQSxJQUFJQSxFQUFFQSxRQUFRQSxFQUFFQSxTQUFTQSxFQUFFQSxhQUFLQSxFQUFFQSxFQUFFQSxFQUFFQSxPQUFPQSxFQUFFQTtZQUNqREEsRUFBRUEsSUFBSUEsRUFBRUEsT0FBT0EsRUFBRUEsU0FBU0EsRUFBRUEsV0FBSUEsRUFBRUEsRUFBRUEsRUFBRUEsTUFBTUEsRUFBQ0E7WUFDN0NBLEVBQUVBLElBQUlBLEVBQUVBLFlBQVlBLEVBQUVBLFNBQVNBLEVBQUVBLGFBQUtBLEVBQUVBLEVBQUVBLEVBQUVBLE9BQU9BLEVBQUVBO1NBQ3REQSxDQUFDQTs7WUFNREE7SUFBREEsVUFBQ0E7QUFBREEsQ0FsRkEsQUFrRkNBLElBQUE7QUFHRCxvQkFBUyxDQUFDLEdBQUcsRUFBRTtJQUNiLHdCQUFlO0lBQ2YsZUFBSSxDQUFDLGlDQUF3QixDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztJQUMzQyxvQkFBYTtJQUNiLFdBQUk7Q0FDTCxDQUFDLENBQUMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIGJpbmQsIGJvb3RzdHJhcCwgVmlld0VuY2Fwc3VsYXRpb24sIE5nRm9yLCBOZ0lmfSBmcm9tICdhbmd1bGFyMi9hbmd1bGFyMic7XG5pbXBvcnQge1xuICBSb3V0ZUNvbmZpZyxcbiAgUk9VVEVSX0RJUkVDVElWRVMsXG4gIFJPVVRFUl9CSU5ESU5HUyxcbiAgUk9VVEVSX1BSSU1BUllfQ09NUE9ORU5UXG59IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge0hUVFBfQklORElOR1N9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuXG5pbXBvcnQge0hvbWV9IGZyb20gJy4vY29tcG9uZW50cy9ob21lL2hvbWUnO1xuaW1wb3J0IHtBYm91dH0gZnJvbSAnLi9jb21wb25lbnRzL2Fib3V0L2Fib3V0JztcbmltcG9ydCB7TmFtZUxpc3R9IGZyb20gJy4vc2VydmljZXMvbmFtZV9saXN0JztcbmltcG9ydCB7VXNlcnN9IGZyb20gJy4vY29tcG9uZW50cy91c2Vycy91c2Vycyc7XG5pbXBvcnQge1NpZ259IGZyb20gJy4vY29tcG9uZW50cy9zaWduL3NpZ24nO1xuaW1wb3J0IHtMb2dJbn0gZnJvbSAnLi9jb21wb25lbnRzL2xvZ2luL2xvZ2luJztcbmltcG9ydCB7VXNlclNlcnZpY2V9IGZyb20gJy4vY29tcG9uZW50cy91c2Vycy9zZXJ2aWNlcy91c2VyX3NlcnZpY2UnO1xuLy8gaW1wb3J0IHtjdXJyZW50X3VzZXJ9IGZyb20gJy4vc2VydmljZXMvY3VycmVudF91c2VyJztcbmltcG9ydCB7VXNlcn0gZnJvbSAnLi9zZXJ2aWNlcy91c2VyJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcCcsXG4gIHZpZXdCaW5kaW5nczogW05hbWVMaXN0LCBVc2VyU2VydmljZSwgVXNlcl0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImJvZHlcIj5cbiAgICBcdDxzZWN0aW9uIGNsYXNzPVwic2FtcGxlLWFwcC1jb250ZW50XCI+XG4gICAgXHQgIDxuYXY+XG4gICAgXHQgICAgPGEgW3JvdXRlci1saW5rXT1cIlsnL0hvbWUnXVwiPkhvbWU8L2E+XG4gICAgXHQgICAgPGEgW3JvdXRlci1saW5rXT1cIlsnL0Fib3V0J11cIj5BYm91dDwvYT5cbiAgICBcdCAgICA8YSBbcm91dGVyLWxpbmtdPVwiWycvU2lnbiddXCI+U2lnbjwvYT5cbiAgICBcdCAgICA8YSBbcm91dGVyLWxpbmtdPVwiWycvTG9nSW4nXVwiID5Mb2dJbjwvYT5cbiAgICBcdCAgICB7eyF1c2VyLmN1cnJVc2VyW2VtYWlsXVxuICAgIFx0ICAgIDxhIFtyb3V0ZXItbGlua109XCJbJy9Vc2VycycsICdVc2Vycy1ob21lJ11cIj5Vc2VyczwvYT5cbiAgICBcdCAgPC9uYXY+XG4gICAgXHQgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cbiAgICBcdDwvc2VjdGlvbj5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgc3R5bGVzOiBbYFxuICAgIC5zYW1wbGUtYXBwLWNvbnRlbnQge1xuICAgICAgZm9udC1mYW1pbHk6IFZlcmRhbmE7XG4gICAgfVxuICAgIC5zYW1wbGUtYXBwLWNvbnRlbnQgaDEge1xuICAgICAgY29sb3I6ICM5OTk7XG4gICAgICBmb250LXNpemU6IDNlbTtcbiAgICB9XG4gICAgLnNhbXBsZS1hcHAtY29udGVudCBoMiB7XG4gICAgICBjb2xvcjogIzk5MDAwMDtcbiAgICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIH1cbiAgICAuc2FtcGxlLWFwcC1jb250ZW50IHAsXG4gICAgLnNhbXBsZS1hcHAtY29udGVudCBuYXYge1xuICAgICAgcGFkZGluZzogMzBweDtcbiAgICB9XG4gICAgLnNhbXBsZS1hcHAtY29udGVudCBsaSxcbiAgICAuc2FtcGxlLWFwcC1jb250ZW50IHAge1xuICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICB9XG4gICAgLnNhbXBsZS1hcHAtY29udGVudCBsaSB7XG4gICAgICBmb250LWZhbWlseTogQ29uc29sYXM7XG4gICAgfVxuICAgIC5zYW1wbGUtYXBwLWNvbnRlbnQgbmF2IGEge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgIH1cbiAgICAuc2FtcGxlLWFwcC1jb250ZW50IGlucHV0LFxuICAgIC5zYW1wbGUtYXBwLWNvbnRlbnQgYnV0dG9uIHtcbiAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICB9XG5cbiAgICAudG9wLWJhciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cblxuICAgIC5mbGV4LWZpbGwge1xuICAgICAgZmxleDogMTtcbiAgICB9XG5cbiAgICAuZmxleC1yb3dzIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuICBgXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTLCBOZ0ZvciwgTmdJZl1cbn0pXG5cblxuQFJvdXRlQ29uZmlnKFtcbiAgeyBwYXRoOiAnLycsIHJlZGlyZWN0VG86ICcvaG9tZScgfSxcbiAgeyBwYXRoOiAnL2hvbWUnLCBjb21wb25lbnQ6IEhvbWUsIGFzOiAnSG9tZScgfSxcbiAgeyBwYXRoOiAnL2Fib3V0JywgY29tcG9uZW50OiBBYm91dCwgYXM6ICdBYm91dCcgfSxcbiAgeyBwYXRoOiAnL2xvZ2luJywgY29tcG9uZW50OiBMb2dJbiwgYXM6ICdMb2dJbicgfSxcbiAgeyBwYXRoOiAnL3NpZ24nLCBjb21wb25lbnQ6IFNpZ24sIGFzOiAnU2lnbid9LFxuICB7IHBhdGg6ICcvdXNlcnMvLi4uJywgY29tcG9uZW50OiBVc2VycywgYXM6ICdVc2VycycgfVxuXSlcblxuY2xhc3MgQXBwIHtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgdXNlcjogVXNlcikgeyBcbiAgfVxufVxuXG5cbmJvb3RzdHJhcChBcHAsIFtcbiAgUk9VVEVSX0JJTkRJTkdTLFxuICBiaW5kKFJPVVRFUl9QUklNQVJZX0NPTVBPTkVOVCkudG9WYWx1ZShBcHApLFxuICBIVFRQX0JJTkRJTkdTLFxuICBVc2VyXG5dKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==