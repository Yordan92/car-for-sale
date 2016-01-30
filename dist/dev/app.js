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
var user_service_1 = require('./components/users/services/user_service');
var App = (function () {
    function App() {
    }
    App = __decorate([
        angular2_1.Component({
            selector: 'app',
            viewBindings: [name_list_1.NameList, user_service_1.UserService],
            template: "\n    <div class=\"body\">\n    \t<section class=\"sample-app-content\">\n    \t  <nav>\n    \t    <a [router-link]=\"['/Home']\">Home</a>\n    \t    <a [router-link]=\"['/About']\">About</a>\n    \t    <a [router-link]=\"['/Sign']\">Sign</a>\n    \t    <a [router-link]=\"['/Users', 'Users-home']\">Users</a>\n    \t  </nav>\n\n    \t  <router-outlet></router-outlet>\n    \t</section>\n    </div>\n  ",
            styles: ["\n    .sample-app-content {\n      font-family: Verdana;\n    }\n    .sample-app-content h1 {\n      color: #999;\n      font-size: 3em;\n    }\n    .sample-app-content h2 {\n      color: #990000;\n      font-size: 2em;\n    }\n    .sample-app-content p,\n    .sample-app-content nav {\n      padding: 30px;\n    }\n    .sample-app-content li,\n    .sample-app-content p {\n      font-size: 1.2em;\n    }\n    .sample-app-content li {\n      font-family: Consolas;\n    }\n    .sample-app-content nav a {\n      display: inline-block;\n      margin-right: 15px;\n    }\n    .sample-app-content input,\n    .sample-app-content button {\n      padding: 5px;\n      font-size: 1em;\n      outline: none;\n    }\n\n    .top-bar {\n      display: flex;\n    }\n\n    .flex-fill {\n      flex: 1;\n    }\n\n    .flex-rows {\n      flex-direction: column;\n    }\n  "],
            encapsulation: angular2_1.ViewEncapsulation.None,
            directives: [router_1.ROUTER_DIRECTIVES, angular2_1.NgFor]
        }),
        router_1.RouteConfig([
            { path: '/', redirectTo: '/home' },
            { path: '/home', component: home_1.Home, as: 'Home' },
            { path: '/about', component: about_1.About, as: 'About' },
            { path: '/sign', component: sign_1.Sign, as: 'Sign' },
            { path: '/users/...', component: users_1.Users, as: 'Users' }
        ]), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
})();
angular2_1.bootstrap(App, [
    router_1.ROUTER_BINDINGS,
    angular2_1.bind(router_1.ROUTER_PRIMARY_COMPONENT).toValue(App),
    http_1.HTTP_BINDINGS
]);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6WyJBcHAiLCJBcHAuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEseUJBQW1FLG1CQUFtQixDQUFDLENBQUE7QUFDdkYsdUJBTU8saUJBQWlCLENBQUMsQ0FBQTtBQUN6QixxQkFBNEIsZUFBZSxDQUFDLENBQUE7QUFFNUMscUJBQW1CLHdCQUF3QixDQUFDLENBQUE7QUFDNUMsc0JBQW9CLDBCQUEwQixDQUFDLENBQUE7QUFDL0MsMEJBQXVCLHNCQUFzQixDQUFDLENBQUE7QUFDOUMsc0JBQW9CLDBCQUEwQixDQUFDLENBQUE7QUFDL0MscUJBQW1CLHdCQUF3QixDQUFDLENBQUE7QUFDNUMsNkJBQTBCLDBDQUEwQyxDQUFDLENBQUE7QUFHckU7SUFBQUE7SUE0RVdDLENBQUNBO0lBNUVaRDtRQUFDQSxvQkFBU0EsQ0FBQ0E7WUFDVEEsUUFBUUEsRUFBRUEsS0FBS0E7WUFDZkEsWUFBWUEsRUFBRUEsQ0FBQ0Esb0JBQVFBLEVBQUVBLDBCQUFXQSxDQUFDQTtZQUNyQ0EsUUFBUUEsRUFBRUEsb1pBYVRBO1lBQ0RBLE1BQU1BLEVBQUVBLENBQUNBLDYxQkE2Q1JBLENBQUNBO1lBQ0ZBLGFBQWFBLEVBQUVBLDRCQUFpQkEsQ0FBQ0EsSUFBSUE7WUFDckNBLFVBQVVBLEVBQUVBLENBQUNBLDBCQUFpQkEsRUFBRUEsZ0JBQUtBLENBQUNBO1NBQ3ZDQSxDQUFDQTtRQUdEQSxvQkFBV0EsQ0FBQ0E7WUFDWEEsRUFBRUEsSUFBSUEsRUFBRUEsR0FBR0EsRUFBRUEsVUFBVUEsRUFBRUEsT0FBT0EsRUFBRUE7WUFDbENBLEVBQUVBLElBQUlBLEVBQUVBLE9BQU9BLEVBQUVBLFNBQVNBLEVBQUVBLFdBQUlBLEVBQUVBLEVBQUVBLEVBQUVBLE1BQU1BLEVBQUVBO1lBQzlDQSxFQUFFQSxJQUFJQSxFQUFFQSxRQUFRQSxFQUFFQSxTQUFTQSxFQUFFQSxhQUFLQSxFQUFFQSxFQUFFQSxFQUFFQSxPQUFPQSxFQUFFQTtZQUNqREEsRUFBRUEsSUFBSUEsRUFBRUEsT0FBT0EsRUFBRUEsU0FBU0EsRUFBRUEsV0FBSUEsRUFBRUEsRUFBRUEsRUFBRUEsTUFBTUEsRUFBQ0E7WUFDN0NBLEVBQUVBLElBQUlBLEVBQUVBLFlBQVlBLEVBQUVBLFNBQVNBLEVBQUVBLGFBQUtBLEVBQUVBLEVBQUVBLEVBQUVBLE9BQU9BLEVBQUVBO1NBQ3REQSxDQUFDQTs7WUFFVUE7SUFBREEsVUFBQ0E7QUFBREEsQ0E1RVgsQUE0RVlBLElBQUE7QUFHWixvQkFBUyxDQUFDLEdBQUcsRUFBRTtJQUNiLHdCQUFlO0lBQ2YsZUFBSSxDQUFDLGlDQUF3QixDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztJQUMzQyxvQkFBYTtDQUNkLENBQUMsQ0FBQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgYmluZCwgYm9vdHN0cmFwLCBWaWV3RW5jYXBzdWxhdGlvbiwgTmdGb3J9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcbmltcG9ydCB7XG4gIFJvdXRlQ29uZmlnLFxuICBST1VURVJfRElSRUNUSVZFUyxcbiAgUk9VVEVSX0JJTkRJTkdTLFxuICBST1VURVJfUFJJTUFSWV9DT01QT05FTlQsXG4gIENhbkFjdGl2YXRlXG59IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge0hUVFBfQklORElOR1N9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuXG5pbXBvcnQge0hvbWV9IGZyb20gJy4vY29tcG9uZW50cy9ob21lL2hvbWUnO1xuaW1wb3J0IHtBYm91dH0gZnJvbSAnLi9jb21wb25lbnRzL2Fib3V0L2Fib3V0JztcbmltcG9ydCB7TmFtZUxpc3R9IGZyb20gJy4vc2VydmljZXMvbmFtZV9saXN0JztcbmltcG9ydCB7VXNlcnN9IGZyb20gJy4vY29tcG9uZW50cy91c2Vycy91c2Vycyc7XG5pbXBvcnQge1NpZ259IGZyb20gJy4vY29tcG9uZW50cy9zaWduL3NpZ24nO1xuaW1wb3J0IHtVc2VyU2VydmljZX0gZnJvbSAnLi9jb21wb25lbnRzL3VzZXJzL3NlcnZpY2VzL3VzZXJfc2VydmljZSc7XG5pbXBvcnQge2N1cnJlbnRfdXNlcn0gZnJvbSAnLi9zZXJ2aWNlcy9jdXJyZW50X3VzZXInO1xuaW1wb3J0IHtVc2VyfSBmcm9tICcuL3NlcnZpY2VzL1VzZXInO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwJyxcbiAgdmlld0JpbmRpbmdzOiBbTmFtZUxpc3QsIFVzZXJTZXJ2aWNlXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiYm9keVwiPlxuICAgIFx0PHNlY3Rpb24gY2xhc3M9XCJzYW1wbGUtYXBwLWNvbnRlbnRcIj5cbiAgICBcdCAgPG5hdj5cbiAgICBcdCAgICA8YSBbcm91dGVyLWxpbmtdPVwiWycvSG9tZSddXCI+SG9tZTwvYT5cbiAgICBcdCAgICA8YSBbcm91dGVyLWxpbmtdPVwiWycvQWJvdXQnXVwiPkFib3V0PC9hPlxuICAgIFx0ICAgIDxhIFtyb3V0ZXItbGlua109XCJbJy9TaWduJ11cIj5TaWduPC9hPlxuICAgIFx0ICAgIDxhIFtyb3V0ZXItbGlua109XCJbJy9Vc2VycycsICdVc2Vycy1ob21lJ11cIj5Vc2VyczwvYT5cbiAgICBcdCAgPC9uYXY+XG5cbiAgICBcdCAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuICAgIFx0PC9zZWN0aW9uPlxuICAgIDwvZGl2PlxuICBgLFxuICBzdHlsZXM6IFtgXG4gICAgLnNhbXBsZS1hcHAtY29udGVudCB7XG4gICAgICBmb250LWZhbWlseTogVmVyZGFuYTtcbiAgICB9XG4gICAgLnNhbXBsZS1hcHAtY29udGVudCBoMSB7XG4gICAgICBjb2xvcjogIzk5OTtcbiAgICAgIGZvbnQtc2l6ZTogM2VtO1xuICAgIH1cbiAgICAuc2FtcGxlLWFwcC1jb250ZW50IGgyIHtcbiAgICAgIGNvbG9yOiAjOTkwMDAwO1xuICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgfVxuICAgIC5zYW1wbGUtYXBwLWNvbnRlbnQgcCxcbiAgICAuc2FtcGxlLWFwcC1jb250ZW50IG5hdiB7XG4gICAgICBwYWRkaW5nOiAzMHB4O1xuICAgIH1cbiAgICAuc2FtcGxlLWFwcC1jb250ZW50IGxpLFxuICAgIC5zYW1wbGUtYXBwLWNvbnRlbnQgcCB7XG4gICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIH1cbiAgICAuc2FtcGxlLWFwcC1jb250ZW50IGxpIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBDb25zb2xhcztcbiAgICB9XG4gICAgLnNhbXBsZS1hcHAtY29udGVudCBuYXYgYSB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgfVxuICAgIC5zYW1wbGUtYXBwLWNvbnRlbnQgaW5wdXQsXG4gICAgLnNhbXBsZS1hcHAtY29udGVudCBidXR0b24ge1xuICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgIH1cblxuICAgIC50b3AtYmFyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuXG4gICAgLmZsZXgtZmlsbCB7XG4gICAgICBmbGV4OiAxO1xuICAgIH1cblxuICAgIC5mbGV4LXJvd3Mge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG4gIGBdLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVMsIE5nRm9yXVxufSlcblxuXG5AUm91dGVDb25maWcoW1xuICB7IHBhdGg6ICcvJywgcmVkaXJlY3RUbzogJy9ob21lJyB9LFxuICB7IHBhdGg6ICcvaG9tZScsIGNvbXBvbmVudDogSG9tZSwgYXM6ICdIb21lJyB9LFxuICB7IHBhdGg6ICcvYWJvdXQnLCBjb21wb25lbnQ6IEFib3V0LCBhczogJ0Fib3V0JyB9LFxuICB7IHBhdGg6ICcvc2lnbicsIGNvbXBvbmVudDogU2lnbiwgYXM6ICdTaWduJ30sXG4gIHsgcGF0aDogJy91c2Vycy8uLi4nLCBjb21wb25lbnQ6IFVzZXJzLCBhczogJ1VzZXJzJyB9XG5dKVxuXG5jbGFzcyBBcHAge31cblxuXG5ib290c3RyYXAoQXBwLCBbXG4gIFJPVVRFUl9CSU5ESU5HUyxcbiAgYmluZChST1VURVJfUFJJTUFSWV9DT01QT05FTlQpLnRvVmFsdWUoQXBwKSxcbiAgSFRUUF9CSU5ESU5HU1xuXSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=