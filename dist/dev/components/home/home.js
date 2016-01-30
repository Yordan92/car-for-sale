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
var User_1 = require('services/User');
var Home = (function () {
    function Home(user) {
        this.currUser = user;
    }
    Home.prototype.sendRequest = function () {
        this.currUser.getPerson('ivan', 'ab');
    };
    Home = __decorate([
        angular2_1.Component({
            selector: 'home',
            viewBindings: [User_1.User]
        }),
        angular2_1.View({
            template: "\n   <h1>Howdy!</h1>\n\n   <h2>\n     Gratz!\n   </h2>\n\n   <p class=\"note\">\n     Your deployment of Angular 2 Seed worked perfectly!\n     Click <em>about (above)</em> to get your reward!\n   </p>\n   <button (click)=sendRequest()>send Test Request</button>\n\t",
            styles: ["\n      .note {\n        color: #a8a8a8;\n      }\n    "]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof User_1.User !== 'undefined' && User_1.User) === 'function' && _a) || Object])
    ], Home);
    return Home;
    var _a;
})();
exports.Home = Home;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaG9tZS9ob21lLnRzIl0sIm5hbWVzIjpbIkhvbWUiLCJIb21lLmNvbnN0cnVjdG9yIiwiSG9tZS5zZW5kUmVxdWVzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx5QkFBOEIsbUJBQW1CLENBQUMsQ0FBQTtBQUVsRCxxQkFBbUIsZUFBZSxDQUFDLENBQUE7QUFDbkM7SUEyQkNBLGNBQWFBLElBQVVBO1FBQ3RCQyxJQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxJQUFJQSxDQUFDQTtJQUN0QkEsQ0FBQ0E7SUFDREQsMEJBQVdBLEdBQVhBO1FBQ0NFLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLFNBQVNBLENBQUNBLE1BQU1BLEVBQUNBLElBQUlBLENBQUNBLENBQUNBO0lBQ3RDQSxDQUFDQTtJQWhDRkY7UUFBQ0Esb0JBQVNBLENBQUNBO1lBQ1ZBLFFBQVFBLEVBQUVBLE1BQU1BO1lBQ2hCQSxZQUFZQSxFQUFFQSxDQUFDQSxXQUFJQSxDQUFDQTtTQUNwQkEsQ0FBQ0E7UUFFREEsZUFBSUEsQ0FBQ0E7WUFDTEEsUUFBUUEsRUFBRUEsNFFBWVRBO1lBQ0VBLE1BQU1BLEVBQUVBLENBQUNBLHlEQUlSQSxDQUFDQTtTQUNMQSxDQUFDQTs7YUFTREE7SUFBREEsV0FBQ0E7O0FBQURBLENBakNBLEFBaUNDQSxJQUFBO0FBUFksWUFBSSxPQU9oQixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvaG9tZS9ob21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFZpZXd9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcbmltcG9ydCB7Q2FuQWN0aXZhdGV9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge1VzZXJ9IGZyb20gJ3NlcnZpY2VzL1VzZXInO1xuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnaG9tZScsXG5cdHZpZXdCaW5kaW5nczogW1VzZXJdXHRcbn0pXG5cbkBWaWV3KHtcblx0dGVtcGxhdGU6IGBcbiAgIDxoMT5Ib3dkeSE8L2gxPlxuXG4gICA8aDI+XG4gICAgIEdyYXR6IVxuICAgPC9oMj5cblxuICAgPHAgY2xhc3M9XCJub3RlXCI+XG4gICAgIFlvdXIgZGVwbG95bWVudCBvZiBBbmd1bGFyIDIgU2VlZCB3b3JrZWQgcGVyZmVjdGx5IVxuICAgICBDbGljayA8ZW0+YWJvdXQgKGFib3ZlKTwvZW0+IHRvIGdldCB5b3VyIHJld2FyZCFcbiAgIDwvcD5cbiAgIDxidXR0b24gKGNsaWNrKT1zZW5kUmVxdWVzdCgpPnNlbmQgVGVzdCBSZXF1ZXN0PC9idXR0b24+XG5cdGAsXG4gICAgc3R5bGVzOiBbYFxuICAgICAgLm5vdGUge1xuICAgICAgICBjb2xvcjogI2E4YThhODtcbiAgICAgIH1cbiAgICBgXVxufSlcbi8vIEBDYW5BY3RpdmF0ZSgobmV4dCwgcHJldikgPT4geyBjb25zb2xlLmxvZyhuZXh0LCBwcmV2KTtyZXR1cm4gZmFsc2U7fSlcbmV4cG9ydCBjbGFzcyBIb21lIHtcblx0Y29uc3RydWN0b3IgKHVzZXI6IFVzZXIpIHtcblx0XHR0aGlzLmN1cnJVc2VyID0gdXNlcjtcblx0fVxuXHRzZW5kUmVxdWVzdCgpOmFueSB7XG5cdFx0dGhpcy5jdXJyVXNlci5nZXRQZXJzb24oJ2l2YW4nLCdhYicpO1xuXHR9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=