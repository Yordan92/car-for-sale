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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbG9naW4vbG9naW4udHMiXSwibmFtZXMiOlsiTG9nSW4iLCJMb2dJbi5jb25zdHJ1Y3RvciIsIkxvZ0luLmxvZ2luVXNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx5QkFBb0MsbUJBQW1CLENBQUMsQ0FBQTtBQUd4RCxxQkFBbUIscUJBQXFCLENBQUMsQ0FBQTtBQUl6Qyx5QkFBc0UsbUJBQW1CLENBQUMsQ0FBQTtBQUMxRjtJQThCQ0EsZUFBbUJBLElBQVVBO1FBQVZDLFNBQUlBLEdBQUpBLElBQUlBLENBQU1BO1FBQzVCQSxRQUFRQSxDQUFDQTtJQUNWQSxDQUFDQTtJQUVERCx5QkFBU0EsR0FBVEEsVUFBVUEsSUFBSUE7UUFDYkUsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsRUFBRUEsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0E7SUFDaERBLENBQUNBO0lBcENGRjtRQUFDQSxvQkFBU0EsQ0FBQ0E7WUFDVkEsUUFBUUEsRUFBRUEsT0FBT0E7U0FDakJBLENBQUNBO1FBRURBLGVBQUlBLENBQUNBO1lBQ0xBLFFBQVFBLEVBQUVBLDRoQkFlVEE7WUFDRUEsTUFBTUEsRUFBRUEsQ0FBQ0Esb0NBSVJBLENBQUNBO1lBQ0ZBLFVBQVVBLEVBQUVBLENBQUNBLDBCQUFlQSxDQUFDQTtTQUNoQ0EsQ0FBQ0E7O2NBVURBO0lBQURBLFlBQUNBO0FBQURBLENBckNBLEFBcUNDQSxJQUFBO0FBUlksYUFBSyxRQVFqQixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvbG9naW4vbG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgVmlldywgTmdJZn0gZnJvbSAnYW5ndWxhcjIvYW5ndWxhcjInO1xuaW1wb3J0IHtSb3V0ZUNvbmZpZywgUk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge0luamVjdH0gZnJvbSAnYW5ndWxhcjIvYW5ndWxhcjInO1xuaW1wb3J0IHtVc2VyfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91c2VyJztcbmltcG9ydCB7Q3VycmVudFVzZXJ9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2N1cnJlbnRfdXNlcic7XG4vLyBpbXBvcnQge1NpZ25WYWxpZGF0b3JzfSBmcm9tICd2YWxpZGF0b3JzL3NpZ25WYWxpZGF0b3JzJztcbi8vIGltcG9ydCB7TmdDb250cm9sLCBOZ0Zvcm0sIENPUkVfRElSRUNUSVZFUywgRk9STV9ESVJFQ1RJVkVTLCBGT1JNX1BST1ZJREVSUywgTkdfVkFMSURBVE9SU30gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcbmltcG9ydCB7IEZPUk1fRElSRUNUSVZFUywgRm9ybUJ1aWxkZXIsIENvbnRyb2xHcm91cCwgVmFsaWRhdG9yc30gZnJvbSAnYW5ndWxhcjIvYW5ndWxhcjInO1xuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnbG9naW4nXG59KVxuXG5AVmlldyh7XG5cdHRlbXBsYXRlOiBgXG4gICA8aDE+TG9nIEluPC9oMT5cbiAgIDxmb3JtIGNsYXNzPVwidG9wLWJhciBmbGV4LXJvd3NcIiAjZj1cImZvcm1cIiAobmctc3VibWl0KT1cImxvZ2luVXNlcihmLnZhbHVlKVwiPlxuICAgXHQ8ZGl2IGNsYXNzPVwiZmxleC1maWxsIHRvcC1iYXJcIj5cbiAgIFx0XHQ8c3BhbiBjbGFzcz1cImZsZXgtZmlsbFwiPmVtYWlsPC9zcGFuPlxuICAgXHRcdDxpbnB1dCAgbmctY29udHJvbD1cImVtYWlsXCIgY2xhc3M9XCJmbGV4LWZpbGxcIiB0eXBlPVwidGV4dFwiLz5cbiAgIFx0PC9kaXY+XG5cbiAgIFx0PGRpdiBjbGFzcz1cImZsZXgtZmlsbCB0b3AtYmFyXCI+XG4gICBcdFx0PHNwYW4gY2xhc3M9XCJmbGV4LWZpbGxcIj5QYXNzd29yZDwvc3Bhbj5cbiAgIFx0XHQ8aW5wdXQgbmctY29udHJvbD1cInBhc3N3b3JkXCIgY2xhc3M9XCJmbGV4LWZpbGxcIiB0eXBlPVwicGFzc3dvcmRcIj5cbiAgIFx0PC9kaXY+XG4gICBcdDxpbnB1dCB0eXBlPVwic3VibWl0XCIvPlxuICAgXHQ8YnV0dG9uPkNsb3NlPC9idXR0b24+XG4gICA8L2Zvcm0+XG5cdGAsXG4gICAgc3R5bGVzOiBbYFxuICAgICAgLml2YW4ge1xuXHRcbiAgICAgIH1cbiAgICBgXSxcbiAgICBkaXJlY3RpdmVzOiBbRk9STV9ESVJFQ1RJVkVTXVxufSlcbi8vIEBDYW5BY3RpdmF0ZSgobmV4dCwgcHJldikgPT4geyBjb25zb2xlLmxvZyhuZXh0LCBwcmV2KTtyZXR1cm4gZmFsc2U7fSlcbmV4cG9ydCBjbGFzcyBMb2dJbiB7XG5cdGNvbnN0cnVjdG9yKHB1YmxpYyB1c2VyOiBVc2VyKSB7XG5cdFx0ZGVidWdnZXI7XG5cdH1cblx0XG5cdGxvZ2luVXNlcihkYXRhKTp2b2lkIHtcblx0XHR0aGlzLnVzZXIuZ2V0UGVyc29uKGRhdGEuZW1haWwsIGRhdGEucGFzc3dvcmQpO1xuXHR9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=