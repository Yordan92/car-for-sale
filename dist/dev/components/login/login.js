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
var user_1 = require('../../services/user');
var angular2_2 = require('angular2/angular2');
var LogIn = (function () {
    function LogIn(user) {
        this.user = user;
        debugger;
    }
    LogIn.prototype.loginUser = function (data) {
        this.user.getPerson(data.email, data.password);
    };
    LogIn = __decorate([
        angular2_1.Component({
            selector: 'login'
        }),
        angular2_1.View({
            template: "\n   <h1>Log In</h1>\n   <form class=\"top-bar flex-rows\" #f=\"form\" (ng-submit)=\"loginUser(f.value)\">\n   \t<div class=\"flex-fill top-bar\">\n   \t\t<span class=\"flex-fill\">email</span>\n   \t\t<input  ng-control=\"email\" class=\"flex-fill\" type=\"text\"/>\n   \t</div>\n\n   \t<div class=\"flex-fill top-bar\">\n   \t\t<span class=\"flex-fill\">Password</span>\n   \t\t<input ng-control=\"password\" class=\"flex-fill\" type=\"password\">\n   \t</div>\n   \t<input type=\"submit\"/>\n   \t<button>Close</button>\n   </form>\n\t",
            styles: ["\n      .ivan {\n\t\n      }\n    "],
            directives: [angular2_2.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [user_1.User])
    ], LogIn);
    return LogIn;
})();
exports.LogIn = LogIn;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbG9naW4vbG9naW4udHMiXSwibmFtZXMiOlsiTG9nSW4iLCJMb2dJbi5jb25zdHJ1Y3RvciIsIkxvZ0luLmxvZ2luVXNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx5QkFBb0MsbUJBQW1CLENBQUMsQ0FBQTtBQUV4RCxxQkFBbUIscUJBQXFCLENBQUMsQ0FBQTtBQUl6Qyx5QkFBc0UsbUJBQW1CLENBQUMsQ0FBQTtBQUMxRjtJQThCQ0EsZUFBbUJBLElBQVVBO1FBQVZDLFNBQUlBLEdBQUpBLElBQUlBLENBQU1BO1FBQzVCQSxRQUFRQSxDQUFDQTtJQUNWQSxDQUFDQTtJQUVERCx5QkFBU0EsR0FBVEEsVUFBVUEsSUFBSUE7UUFDYkUsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsRUFBRUEsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0E7SUFDaERBLENBQUNBO0lBcENGRjtRQUFDQSxvQkFBU0EsQ0FBQ0E7WUFDVkEsUUFBUUEsRUFBRUEsT0FBT0E7U0FDakJBLENBQUNBO1FBRURBLGVBQUlBLENBQUNBO1lBQ0xBLFFBQVFBLEVBQUVBLDRoQkFlVEE7WUFDRUEsTUFBTUEsRUFBRUEsQ0FBQ0Esb0NBSVJBLENBQUNBO1lBQ0ZBLFVBQVVBLEVBQUVBLENBQUNBLDBCQUFlQSxDQUFDQTtTQUNoQ0EsQ0FBQ0E7O2NBVURBO0lBQURBLFlBQUNBO0FBQURBLENBckNBLEFBcUNDQSxJQUFBO0FBUlksYUFBSyxRQVFqQixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvbG9naW4vbG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgVmlldywgTmdJZn0gZnJvbSAnYW5ndWxhcjIvYW5ndWxhcjInO1xuaW1wb3J0IHtSb3V0ZUNvbmZpZywgUk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge1VzZXJ9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3VzZXInO1xuaW1wb3J0IHtDdXJyZW50VXNlcn0gZnJvbSAnLi4vLi4vc2VydmljZXMvY3VycmVudF91c2VyJztcbi8vIGltcG9ydCB7U2lnblZhbGlkYXRvcnN9IGZyb20gJ3ZhbGlkYXRvcnMvc2lnblZhbGlkYXRvcnMnO1xuLy8gaW1wb3J0IHtOZ0NvbnRyb2wsIE5nRm9ybSwgQ09SRV9ESVJFQ1RJVkVTLCBGT1JNX0RJUkVDVElWRVMsIEZPUk1fUFJPVklERVJTLCBOR19WQUxJREFUT1JTfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xuaW1wb3J0IHsgRk9STV9ESVJFQ1RJVkVTLCBGb3JtQnVpbGRlciwgQ29udHJvbEdyb3VwLCBWYWxpZGF0b3JzfSBmcm9tICdhbmd1bGFyMi9hbmd1bGFyMic7XG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdsb2dpbidcbn0pXG5cbkBWaWV3KHtcblx0dGVtcGxhdGU6IGBcbiAgIDxoMT5Mb2cgSW48L2gxPlxuICAgPGZvcm0gY2xhc3M9XCJ0b3AtYmFyIGZsZXgtcm93c1wiICNmPVwiZm9ybVwiIChuZy1zdWJtaXQpPVwibG9naW5Vc2VyKGYudmFsdWUpXCI+XG4gICBcdDxkaXYgY2xhc3M9XCJmbGV4LWZpbGwgdG9wLWJhclwiPlxuICAgXHRcdDxzcGFuIGNsYXNzPVwiZmxleC1maWxsXCI+ZW1haWw8L3NwYW4+XG4gICBcdFx0PGlucHV0ICBuZy1jb250cm9sPVwiZW1haWxcIiBjbGFzcz1cImZsZXgtZmlsbFwiIHR5cGU9XCJ0ZXh0XCIvPlxuICAgXHQ8L2Rpdj5cblxuICAgXHQ8ZGl2IGNsYXNzPVwiZmxleC1maWxsIHRvcC1iYXJcIj5cbiAgIFx0XHQ8c3BhbiBjbGFzcz1cImZsZXgtZmlsbFwiPlBhc3N3b3JkPC9zcGFuPlxuICAgXHRcdDxpbnB1dCBuZy1jb250cm9sPVwicGFzc3dvcmRcIiBjbGFzcz1cImZsZXgtZmlsbFwiIHR5cGU9XCJwYXNzd29yZFwiPlxuICAgXHQ8L2Rpdj5cbiAgIFx0PGlucHV0IHR5cGU9XCJzdWJtaXRcIi8+XG4gICBcdDxidXR0b24+Q2xvc2U8L2J1dHRvbj5cbiAgIDwvZm9ybT5cblx0YCxcbiAgICBzdHlsZXM6IFtgXG4gICAgICAuaXZhbiB7XG5cdFxuICAgICAgfVxuICAgIGBdLFxuICAgIGRpcmVjdGl2ZXM6IFtGT1JNX0RJUkVDVElWRVNdXG59KVxuLy8gQENhbkFjdGl2YXRlKChuZXh0LCBwcmV2KSA9PiB7IGNvbnNvbGUubG9nKG5leHQsIHByZXYpO3JldHVybiBmYWxzZTt9KVxuZXhwb3J0IGNsYXNzIExvZ0luIHtcblx0Y29uc3RydWN0b3IocHVibGljIHVzZXI6IFVzZXIpIHtcblx0XHRkZWJ1Z2dlcjtcblx0fVxuXHRcblx0bG9naW5Vc2VyKGRhdGEpOnZvaWQge1xuXHRcdHRoaXMudXNlci5nZXRQZXJzb24oZGF0YS5lbWFpbCwgZGF0YS5wYXNzd29yZCk7XG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==