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
var name_list_1 = require('../../services/name_list');
var About = (function () {
    function About(list) {
        this.list = list;
    }
    About.prototype.addName = function (newname) {
        this.list.add(newname.value);
        newname.value = '';
        return false;
    };
    About = __decorate([
        angular2_1.Component({
            selector: 'about',
            styles: [
                "\n      ul li a {\n        color:blue;\n        cursor:pointer;\n      }\n    "
            ],
            template: "\n    <p>\n      For reward, here is a list of awesome computer scientists!\n    </p>\n\n    <p>\n      You want more? Add them yourself!\n    </p>\n    <form (submit)=\"addName(newname)\">\n      <input #newname>\n      <button type=\"submit\">Add</button>\n    </form>\n    <ul>\n      <li *ng-for=\"#name of list.get(); #i = index;\">{{name}}&nbsp;<a (click)=\"list.remove(i)\">remove</a></li>\n    </ul>\n  ",
            directives: [angular2_1.CORE_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [name_list_1.NameList])
    ], About);
    return About;
})();
exports.About = About;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYWJvdXQvYWJvdXQudHMiXSwibmFtZXMiOlsiQWJvdXQiLCJBYm91dC5jb25zdHJ1Y3RvciIsIkFib3V0LmFkZE5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEseUJBQXlDLG1CQUFtQixDQUFDLENBQUE7QUFFN0QsMEJBQXVCLDBCQUEwQixDQUFDLENBQUE7QUFFbEQ7SUE2QkVBLGVBQW1CQSxJQUFjQTtRQUFkQyxTQUFJQSxHQUFKQSxJQUFJQSxDQUFVQTtJQUFHQSxDQUFDQTtJQUNyQ0QsdUJBQU9BLEdBQVBBLFVBQVFBLE9BQU9BO1FBQ2JFLElBQUlBLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLE9BQU9BLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO1FBQzdCQSxPQUFPQSxDQUFDQSxLQUFLQSxHQUFHQSxFQUFFQSxDQUFDQTtRQUVuQkEsTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0E7SUFDZkEsQ0FBQ0E7SUFuQ0hGO1FBQUNBLG9CQUFTQSxDQUFDQTtZQUNUQSxRQUFRQSxFQUFFQSxPQUFPQTtZQUNqQkEsTUFBTUEsRUFBRUE7Z0JBQ05BLGdGQUtDQTthQUNGQTtZQUNEQSxRQUFRQSxFQUFFQSw2WkFlVEE7WUFDREEsVUFBVUEsRUFBRUEsQ0FBQ0EsMEJBQWVBLENBQUNBO1NBQzlCQSxDQUFDQTs7Y0FTREE7SUFBREEsWUFBQ0E7QUFBREEsQ0FwQ0EsQUFvQ0NBLElBQUE7QUFSWSxhQUFLLFFBUWpCLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9hYm91dC9hYm91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBDT1JFX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcblxuaW1wb3J0IHtOYW1lTGlzdH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbmFtZV9saXN0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYWJvdXQnLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgICB1bCBsaSBhIHtcbiAgICAgICAgY29sb3I6Ymx1ZTtcbiAgICAgICAgY3Vyc29yOnBvaW50ZXI7XG4gICAgICB9XG4gICAgYFxuICBdLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxwPlxuICAgICAgRm9yIHJld2FyZCwgaGVyZSBpcyBhIGxpc3Qgb2YgYXdlc29tZSBjb21wdXRlciBzY2llbnRpc3RzIVxuICAgIDwvcD5cblxuICAgIDxwPlxuICAgICAgWW91IHdhbnQgbW9yZT8gQWRkIHRoZW0geW91cnNlbGYhXG4gICAgPC9wPlxuICAgIDxmb3JtIChzdWJtaXQpPVwiYWRkTmFtZShuZXduYW1lKVwiPlxuICAgICAgPGlucHV0ICNuZXduYW1lPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+QWRkPC9idXR0b24+XG4gICAgPC9mb3JtPlxuICAgIDx1bD5cbiAgICAgIDxsaSAqbmctZm9yPVwiI25hbWUgb2YgbGlzdC5nZXQoKTsgI2kgPSBpbmRleDtcIj57e25hbWV9fSZuYnNwOzxhIChjbGljayk9XCJsaXN0LnJlbW92ZShpKVwiPnJlbW92ZTwvYT48L2xpPlxuICAgIDwvdWw+XG4gIGAsXG4gIGRpcmVjdGl2ZXM6IFtDT1JFX0RJUkVDVElWRVNdXG59KVxuZXhwb3J0IGNsYXNzIEFib3V0IHtcbiAgY29uc3RydWN0b3IocHVibGljIGxpc3Q6IE5hbWVMaXN0KSB7fVxuICBhZGROYW1lKG5ld25hbWUpOiBib29sZWFuIHtcbiAgICB0aGlzLmxpc3QuYWRkKG5ld25hbWUudmFsdWUpO1xuICAgIG5ld25hbWUudmFsdWUgPSAnJztcbiAgICAvLyBwcmV2ZW50IGRlZmF1bHQgZm9ybSBzdWJtaXQgYmVoYXZpb3IgdG8gcmVmcmVzaCB0aGUgcGFnZVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9