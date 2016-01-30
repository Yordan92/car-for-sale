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
var UserForm = (function () {
    function UserForm(routeParams, userService) {
        var _this = this;
        this.routeParams = routeParams;
        this.userService = userService;
        this.username = this.routeParams.params ? this.routeParams.params.username : undefined;
        if (this.username) {
            userService.getUser(this.username)
                .then(function (user) { return _this.user = user; });
        }
        else {
            this.user = { name: { first: '', last: '' } };
        }
    }
    UserForm.prototype.onSave = function (model) {
        if (this.username) {
            this.user.name.first = model.name.first;
            this.user.name.last = model.name.last;
            return;
        }
        model.picture = {};
        this.userService.saveUser(model);
        return false;
    };
    UserForm = __decorate([
        angular2_1.Component({
            selector: 'user-form',
            template: "\n    <h1>User Form</h1>\n\n    <!-- Wait for user when defered -->\n    <div *ng-if=\"user\">\n      <form novalidate (submit)=\"onSave(f.value)\" #f=\"form\">\n        <div ng-control-group=\"name\">\n          <p>\n            <label>Firstname</label>\n            <input type=\"text\"\n                   ng-control=\"first\"\n                   [ng-model]=\"user.name.first\"\n                   required>\n          </p>\n          <p>\n            <label>Lastname</label>\n            <input type=\"text\"\n                   ng-control=\"last\"\n                   [ng-model]=\"user.name.last\"\n                   required>\n          </p>\n        </div>\n        <p>\n          <button type=\"submit\"\n                  [disabled]=\"!f.form.valid || f.form.pristine\">Save</button>\n        </p>\n      </form>\n    </div>\n  ",
            directives: [angular2_1.NgIf, angular2_1.FORM_DIRECTIVES]
        }),
        __param(0, angular2_1.Inject(router_1.RouteParams)), 
        __metadata('design:paramtypes', [Object, user_service_1.UserService])
    ], UserForm);
    return UserForm;
})();
exports.UserForm = UserForm;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdXNlcnMvdXNlcl9mb3JtL3VzZXJfZm9ybS50cyJdLCJuYW1lcyI6WyJVc2VyRm9ybSIsIlVzZXJGb3JtLmNvbnN0cnVjdG9yIiwiVXNlckZvcm0ub25TYXZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHlCQUF1RCxtQkFBbUIsQ0FBQyxDQUFBO0FBQzNFLHVCQUEwQixpQkFBaUIsQ0FBQyxDQUFBO0FBQzVDLDZCQUFpQywwQkFBMEIsQ0FBQyxDQUFBO0FBRTVEO0lBb0NFQSxrQkFBeUNBLFdBQVdBLEVBQ2hDQSxXQUF3QkE7UUFyQzlDQyxpQkEyRENBO1FBdkIwQ0EsZ0JBQVdBLEdBQVhBLFdBQVdBLENBQUFBO1FBQ2hDQSxnQkFBV0EsR0FBWEEsV0FBV0EsQ0FBYUE7UUFGNUNBLGFBQVFBLEdBQVdBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLE1BQU1BLEdBQUdBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLE1BQU1BLENBQUNBLFFBQVFBLEdBQUdBLFNBQVNBLENBQUNBO1FBR3hGQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNsQkEsV0FBV0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0E7aUJBQy9CQSxJQUFJQSxDQUFDQSxVQUFBQSxJQUFJQSxJQUFJQSxPQUFBQSxLQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxJQUFJQSxFQUFoQkEsQ0FBZ0JBLENBQUNBLENBQUNBO1FBQ3BDQSxDQUFDQTtRQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUVOQSxJQUFJQSxDQUFDQSxJQUFJQSxHQUFVQSxFQUFFQSxJQUFJQSxFQUFFQSxFQUFFQSxLQUFLQSxFQUFFQSxFQUFFQSxFQUFFQSxJQUFJQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxDQUFDQTtRQUN2REEsQ0FBQ0E7SUFDSEEsQ0FBQ0E7SUFDREQseUJBQU1BLEdBQU5BLFVBQU9BLEtBQUtBO1FBQ1ZFLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLENBQUNBLENBQUNBO1lBQ2xCQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxLQUFLQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQTtZQUN4Q0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsS0FBS0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7WUFDdENBLE1BQU1BLENBQUNBO1FBQ1RBLENBQUNBO1FBSURBLEtBQUtBLENBQUNBLE9BQU9BLEdBQUdBLEVBQUVBLENBQUNBO1FBQ25CQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxRQUFRQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtRQUNqQ0EsTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0E7SUFDZkEsQ0FBQ0E7SUExREhGO1FBQUNBLG9CQUFTQSxDQUFDQTtZQUNUQSxRQUFRQSxFQUFFQSxXQUFXQTtZQUNyQkEsUUFBUUEsRUFBRUEsdzBCQTRCVEE7WUFDREEsVUFBVUEsRUFBRUEsQ0FBQ0EsZUFBSUEsRUFBRUEsMEJBQWVBLENBQUNBO1NBQ3BDQSxDQUFDQTtRQUlZQSxXQUFDQSxpQkFBTUEsQ0FBQ0Esb0JBQVdBLENBQUNBLENBQUFBOztpQkF1QmpDQTtJQUFEQSxlQUFDQTtBQUFEQSxDQTNEQSxBQTJEQ0EsSUFBQTtBQTFCWSxnQkFBUSxXQTBCcEIsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL3VzZXJzL3VzZXJfZm9ybS91c2VyX2Zvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgTmdJZiwgSW5qZWN0LCBGT1JNX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcbmltcG9ydCB7Um91dGVQYXJhbXN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge1VzZXJTZXJ2aWNlLCBJVXNlcn0gZnJvbSAnLi4vc2VydmljZXMvdXNlcl9zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndXNlci1mb3JtJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8aDE+VXNlciBGb3JtPC9oMT5cblxuICAgIDwhLS0gV2FpdCBmb3IgdXNlciB3aGVuIGRlZmVyZWQgLS0+XG4gICAgPGRpdiAqbmctaWY9XCJ1c2VyXCI+XG4gICAgICA8Zm9ybSBub3ZhbGlkYXRlIChzdWJtaXQpPVwib25TYXZlKGYudmFsdWUpXCIgI2Y9XCJmb3JtXCI+XG4gICAgICAgIDxkaXYgbmctY29udHJvbC1ncm91cD1cIm5hbWVcIj5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIDxsYWJlbD5GaXJzdG5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICBuZy1jb250cm9sPVwiZmlyc3RcIlxuICAgICAgICAgICAgICAgICAgIFtuZy1tb2RlbF09XCJ1c2VyLm5hbWUuZmlyc3RcIlxuICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIDxsYWJlbD5MYXN0bmFtZTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgIG5nLWNvbnRyb2w9XCJsYXN0XCJcbiAgICAgICAgICAgICAgICAgICBbbmctbW9kZWxdPVwidXNlci5uYW1lLmxhc3RcIlxuICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxwPlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiIWYuZm9ybS52YWxpZCB8fCBmLmZvcm0ucHJpc3RpbmVcIj5TYXZlPC9idXR0b24+XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgZGlyZWN0aXZlczogW05nSWYsIEZPUk1fRElSRUNUSVZFU11cbn0pXG5leHBvcnQgY2xhc3MgVXNlckZvcm0ge1xuICB1c2VyOiBJVXNlcjtcbiAgdXNlcm5hbWU6IHN0cmluZyA9IHRoaXMucm91dGVQYXJhbXMucGFyYW1zID8gdGhpcy5yb3V0ZVBhcmFtcy5wYXJhbXMudXNlcm5hbWUgOiB1bmRlZmluZWQ7XG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoUm91dGVQYXJhbXMpIHByaXZhdGUgcm91dGVQYXJhbXMsXG4gICAgICAgICAgICAgIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlKSB7XG4gICAgaWYgKHRoaXMudXNlcm5hbWUpIHtcbiAgICAgIHVzZXJTZXJ2aWNlLmdldFVzZXIodGhpcy51c2VybmFtZSlcbiAgICAgICAgLnRoZW4odXNlciA9PiB0aGlzLnVzZXIgPSB1c2VyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVE9ETzogYWRkIFVzZXIgbW9kZWxcbiAgICAgIHRoaXMudXNlciA9IDxJVXNlcj57IG5hbWU6IHsgZmlyc3Q6ICcnLCBsYXN0OiAnJyB9IH07XG4gICAgfVxuICB9XG4gIG9uU2F2ZShtb2RlbCkge1xuICAgIGlmICh0aGlzLnVzZXJuYW1lKSB7XG4gICAgICB0aGlzLnVzZXIubmFtZS5maXJzdCA9IG1vZGVsLm5hbWUuZmlyc3Q7XG4gICAgICB0aGlzLnVzZXIubmFtZS5sYXN0ID0gbW9kZWwubmFtZS5sYXN0O1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBGaXggYXMgdXNlci1kZXRhaWxzIGV4cGVjdCBhIHBpY3R1cmUgcHJvcGVydHkuXG4gICAgLy8gbmcyIGRvZXMgbm90IGZhaWwgc2lsZW50bHkgd2hlbiBhIHByb3BlcnR5IGlzbid0XG4gICAgLy8gZGVmaW5lZCBvbiBhIGJpbmRpbmcuXG4gICAgbW9kZWwucGljdHVyZSA9IHt9O1xuICAgIHRoaXMudXNlclNlcnZpY2Uuc2F2ZVVzZXIobW9kZWwpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9