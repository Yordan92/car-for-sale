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
var car_upload_1 = require('./services/car_upload');
var user_1 = require('./services/user');
var App = (function () {
    function App(user) {
        this.user = user;
        user.get();
        console.log('_________________', user);
    }
    App = __decorate([
        angular2_1.Component({
            selector: 'app',
            viewBindings: [name_list_1.NameList, user_service_1.UserService, car_upload_1.CarUpload],
            template: "\n    <div class=\"body\">\n    \t<section class=\"sample-app-content\">\n    \t  <nav>\n    \t    <a [router-link]=\"['/Home']\">Home</a>\n    \t    <a [router-link]=\"['/About']\">About</a>\n    \t    <a [router-link]=\"['/Sign']\">Sign</a>\n    \t    <a [router-link]=\"['/LogIn']\" *ng-if=\"!user.currUser\">LogIn</a>\n    \t    <a [router-link]=\"['/Users', 'Users-home']\">Users</a>\n    \t  </nav>\n    \t  <h1 *ng-if=\"user.currUser\">Hello {{user.currUser.firstName}}!</h1>\n    \t  <router-outlet></router-outlet>\n    \t</section>\n    </div>\n  ",
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6WyJBcHAiLCJBcHAuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEseUJBQXlFLG1CQUFtQixDQUFDLENBQUE7QUFDN0YsdUJBS08saUJBQWlCLENBQUMsQ0FBQTtBQUN6QixxQkFBNEIsZUFBZSxDQUFDLENBQUE7QUFFNUMscUJBQW1CLHdCQUF3QixDQUFDLENBQUE7QUFDNUMsc0JBQW9CLDBCQUEwQixDQUFDLENBQUE7QUFDL0MsMEJBQXVCLHNCQUFzQixDQUFDLENBQUE7QUFDOUMsc0JBQW9CLDBCQUEwQixDQUFDLENBQUE7QUFDL0MscUJBQW1CLHdCQUF3QixDQUFDLENBQUE7QUFDNUMsc0JBQW9CLDBCQUEwQixDQUFDLENBQUE7QUFDL0MsNkJBQTBCLDBDQUEwQyxDQUFDLENBQUE7QUFDckUsMkJBQXdCLHVCQUF1QixDQUFDLENBQUE7QUFFaEQscUJBQW1CLGlCQUFpQixDQUFDLENBQUE7QUFDckM7SUErRUVBLGFBQW1CQSxJQUFVQTtRQUFWQyxTQUFJQSxHQUFKQSxJQUFJQSxDQUFNQTtRQUMzQkEsSUFBSUEsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0E7UUFDWEEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsbUJBQW1CQSxFQUFDQSxJQUFJQSxDQUFDQSxDQUFBQTtJQUN2Q0EsQ0FBQ0E7SUFsRkhEO1FBQUNBLG9CQUFTQSxDQUFDQTtZQUNUQSxRQUFRQSxFQUFFQSxLQUFLQTtZQUNmQSxZQUFZQSxFQUFFQSxDQUFDQSxvQkFBUUEsRUFBRUEsMEJBQVdBLEVBQUVBLHNCQUFTQSxDQUFDQTtZQUNoREEsUUFBUUEsRUFBRUEsK2lCQWNUQTtZQUNEQSxNQUFNQSxFQUFFQSxDQUFDQSw2MUJBNkNSQSxDQUFDQTtZQUNGQSxhQUFhQSxFQUFFQSw0QkFBaUJBLENBQUNBLElBQUlBO1lBQ3JDQSxVQUFVQSxFQUFFQSxDQUFDQSwwQkFBaUJBLEVBQUVBLGdCQUFLQSxFQUFFQSxlQUFJQSxDQUFDQTtTQUM3Q0EsQ0FBQ0E7UUFHREEsb0JBQVdBLENBQUNBO1lBQ1hBLEVBQUVBLElBQUlBLEVBQUVBLEdBQUdBLEVBQUVBLFVBQVVBLEVBQUVBLE9BQU9BLEVBQUVBO1lBQ2xDQSxFQUFFQSxJQUFJQSxFQUFFQSxPQUFPQSxFQUFFQSxTQUFTQSxFQUFFQSxXQUFJQSxFQUFFQSxFQUFFQSxFQUFFQSxNQUFNQSxFQUFFQTtZQUM5Q0EsRUFBRUEsSUFBSUEsRUFBRUEsUUFBUUEsRUFBRUEsU0FBU0EsRUFBRUEsYUFBS0EsRUFBRUEsRUFBRUEsRUFBRUEsT0FBT0EsRUFBRUE7WUFDakRBLEVBQUVBLElBQUlBLEVBQUVBLFFBQVFBLEVBQUVBLFNBQVNBLEVBQUVBLGFBQUtBLEVBQUVBLEVBQUVBLEVBQUVBLE9BQU9BLEVBQUVBO1lBQ2pEQSxFQUFFQSxJQUFJQSxFQUFFQSxPQUFPQSxFQUFFQSxTQUFTQSxFQUFFQSxXQUFJQSxFQUFFQSxFQUFFQSxFQUFFQSxNQUFNQSxFQUFDQTtZQUM3Q0EsRUFBRUEsSUFBSUEsRUFBRUEsWUFBWUEsRUFBRUEsU0FBU0EsRUFBRUEsYUFBS0EsRUFBRUEsRUFBRUEsRUFBRUEsT0FBT0EsRUFBRUE7U0FDdERBLENBQUNBOztZQU9EQTtJQUFEQSxVQUFDQTtBQUFEQSxDQW5GQSxBQW1GQ0EsSUFBQTtBQUdELG9CQUFTLENBQUMsR0FBRyxFQUFFO0lBQ2Isd0JBQWU7SUFDZixlQUFJLENBQUMsaUNBQXdCLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO0lBQzNDLG9CQUFhO0lBQ2IsV0FBSTtDQUNMLENBQUMsQ0FBQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgYmluZCwgYm9vdHN0cmFwLCBWaWV3RW5jYXBzdWxhdGlvbiwgTmdGb3IsIE5nSWZ9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcbmltcG9ydCB7XG4gIFJvdXRlQ29uZmlnLFxuICBST1VURVJfRElSRUNUSVZFUyxcbiAgUk9VVEVSX0JJTkRJTkdTLFxuICBST1VURVJfUFJJTUFSWV9DT01QT05FTlRcbn0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7SFRUUF9CSU5ESU5HU30gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5cbmltcG9ydCB7SG9tZX0gZnJvbSAnLi9jb21wb25lbnRzL2hvbWUvaG9tZSc7XG5pbXBvcnQge0Fib3V0fSBmcm9tICcuL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQnO1xuaW1wb3J0IHtOYW1lTGlzdH0gZnJvbSAnLi9zZXJ2aWNlcy9uYW1lX2xpc3QnO1xuaW1wb3J0IHtVc2Vyc30gZnJvbSAnLi9jb21wb25lbnRzL3VzZXJzL3VzZXJzJztcbmltcG9ydCB7U2lnbn0gZnJvbSAnLi9jb21wb25lbnRzL3NpZ24vc2lnbic7XG5pbXBvcnQge0xvZ0lufSBmcm9tICcuL2NvbXBvbmVudHMvbG9naW4vbG9naW4nO1xuaW1wb3J0IHtVc2VyU2VydmljZX0gZnJvbSAnLi9jb21wb25lbnRzL3VzZXJzL3NlcnZpY2VzL3VzZXJfc2VydmljZSc7XG5pbXBvcnQge0NhclVwbG9hZH0gZnJvbSAnLi9zZXJ2aWNlcy9jYXJfdXBsb2FkJztcbmltcG9ydCB7SW5qZWN0b3J9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcbmltcG9ydCB7VXNlcn0gZnJvbSAnLi9zZXJ2aWNlcy91c2VyJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcCcsXG4gIHZpZXdCaW5kaW5nczogW05hbWVMaXN0LCBVc2VyU2VydmljZSwgQ2FyVXBsb2FkXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiYm9keVwiPlxuICAgIFx0PHNlY3Rpb24gY2xhc3M9XCJzYW1wbGUtYXBwLWNvbnRlbnRcIj5cbiAgICBcdCAgPG5hdj5cbiAgICBcdCAgICA8YSBbcm91dGVyLWxpbmtdPVwiWycvSG9tZSddXCI+SG9tZTwvYT5cbiAgICBcdCAgICA8YSBbcm91dGVyLWxpbmtdPVwiWycvQWJvdXQnXVwiPkFib3V0PC9hPlxuICAgIFx0ICAgIDxhIFtyb3V0ZXItbGlua109XCJbJy9TaWduJ11cIj5TaWduPC9hPlxuICAgIFx0ICAgIDxhIFtyb3V0ZXItbGlua109XCJbJy9Mb2dJbiddXCIgKm5nLWlmPVwiIXVzZXIuY3VyclVzZXJcIj5Mb2dJbjwvYT5cbiAgICBcdCAgICA8YSBbcm91dGVyLWxpbmtdPVwiWycvVXNlcnMnLCAnVXNlcnMtaG9tZSddXCI+VXNlcnM8L2E+XG4gICAgXHQgIDwvbmF2PlxuICAgIFx0ICA8aDEgKm5nLWlmPVwidXNlci5jdXJyVXNlclwiPkhlbGxvIHt7dXNlci5jdXJyVXNlci5maXJzdE5hbWV9fSE8L2gxPlxuICAgIFx0ICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG4gICAgXHQ8L3NlY3Rpb24+XG4gICAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlczogW2BcbiAgICAuc2FtcGxlLWFwcC1jb250ZW50IHtcbiAgICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hO1xuICAgIH1cbiAgICAuc2FtcGxlLWFwcC1jb250ZW50IGgxIHtcbiAgICAgIGNvbG9yOiAjOTk5O1xuICAgICAgZm9udC1zaXplOiAzZW07XG4gICAgfVxuICAgIC5zYW1wbGUtYXBwLWNvbnRlbnQgaDIge1xuICAgICAgY29sb3I6ICM5OTAwMDA7XG4gICAgICBmb250LXNpemU6IDJlbTtcbiAgICB9XG4gICAgLnNhbXBsZS1hcHAtY29udGVudCBwLFxuICAgIC5zYW1wbGUtYXBwLWNvbnRlbnQgbmF2IHtcbiAgICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgfVxuICAgIC5zYW1wbGUtYXBwLWNvbnRlbnQgbGksXG4gICAgLnNhbXBsZS1hcHAtY29udGVudCBwIHtcbiAgICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgfVxuICAgIC5zYW1wbGUtYXBwLWNvbnRlbnQgbGkge1xuICAgICAgZm9udC1mYW1pbHk6IENvbnNvbGFzO1xuICAgIH1cbiAgICAuc2FtcGxlLWFwcC1jb250ZW50IG5hdiBhIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICB9XG4gICAgLnNhbXBsZS1hcHAtY29udGVudCBpbnB1dCxcbiAgICAuc2FtcGxlLWFwcC1jb250ZW50IGJ1dHRvbiB7XG4gICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgfVxuXG4gICAgLnRvcC1iYXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG5cbiAgICAuZmxleC1maWxsIHtcbiAgICAgIGZsZXg6IDE7XG4gICAgfVxuXG4gICAgLmZsZXgtcm93cyB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cbiAgYF0sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFUywgTmdGb3IsIE5nSWZdXG59KVxuXG5cbkBSb3V0ZUNvbmZpZyhbXG4gIHsgcGF0aDogJy8nLCByZWRpcmVjdFRvOiAnL2hvbWUnIH0sXG4gIHsgcGF0aDogJy9ob21lJywgY29tcG9uZW50OiBIb21lLCBhczogJ0hvbWUnIH0sXG4gIHsgcGF0aDogJy9hYm91dCcsIGNvbXBvbmVudDogQWJvdXQsIGFzOiAnQWJvdXQnIH0sXG4gIHsgcGF0aDogJy9sb2dpbicsIGNvbXBvbmVudDogTG9nSW4sIGFzOiAnTG9nSW4nIH0sXG4gIHsgcGF0aDogJy9zaWduJywgY29tcG9uZW50OiBTaWduLCBhczogJ1NpZ24nfSxcbiAgeyBwYXRoOiAnL3VzZXJzLy4uLicsIGNvbXBvbmVudDogVXNlcnMsIGFzOiAnVXNlcnMnIH1cbl0pXG5cbmNsYXNzIEFwcCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB1c2VyOiBVc2VyKSB7XG4gICAgdXNlci5nZXQoKTtcbiAgICBjb25zb2xlLmxvZygnX19fX19fX19fX19fX19fX18nLHVzZXIpXG4gIH1cbn1cblxuXG5ib290c3RyYXAoQXBwLCBbXG4gIFJPVVRFUl9CSU5ESU5HUyxcbiAgYmluZChST1VURVJfUFJJTUFSWV9DT01QT05FTlQpLnRvVmFsdWUoQXBwKSxcbiAgSFRUUF9CSU5ESU5HUyxcbiAgVXNlclxuXSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=