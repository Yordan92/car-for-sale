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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var user_service_1 = require('../services/user_service');
var UserDetails = (function () {
    function UserDetails(routeParams, userService) {
        var _this = this;
        this.userService = userService;
        var username = routeParams.params.username;
        userService
            .getUser(username)
            .then(function (user) { return _this.user = user; });
    }
    UserDetails = __decorate([
        angular2_1.Component({
            selector: 'user-details',
            template: "\n    <div class=\"user-details\">\n      <div *ng-if=\"!user\">No user found</div>\n\n      <div *ng-if=\"user\">\n        <h1>User Details</h1>\n        <p>\n          Firstname: {{ user.name.first }}\n        </p>\n        <p>\n          Lastname: {{ user.name.last }}\n        </p>\n        <p>\n          <img [src]=\"user.picture.medium\" alt=\"\" />\n        </p>\n        <p>\n          <a [router-link]=\"['../User-edit', { username: user.username }]\">Edit</a>\n        </p>\n      </div>\n    </div>\n  ",
            directives: [angular2_1.NgIf, router_1.RouterLink]
        }),
        __param(0, angular2_1.Inject(router_1.RouteParams)), 
        __metadata('design:paramtypes', [Object, user_service_1.UserService])
    ], UserDetails);
    return UserDetails;
})();
exports.UserDetails = UserDetails;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdXNlcnMvdXNlcl9kZXRhaWxzL3VzZXJfZGV0YWlscy50cyJdLCJuYW1lcyI6WyJVc2VyRGV0YWlscyIsIlVzZXJEZXRhaWxzLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHlCQUFzQyxtQkFBbUIsQ0FBQyxDQUFBO0FBQzFELHVCQUFzQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ3hELDZCQUFpQywwQkFBMEIsQ0FBQyxDQUFBO0FBRTVEO0lBMkJFQSxxQkFBaUNBLFdBQVdBLEVBQ3hCQSxXQUF3QkE7UUE1QjlDQyxpQkFrQ0NBO1FBTnFCQSxnQkFBV0EsR0FBWEEsV0FBV0EsQ0FBYUE7UUFDMUNBLElBQUlBLFFBQVFBLEdBQUdBLFdBQVdBLENBQUNBLE1BQU1BLENBQUNBLFFBQVFBLENBQUNBO1FBQzNDQSxXQUFXQTthQUNSQSxPQUFPQSxDQUFDQSxRQUFRQSxDQUFDQTthQUNqQkEsSUFBSUEsQ0FBQ0EsVUFBQUEsSUFBSUEsSUFBSUEsT0FBQUEsS0FBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsSUFBSUEsRUFBaEJBLENBQWdCQSxDQUFDQSxDQUFDQTtJQUNwQ0EsQ0FBQ0E7SUFqQ0hEO1FBQUNBLG9CQUFTQSxDQUFDQTtZQUNUQSxRQUFRQSxFQUFFQSxjQUFjQTtZQUN4QkEsUUFBUUEsRUFBRUEsb2dCQW9CVEE7WUFDREEsVUFBVUEsRUFBRUEsQ0FBQ0EsZUFBSUEsRUFBRUEsbUJBQVVBLENBQUNBO1NBQy9CQSxDQUFDQTtRQUdZQSxXQUFDQSxpQkFBTUEsQ0FBQ0Esb0JBQVdBLENBQUNBLENBQUFBOztvQkFPakNBO0lBQURBLGtCQUFDQTtBQUFEQSxDQWxDQSxBQWtDQ0EsSUFBQTtBQVRZLG1CQUFXLGNBU3ZCLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy91c2Vycy91c2VyX2RldGFpbHMvdXNlcl9kZXRhaWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEluamVjdCwgTmdJZn0gZnJvbSAnYW5ndWxhcjIvYW5ndWxhcjInO1xuaW1wb3J0IHtSb3V0ZVBhcmFtcywgUm91dGVyTGlua30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7VXNlclNlcnZpY2UsIElVc2VyfSBmcm9tICcuLi9zZXJ2aWNlcy91c2VyX3NlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd1c2VyLWRldGFpbHMnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJ1c2VyLWRldGFpbHNcIj5cbiAgICAgIDxkaXYgKm5nLWlmPVwiIXVzZXJcIj5ObyB1c2VyIGZvdW5kPC9kaXY+XG5cbiAgICAgIDxkaXYgKm5nLWlmPVwidXNlclwiPlxuICAgICAgICA8aDE+VXNlciBEZXRhaWxzPC9oMT5cbiAgICAgICAgPHA+XG4gICAgICAgICAgRmlyc3RuYW1lOiB7eyB1c2VyLm5hbWUuZmlyc3QgfX1cbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICBMYXN0bmFtZToge3sgdXNlci5uYW1lLmxhc3QgfX1cbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICA8aW1nIFtzcmNdPVwidXNlci5waWN0dXJlLm1lZGl1bVwiIGFsdD1cIlwiIC8+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgPGEgW3JvdXRlci1saW5rXT1cIlsnLi4vVXNlci1lZGl0JywgeyB1c2VybmFtZTogdXNlci51c2VybmFtZSB9XVwiPkVkaXQ8L2E+XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgLFxuICBkaXJlY3RpdmVzOiBbTmdJZiwgUm91dGVyTGlua11cbn0pXG5leHBvcnQgY2xhc3MgVXNlckRldGFpbHMge1xuICB1c2VyOiBJVXNlcjtcbiAgY29uc3RydWN0b3IoQEluamVjdChSb3V0ZVBhcmFtcykgcm91dGVQYXJhbXMsXG4gICAgICAgICAgICAgIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlKSB7XG4gICAgbGV0IHVzZXJuYW1lID0gcm91dGVQYXJhbXMucGFyYW1zLnVzZXJuYW1lO1xuICAgIHVzZXJTZXJ2aWNlXG4gICAgICAuZ2V0VXNlcih1c2VybmFtZSlcbiAgICAgIC50aGVuKHVzZXIgPT4gdGhpcy51c2VyID0gdXNlcik7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==