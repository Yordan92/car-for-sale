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
var sign_1 = require('./components/sign/sign');
var login_1 = require('./components/login/login');
var car_upload_1 = require('./services/car_upload');
var user_1 = require('./services/user');
var App = (function () {
    function App(user) {
        this.user = user;
        user.get();
    }
    App = __decorate([
        angular2_1.Component({
            selector: 'app',
            viewBindings: [name_list_1.NameList, car_upload_1.CarUpload],
            template: "\n    <div class=\"body\">\n    \t<section class=\"sample-app-content\">\n    \t  <nav>\n    \t    <a [router-link]=\"['/Home']\">Home</a>\n    \t    <a [router-link]=\"['/About']\">About</a>\n    \t    <a [router-link]=\"['/Sign']\">Sign</a>\n    \t    <a [router-link]=\"['/LogIn']\" *ng-if=\"!user.currUser\">LogIn</a>\n    \t  </nav>\n    \t  <h1 *ng-if=\"user.currUser\">Hello {{user.currUser.firstName}}!</h1>\n    \t  <router-outlet></router-outlet>\n    \t</section>\n    </div>\n  ",
            styles: ["\n    .sample-app-content {\n      font-family: Verdana;\n    }\n    .sample-app-content h1 {\n      color: #999;\n      font-size: 3em;\n    }\n    .sample-app-content h2 {\n      color: #990000;\n      font-size: 2em;\n    }\n    .sample-app-content p,\n    .sample-app-content nav {\n      padding: 30px;\n    }\n    .sample-app-content li,\n    .sample-app-content p {\n      font-size: 1.2em;\n    }\n    .sample-app-content li {\n      font-family: Consolas;\n    }\n    .sample-app-content nav a {\n      display: inline-block;\n      margin-right: 15px;\n    }\n    .sample-app-content input,\n    .sample-app-content button {\n      padding: 5px;\n      font-size: 1em;\n      outline: none;\n    }\n\n    .top-bar {\n      display: flex;\n    }\n\n    .flex-fill {\n      flex: 1;\n    }\n\n    .flex-rows {\n      flex-direction: column;\n    }\n  "],
            encapsulation: angular2_1.ViewEncapsulation.None,
            directives: [router_1.ROUTER_DIRECTIVES, angular2_1.NgFor, angular2_1.NgIf]
        }),
        router_1.RouteConfig([
            { path: '/', redirectTo: '/home' },
            { path: '/home', component: home_1.Home, as: 'Home' },
            { path: '/about', component: about_1.About, as: 'About' },
            { path: '/login', component: login_1.LogIn, as: 'LogIn' },
            { path: '/sign', component: sign_1.Sign, as: 'Sign' }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6WyJBcHAiLCJBcHAuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEseUJBQXlFLG1CQUFtQixDQUFDLENBQUE7QUFDN0YsdUJBS08saUJBQWlCLENBQUMsQ0FBQTtBQUN6QixxQkFBNEIsZUFBZSxDQUFDLENBQUE7QUFFNUMscUJBQW1CLHdCQUF3QixDQUFDLENBQUE7QUFDNUMsc0JBQW9CLDBCQUEwQixDQUFDLENBQUE7QUFDL0MsMEJBQXVCLHNCQUFzQixDQUFDLENBQUE7QUFDOUMscUJBQW1CLHdCQUF3QixDQUFDLENBQUE7QUFDNUMsc0JBQW9CLDBCQUEwQixDQUFDLENBQUE7QUFDL0MsMkJBQXdCLHVCQUF1QixDQUFDLENBQUE7QUFDaEQscUJBQW1CLGlCQUFpQixDQUFDLENBQUE7QUFDckM7SUE2RUVBLGFBQW1CQSxJQUFVQTtRQUFWQyxTQUFJQSxHQUFKQSxJQUFJQSxDQUFNQTtRQUMzQkEsSUFBSUEsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0E7SUFDYkEsQ0FBQ0E7SUEvRUhEO1FBQUNBLG9CQUFTQSxDQUFDQTtZQUNUQSxRQUFRQSxFQUFFQSxLQUFLQTtZQUNmQSxZQUFZQSxFQUFFQSxDQUFDQSxvQkFBUUEsRUFBRUEsc0JBQVNBLENBQUNBO1lBQ25DQSxRQUFRQSxFQUFFQSw0ZUFhVEE7WUFDREEsTUFBTUEsRUFBRUEsQ0FBQ0EsNjFCQTZDUkEsQ0FBQ0E7WUFDRkEsYUFBYUEsRUFBRUEsNEJBQWlCQSxDQUFDQSxJQUFJQTtZQUNyQ0EsVUFBVUEsRUFBRUEsQ0FBQ0EsMEJBQWlCQSxFQUFFQSxnQkFBS0EsRUFBRUEsZUFBSUEsQ0FBQ0E7U0FDN0NBLENBQUNBO1FBR0RBLG9CQUFXQSxDQUFDQTtZQUNYQSxFQUFFQSxJQUFJQSxFQUFFQSxHQUFHQSxFQUFFQSxVQUFVQSxFQUFFQSxPQUFPQSxFQUFFQTtZQUNsQ0EsRUFBRUEsSUFBSUEsRUFBRUEsT0FBT0EsRUFBRUEsU0FBU0EsRUFBRUEsV0FBSUEsRUFBRUEsRUFBRUEsRUFBRUEsTUFBTUEsRUFBRUE7WUFDOUNBLEVBQUVBLElBQUlBLEVBQUVBLFFBQVFBLEVBQUVBLFNBQVNBLEVBQUVBLGFBQUtBLEVBQUVBLEVBQUVBLEVBQUVBLE9BQU9BLEVBQUVBO1lBQ2pEQSxFQUFFQSxJQUFJQSxFQUFFQSxRQUFRQSxFQUFFQSxTQUFTQSxFQUFFQSxhQUFLQSxFQUFFQSxFQUFFQSxFQUFFQSxPQUFPQSxFQUFFQTtZQUNqREEsRUFBRUEsSUFBSUEsRUFBRUEsT0FBT0EsRUFBRUEsU0FBU0EsRUFBRUEsV0FBSUEsRUFBRUEsRUFBRUEsRUFBRUEsTUFBTUEsRUFBQ0E7U0FDOUNBLENBQUNBOztZQU1EQTtJQUFEQSxVQUFDQTtBQUFEQSxDQWhGQSxBQWdGQ0EsSUFBQTtBQUdELG9CQUFTLENBQUMsR0FBRyxFQUFFO0lBQ2Isd0JBQWU7SUFDZixlQUFJLENBQUMsaUNBQXdCLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO0lBQzNDLG9CQUFhO0lBQ2IsV0FBSTtDQUNMLENBQUMsQ0FBQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgYmluZCwgYm9vdHN0cmFwLCBWaWV3RW5jYXBzdWxhdGlvbiwgTmdGb3IsIE5nSWZ9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcbmltcG9ydCB7XG4gIFJvdXRlQ29uZmlnLFxuICBST1VURVJfRElSRUNUSVZFUyxcbiAgUk9VVEVSX0JJTkRJTkdTLFxuICBST1VURVJfUFJJTUFSWV9DT01QT05FTlRcbn0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7SFRUUF9CSU5ESU5HU30gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5cbmltcG9ydCB7SG9tZX0gZnJvbSAnLi9jb21wb25lbnRzL2hvbWUvaG9tZSc7XG5pbXBvcnQge0Fib3V0fSBmcm9tICcuL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQnO1xuaW1wb3J0IHtOYW1lTGlzdH0gZnJvbSAnLi9zZXJ2aWNlcy9uYW1lX2xpc3QnO1xuaW1wb3J0IHtTaWdufSBmcm9tICcuL2NvbXBvbmVudHMvc2lnbi9zaWduJztcbmltcG9ydCB7TG9nSW59IGZyb20gJy4vY29tcG9uZW50cy9sb2dpbi9sb2dpbic7XG5pbXBvcnQge0NhclVwbG9hZH0gZnJvbSAnLi9zZXJ2aWNlcy9jYXJfdXBsb2FkJztcbmltcG9ydCB7VXNlcn0gZnJvbSAnLi9zZXJ2aWNlcy91c2VyJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcCcsXG4gIHZpZXdCaW5kaW5nczogW05hbWVMaXN0LCBDYXJVcGxvYWRdLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJib2R5XCI+XG4gICAgXHQ8c2VjdGlvbiBjbGFzcz1cInNhbXBsZS1hcHAtY29udGVudFwiPlxuICAgIFx0ICA8bmF2PlxuICAgIFx0ICAgIDxhIFtyb3V0ZXItbGlua109XCJbJy9Ib21lJ11cIj5Ib21lPC9hPlxuICAgIFx0ICAgIDxhIFtyb3V0ZXItbGlua109XCJbJy9BYm91dCddXCI+QWJvdXQ8L2E+XG4gICAgXHQgICAgPGEgW3JvdXRlci1saW5rXT1cIlsnL1NpZ24nXVwiPlNpZ248L2E+XG4gICAgXHQgICAgPGEgW3JvdXRlci1saW5rXT1cIlsnL0xvZ0luJ11cIiAqbmctaWY9XCIhdXNlci5jdXJyVXNlclwiPkxvZ0luPC9hPlxuICAgIFx0ICA8L25hdj5cbiAgICBcdCAgPGgxICpuZy1pZj1cInVzZXIuY3VyclVzZXJcIj5IZWxsbyB7e3VzZXIuY3VyclVzZXIuZmlyc3ROYW1lfX0hPC9oMT5cbiAgICBcdCAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuICAgIFx0PC9zZWN0aW9uPlxuICAgIDwvZGl2PlxuICBgLFxuICBzdHlsZXM6IFtgXG4gICAgLnNhbXBsZS1hcHAtY29udGVudCB7XG4gICAgICBmb250LWZhbWlseTogVmVyZGFuYTtcbiAgICB9XG4gICAgLnNhbXBsZS1hcHAtY29udGVudCBoMSB7XG4gICAgICBjb2xvcjogIzk5OTtcbiAgICAgIGZvbnQtc2l6ZTogM2VtO1xuICAgIH1cbiAgICAuc2FtcGxlLWFwcC1jb250ZW50IGgyIHtcbiAgICAgIGNvbG9yOiAjOTkwMDAwO1xuICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgfVxuICAgIC5zYW1wbGUtYXBwLWNvbnRlbnQgcCxcbiAgICAuc2FtcGxlLWFwcC1jb250ZW50IG5hdiB7XG4gICAgICBwYWRkaW5nOiAzMHB4O1xuICAgIH1cbiAgICAuc2FtcGxlLWFwcC1jb250ZW50IGxpLFxuICAgIC5zYW1wbGUtYXBwLWNvbnRlbnQgcCB7XG4gICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIH1cbiAgICAuc2FtcGxlLWFwcC1jb250ZW50IGxpIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBDb25zb2xhcztcbiAgICB9XG4gICAgLnNhbXBsZS1hcHAtY29udGVudCBuYXYgYSB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgfVxuICAgIC5zYW1wbGUtYXBwLWNvbnRlbnQgaW5wdXQsXG4gICAgLnNhbXBsZS1hcHAtY29udGVudCBidXR0b24ge1xuICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgIH1cblxuICAgIC50b3AtYmFyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuXG4gICAgLmZsZXgtZmlsbCB7XG4gICAgICBmbGV4OiAxO1xuICAgIH1cblxuICAgIC5mbGV4LXJvd3Mge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG4gIGBdLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVMsIE5nRm9yLCBOZ0lmXVxufSlcblxuXG5AUm91dGVDb25maWcoW1xuICB7IHBhdGg6ICcvJywgcmVkaXJlY3RUbzogJy9ob21lJyB9LFxuICB7IHBhdGg6ICcvaG9tZScsIGNvbXBvbmVudDogSG9tZSwgYXM6ICdIb21lJyB9LFxuICB7IHBhdGg6ICcvYWJvdXQnLCBjb21wb25lbnQ6IEFib3V0LCBhczogJ0Fib3V0JyB9LFxuICB7IHBhdGg6ICcvbG9naW4nLCBjb21wb25lbnQ6IExvZ0luLCBhczogJ0xvZ0luJyB9LFxuICB7IHBhdGg6ICcvc2lnbicsIGNvbXBvbmVudDogU2lnbiwgYXM6ICdTaWduJ31cbl0pXG5cbmNsYXNzIEFwcCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB1c2VyOiBVc2VyKSB7XG4gICAgdXNlci5nZXQoKTtcbiAgfVxufVxuXG5cbmJvb3RzdHJhcChBcHAsIFtcbiAgUk9VVEVSX0JJTkRJTkdTLFxuICBiaW5kKFJPVVRFUl9QUklNQVJZX0NPTVBPTkVOVCkudG9WYWx1ZShBcHApLFxuICBIVFRQX0JJTkRJTkdTLFxuICBVc2VyXG5dKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==