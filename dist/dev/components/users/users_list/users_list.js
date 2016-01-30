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
var set_active_1 = require('../../../directives/set_active');
var UsersList = (function () {
    function UsersList() {
    }
    UsersList = __decorate([
        angular2_1.Component({
            selector: 'users-list',
            properties: ['users'],
            template: "\n    <ul class=\"users-list\"><!-- TODO: add set-active back here -->\n      <li *ng-for=\"#user of users\">\n        <!-- Component loading works but browser Location is not updated -->\n        <a [router-link]=\"['./User-details', { username: user.username }]\">\n          <img [src]=\"user.picture.medium\" alt=\"{{ user.username }}'s picture\" />\n          {{ user.name.last }}, {{ user.name.first }}</a>\n        <div class=\"actions\">\n          <a [router-link]=\"['./User-edit', { username: user.username }]\">edit</a>\n        </div>\n      </li>\n    </ul>\n  ",
            directives: [router_1.RouterLink, angular2_1.NgFor, set_active_1.SetActive]
        }), 
        __metadata('design:paramtypes', [])
    ], UsersList);
    return UsersList;
})();
exports.UsersList = UsersList;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdXNlcnMvdXNlcnNfbGlzdC91c2Vyc19saXN0LnRzIl0sIm5hbWVzIjpbIlVzZXJzTGlzdCIsIlVzZXJzTGlzdC5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx5QkFBK0IsbUJBQW1CLENBQUMsQ0FBQTtBQUNuRCx1QkFBeUIsaUJBQWlCLENBQUMsQ0FBQTtBQUUzQywyQkFBd0IsZ0NBQWdDLENBQUMsQ0FBQTtBQUV6RDtJQUFBQTtJQWtCd0JDLENBQUNBO0lBbEJ6QkQ7UUFBQ0Esb0JBQVNBLENBQUNBO1lBQ1RBLFFBQVFBLEVBQUVBLFlBQVlBO1lBQ3RCQSxVQUFVQSxFQUFFQSxDQUFDQSxPQUFPQSxDQUFDQTtZQUNyQkEsUUFBUUEsRUFBRUEsaWtCQVlUQTtZQUNEQSxVQUFVQSxFQUFFQSxDQUFDQSxtQkFBVUEsRUFBRUEsZ0JBQUtBLEVBQUVBLHNCQUFTQSxDQUFDQTtTQUMzQ0EsQ0FBQ0E7O2tCQUN1QkE7SUFBREEsZ0JBQUNBO0FBQURBLENBbEJ4QixBQWtCeUJBLElBQUE7QUFBWixpQkFBUyxZQUFHLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy91c2Vycy91c2Vyc19saXN0L3VzZXJzX2xpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgTmdGb3J9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcbmltcG9ydCB7Um91dGVyTGlua30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcblxuaW1wb3J0IHtTZXRBY3RpdmV9IGZyb20gJy4uLy4uLy4uL2RpcmVjdGl2ZXMvc2V0X2FjdGl2ZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3VzZXJzLWxpc3QnLFxuICBwcm9wZXJ0aWVzOiBbJ3VzZXJzJ10sXG4gIHRlbXBsYXRlOiBgXG4gICAgPHVsIGNsYXNzPVwidXNlcnMtbGlzdFwiPjwhLS0gVE9ETzogYWRkIHNldC1hY3RpdmUgYmFjayBoZXJlIC0tPlxuICAgICAgPGxpICpuZy1mb3I9XCIjdXNlciBvZiB1c2Vyc1wiPlxuICAgICAgICA8IS0tIENvbXBvbmVudCBsb2FkaW5nIHdvcmtzIGJ1dCBicm93c2VyIExvY2F0aW9uIGlzIG5vdCB1cGRhdGVkIC0tPlxuICAgICAgICA8YSBbcm91dGVyLWxpbmtdPVwiWycuL1VzZXItZGV0YWlscycsIHsgdXNlcm5hbWU6IHVzZXIudXNlcm5hbWUgfV1cIj5cbiAgICAgICAgICA8aW1nIFtzcmNdPVwidXNlci5waWN0dXJlLm1lZGl1bVwiIGFsdD1cInt7IHVzZXIudXNlcm5hbWUgfX0ncyBwaWN0dXJlXCIgLz5cbiAgICAgICAgICB7eyB1c2VyLm5hbWUubGFzdCB9fSwge3sgdXNlci5uYW1lLmZpcnN0IH19PC9hPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYWN0aW9uc1wiPlxuICAgICAgICAgIDxhIFtyb3V0ZXItbGlua109XCJbJy4vVXNlci1lZGl0JywgeyB1c2VybmFtZTogdXNlci51c2VybmFtZSB9XVwiPmVkaXQ8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9saT5cbiAgICA8L3VsPlxuICBgLFxuICBkaXJlY3RpdmVzOiBbUm91dGVyTGluaywgTmdGb3IsIFNldEFjdGl2ZV1cbn0pXG5leHBvcnQgY2xhc3MgVXNlcnNMaXN0IHt9XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=