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
var users_list_1 = require('./users_list/users_list');
var users_home_1 = require('./users_home/users_home');
var user_details_1 = require('./user_details/user_details');
var user_form_1 = require('./user_form/user_form');
var user_service_1 = require('./services/user_service');
var loading_btn_1 = require('../../directives/loading_btn');
var Users = (function () {
    function Users(userService) {
        var _this = this;
        this.userService = userService;
        this.loading = true;
        this.userService
            .getUsers()
            .then(function (users) {
            _this.loading = false;
        });
    }
    Users.prototype.eventHandler = function (value) {
        console.log("Example of handling custom events: " + value);
    };
    Users.prototype.canActivate = function () {
        console.info('Component router canActivate now works!');
        this.loading = true;
        this.userService.getUsers();
    };
    Users.prototype.activate = function () {
        console.info('Component router activate now works!');
        this.loading = false;
    };
    Users = __decorate([
        angular2_1.Component({
            selector: 'users',
            template: "\n    <h1>Users</h1>\n\n    <div *ng-if=\"loading\">Loading users data</div>\n\n    <div *ng-if=\"!loading\">\n      <button type=\"button\"\n        loading-btn\n        [loading-text]=\"'Loading more...'\"\n        [loading-more]=\"userService.loading\"\n        (sample-custom-event)=\"eventHandler($event)\"\n        (click)=\"userService.getMoreUsers()\">Load More Users</button>\n\n      <a [router-link]=\"['./User-create']\">Create user</a>\n\n      <users-list [users]=\"userService.usersCache\"></users-list>\n\n      <router-outlet></router-outlet>\n    </div>\n  ",
            styles: ["\n    users,\n    users-list,\n    users-home,\n    user-details { display: block; }\n\n    ul.users-list {\n      margin: 0;\n      padding: 0;\n      display: block;\n      width: 280px;\n      float: left;\n    }\n    .users-list > li {\n      list-style: none;\n      position: relative;\n      font-size: 14px;\n    }\n    .users-list > li.active {\n      background-color: #cecece;\n    }\n    .users-list > li > a {\n      display: block;\n      text-decoration: none;\n      padding: 3px 0;\n      color: dimgray;\n    }\n    .users-list > li:hover {\n      background-color: slategray;\n      color: floralwhite;\n    }\n    .users-list > li:hover > a {\n      color: floralwhite;\n    }\n\n    .users-list > li > a > img {\n      width: 50px;\n      height: 50px;\n      border-radius: 25px;\n      margin: 0 5px 0 5px;\n      vertical-align: middle;\n    }\n    .users-list > li > .actions {\n      display: none;\n      position: absolute;\n      right: 20px;\n      top: 15px;\n    }\n    .users-list > li > .actions > a {\n      color: floralwhite;\n    }\n    .users-list > li:hover > .actions {\n      display: block;\n    }\n\n    .user-details {\n      margin-left: 280px;\n      padding: 0 15px;\n    }\n  "],
            encapsulation: angular2_1.ViewEncapsulation.None,
            directives: [router_1.ROUTER_DIRECTIVES, angular2_1.NgIf, users_list_1.UsersList, loading_btn_1.LoadingBtn]
        }),
        router_1.RouteConfig([
            { path: '/', redirectTo: '/home' },
            { path: '/home', component: users_home_1.UsersHome, as: 'Users-home' },
            { path: '/show/:username', component: user_details_1.UserDetails, as: 'User-details' },
            { path: '/edit/:username', component: user_form_1.UserForm, as: 'User-edit' },
            { path: '/create', component: user_form_1.UserForm, as: 'User-create' }
        ]), 
        __metadata('design:paramtypes', [user_service_1.UserService])
    ], Users);
    return Users;
})();
exports.Users = Users;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdXNlcnMvdXNlcnMudHMiXSwibmFtZXMiOlsiVXNlcnMiLCJVc2Vycy5jb25zdHJ1Y3RvciIsIlVzZXJzLmV2ZW50SGFuZGxlciIsIlVzZXJzLmNhbkFjdGl2YXRlIiwiVXNlcnMuYWN0aXZhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEseUJBQWlELG1CQUFtQixDQUFDLENBQUE7QUFDckUsdUJBQTZDLGlCQUFpQixDQUFDLENBQUE7QUFFL0QsMkJBQXdCLHlCQUF5QixDQUFDLENBQUE7QUFDbEQsMkJBQXdCLHlCQUF5QixDQUFDLENBQUE7QUFDbEQsNkJBQTBCLDZCQUE2QixDQUFDLENBQUE7QUFDeEQsMEJBQXVCLHVCQUF1QixDQUFDLENBQUE7QUFDL0MsNkJBQTBCLHlCQUF5QixDQUFDLENBQUE7QUFFcEQsNEJBQXlCLDhCQUE4QixDQUFDLENBQUE7QUFFeEQ7SUE4RkVBLGVBQW1CQSxXQUF3QkE7UUE5RjdDQyxpQkFvSENBO1FBdEJvQkEsZ0JBQVdBLEdBQVhBLFdBQVdBLENBQWFBO1FBRHBDQSxZQUFPQSxHQUFXQSxJQUFJQSxDQUFDQTtRQUU1QkEsSUFBSUEsQ0FBQ0EsV0FBV0E7YUFDYkEsUUFBUUEsRUFBRUE7YUFDVkEsSUFBSUEsQ0FBQ0EsVUFBQUEsS0FBS0E7WUFFVEEsS0FBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsS0FBS0EsQ0FBQ0E7UUFDdkJBLENBQUNBLENBQUNBLENBQUNBO0lBQ1BBLENBQUNBO0lBQ0RELDRCQUFZQSxHQUFaQSxVQUFhQSxLQUFVQTtRQUNyQkUsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0Esd0NBQXNDQSxLQUFPQSxDQUFDQSxDQUFDQTtJQUM3REEsQ0FBQ0E7SUFHREYsMkJBQVdBLEdBQVhBO1FBQ0VHLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLHlDQUF5Q0EsQ0FBQ0EsQ0FBQ0E7UUFDeERBLElBQUlBLENBQUNBLE9BQU9BLEdBQUdBLElBQUlBLENBQUNBO1FBQ3BCQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxRQUFRQSxFQUFFQSxDQUFDQTtJQUM5QkEsQ0FBQ0E7SUFDREgsd0JBQVFBLEdBQVJBO1FBQ0VJLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLHNDQUFzQ0EsQ0FBQ0EsQ0FBQ0E7UUFDckRBLElBQUlBLENBQUNBLE9BQU9BLEdBQUdBLEtBQUtBLENBQUNBO0lBQ3ZCQSxDQUFDQTtJQW5ISEo7UUFBQ0Esb0JBQVNBLENBQUNBO1lBQ1RBLFFBQVFBLEVBQUVBLE9BQU9BO1lBQ2pCQSxRQUFRQSxFQUFFQSxpa0JBbUJUQTtZQUNEQSxNQUFNQSxFQUFFQSxDQUFDQSwyc0NBMkRSQSxDQUFDQTtZQUNGQSxhQUFhQSxFQUFFQSw0QkFBaUJBLENBQUNBLElBQUlBO1lBQ3JDQSxVQUFVQSxFQUFFQSxDQUFDQSwwQkFBaUJBLEVBQUVBLGVBQUlBLEVBQUVBLHNCQUFTQSxFQUFFQSx3QkFBVUEsQ0FBQ0E7U0FDN0RBLENBQUNBO1FBQ0RBLG9CQUFXQSxDQUFDQTtZQUNYQSxFQUFFQSxJQUFJQSxFQUFFQSxHQUFHQSxFQUFFQSxVQUFVQSxFQUFFQSxPQUFPQSxFQUFFQTtZQUNsQ0EsRUFBRUEsSUFBSUEsRUFBRUEsT0FBT0EsRUFBRUEsU0FBU0EsRUFBRUEsc0JBQVNBLEVBQUVBLEVBQUVBLEVBQUVBLFlBQVlBLEVBQUVBO1lBQ3pEQSxFQUFFQSxJQUFJQSxFQUFFQSxpQkFBaUJBLEVBQUVBLFNBQVNBLEVBQUVBLDBCQUFXQSxFQUFFQSxFQUFFQSxFQUFFQSxjQUFjQSxFQUFFQTtZQUN2RUEsRUFBRUEsSUFBSUEsRUFBRUEsaUJBQWlCQSxFQUFFQSxTQUFTQSxFQUFFQSxvQkFBUUEsRUFBRUEsRUFBRUEsRUFBRUEsV0FBV0EsRUFBRUE7WUFDakVBLEVBQUVBLElBQUlBLEVBQUVBLFNBQVNBLEVBQUVBLFNBQVNBLEVBQUVBLG9CQUFRQSxFQUFFQSxFQUFFQSxFQUFFQSxhQUFhQSxFQUFFQTtTQUM1REEsQ0FBQ0E7O2NBeUJEQTtJQUFEQSxZQUFDQTtBQUFEQSxDQXBIQSxBQW9IQ0EsSUFBQTtBQXhCWSxhQUFLLFFBd0JqQixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvdXNlcnMvdXNlcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgTmdJZiwgVmlld0VuY2Fwc3VsYXRpb259IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcbmltcG9ydCB7Um91dGVDb25maWcsIFJPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuXG5pbXBvcnQge1VzZXJzTGlzdH0gZnJvbSAnLi91c2Vyc19saXN0L3VzZXJzX2xpc3QnO1xuaW1wb3J0IHtVc2Vyc0hvbWV9IGZyb20gJy4vdXNlcnNfaG9tZS91c2Vyc19ob21lJztcbmltcG9ydCB7VXNlckRldGFpbHN9IGZyb20gJy4vdXNlcl9kZXRhaWxzL3VzZXJfZGV0YWlscyc7XG5pbXBvcnQge1VzZXJGb3JtfSBmcm9tICcuL3VzZXJfZm9ybS91c2VyX2Zvcm0nO1xuaW1wb3J0IHtVc2VyU2VydmljZX0gZnJvbSAnLi9zZXJ2aWNlcy91c2VyX3NlcnZpY2UnO1xuXG5pbXBvcnQge0xvYWRpbmdCdG59IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvbG9hZGluZ19idG4nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd1c2VycycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGgxPlVzZXJzPC9oMT5cblxuICAgIDxkaXYgKm5nLWlmPVwibG9hZGluZ1wiPkxvYWRpbmcgdXNlcnMgZGF0YTwvZGl2PlxuXG4gICAgPGRpdiAqbmctaWY9XCIhbG9hZGluZ1wiPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgbG9hZGluZy1idG5cbiAgICAgICAgW2xvYWRpbmctdGV4dF09XCInTG9hZGluZyBtb3JlLi4uJ1wiXG4gICAgICAgIFtsb2FkaW5nLW1vcmVdPVwidXNlclNlcnZpY2UubG9hZGluZ1wiXG4gICAgICAgIChzYW1wbGUtY3VzdG9tLWV2ZW50KT1cImV2ZW50SGFuZGxlcigkZXZlbnQpXCJcbiAgICAgICAgKGNsaWNrKT1cInVzZXJTZXJ2aWNlLmdldE1vcmVVc2VycygpXCI+TG9hZCBNb3JlIFVzZXJzPC9idXR0b24+XG5cbiAgICAgIDxhIFtyb3V0ZXItbGlua109XCJbJy4vVXNlci1jcmVhdGUnXVwiPkNyZWF0ZSB1c2VyPC9hPlxuXG4gICAgICA8dXNlcnMtbGlzdCBbdXNlcnNdPVwidXNlclNlcnZpY2UudXNlcnNDYWNoZVwiPjwvdXNlcnMtbGlzdD5cblxuICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuICAgIDwvZGl2PlxuICBgLFxuICBzdHlsZXM6IFtgXG4gICAgdXNlcnMsXG4gICAgdXNlcnMtbGlzdCxcbiAgICB1c2Vycy1ob21lLFxuICAgIHVzZXItZGV0YWlscyB7IGRpc3BsYXk6IGJsb2NrOyB9XG5cbiAgICB1bC51c2Vycy1saXN0IHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHdpZHRoOiAyODBweDtcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgIH1cbiAgICAudXNlcnMtbGlzdCA+IGxpIHtcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICAgIC51c2Vycy1saXN0ID4gbGkuYWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjZWNlY2U7XG4gICAgfVxuICAgIC51c2Vycy1saXN0ID4gbGkgPiBhIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgcGFkZGluZzogM3B4IDA7XG4gICAgICBjb2xvcjogZGltZ3JheTtcbiAgICB9XG4gICAgLnVzZXJzLWxpc3QgPiBsaTpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzbGF0ZWdyYXk7XG4gICAgICBjb2xvcjogZmxvcmFsd2hpdGU7XG4gICAgfVxuICAgIC51c2Vycy1saXN0ID4gbGk6aG92ZXIgPiBhIHtcbiAgICAgIGNvbG9yOiBmbG9yYWx3aGl0ZTtcbiAgICB9XG5cbiAgICAudXNlcnMtbGlzdCA+IGxpID4gYSA+IGltZyB7XG4gICAgICB3aWR0aDogNTBweDtcbiAgICAgIGhlaWdodDogNTBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgICBtYXJnaW46IDAgNXB4IDAgNXB4O1xuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB9XG4gICAgLnVzZXJzLWxpc3QgPiBsaSA+IC5hY3Rpb25zIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogMjBweDtcbiAgICAgIHRvcDogMTVweDtcbiAgICB9XG4gICAgLnVzZXJzLWxpc3QgPiBsaSA+IC5hY3Rpb25zID4gYSB7XG4gICAgICBjb2xvcjogZmxvcmFsd2hpdGU7XG4gICAgfVxuICAgIC51c2Vycy1saXN0ID4gbGk6aG92ZXIgPiAuYWN0aW9ucyB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICAudXNlci1kZXRhaWxzIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAyODBweDtcbiAgICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgICB9XG4gIGBdLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVMsIE5nSWYsIFVzZXJzTGlzdCwgTG9hZGluZ0J0bl1cbn0pXG5AUm91dGVDb25maWcoW1xuICB7IHBhdGg6ICcvJywgcmVkaXJlY3RUbzogJy9ob21lJyB9LFxuICB7IHBhdGg6ICcvaG9tZScsIGNvbXBvbmVudDogVXNlcnNIb21lLCBhczogJ1VzZXJzLWhvbWUnIH0sXG4gIHsgcGF0aDogJy9zaG93Lzp1c2VybmFtZScsIGNvbXBvbmVudDogVXNlckRldGFpbHMsIGFzOiAnVXNlci1kZXRhaWxzJyB9LFxuICB7IHBhdGg6ICcvZWRpdC86dXNlcm5hbWUnLCBjb21wb25lbnQ6IFVzZXJGb3JtLCBhczogJ1VzZXItZWRpdCcgfSxcbiAgeyBwYXRoOiAnL2NyZWF0ZScsIGNvbXBvbmVudDogVXNlckZvcm0sIGFzOiAnVXNlci1jcmVhdGUnIH1cbl0pXG5leHBvcnQgY2xhc3MgVXNlcnMge1xuICBwdWJsaWMgbG9hZGluZzpib29sZWFuID0gdHJ1ZTtcbiAgY29uc3RydWN0b3IocHVibGljIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSkge1xuICAgIHRoaXMudXNlclNlcnZpY2VcbiAgICAgIC5nZXRVc2VycygpXG4gICAgICAudGhlbih1c2VycyA9PiB7XG4gICAgICAgIC8vIFRvIGJlIHJlbW92ZWQgd2hlbiBjb21wb25lbnQgYWN0aXZhdGlvbiB3aWxsIHdvcmsuXG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgfSk7XG4gIH1cbiAgZXZlbnRIYW5kbGVyKHZhbHVlOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZyhgRXhhbXBsZSBvZiBoYW5kbGluZyBjdXN0b20gZXZlbnRzOiAke3ZhbHVlfWApO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIE5vdCBzdXBwb3J0ZWQgYnkgbmcyIHJvdXRlciB5ZXQuXG4gIGNhbkFjdGl2YXRlKCkge1xuICAgIGNvbnNvbGUuaW5mbygnQ29tcG9uZW50IHJvdXRlciBjYW5BY3RpdmF0ZSBub3cgd29ya3MhJyk7XG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLmdldFVzZXJzKCk7XG4gIH1cbiAgYWN0aXZhdGUoKSB7XG4gICAgY29uc29sZS5pbmZvKCdDb21wb25lbnQgcm91dGVyIGFjdGl2YXRlIG5vdyB3b3JrcyEnKTtcbiAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9