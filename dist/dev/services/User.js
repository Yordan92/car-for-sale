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
var http_1 = require('angular2/http');
var token_1 = require('services/token');
var User = (function () {
    function User(http) {
        this.http = http;
        this.http.get('http://localhost:3000/user', {
            headers: token_1.localStorageHeader
        })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            this.currUser = data;
        });
    }
    User.getInstance = function (http) {
        if (User.instance == null) {
            User.isCreating = true;
            User.instance = new User(http);
            User.isCreating = false;
        }
        return User.instance;
    };
    User.prototype.getPerson = function (name, pass) {
        this.http.post('http://localhost:3000/signUp', JSON.stringify({
            name: name,
            pass: pass
        }), {
            headers: new http_1.Headers({
                'Content-Type': 'application/json'
            })
        }).map(function (res) { return res.json(); })
            .subscribe(function (data) {
            this.currUser = data;
            localStorage.setItem('token', this.currUser.token);
        });
    };
    User.prototype.registrate = function (obj) {
        this.http.post('http://localhost:3000/registrate', JSON.stringify(obj), {
            headers: new http_1.Headers({
                'Content-Type': 'application/json'
            })
        })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            getPerson(data.firstName, data.pass);
        });
    };
    User.prototype.get = function () {
        return this.currUser;
    };
    User.isCreating = false;
    Object.defineProperty(User, "getInstance",
        __decorate([
            __param(0, angular2_1.Inject(http_1.Http)), 
            __metadata('design:type', Function), 
            __metadata('design:paramtypes', [http_1.Http]), 
            __metadata('design:returntype', void 0)
        ], User, "getInstance", Object.getOwnPropertyDescriptor(User, "getInstance")));
    User = __decorate([
        __param(0, angular2_1.Inject(http_1.Http)), 
        __metadata('design:paramtypes', [http_1.Http])
    ], User);
    return User;
})();
exports.User = User;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL1VzZXIudHMiXSwibmFtZXMiOlsiVXNlciIsIlVzZXIuY29uc3RydWN0b3IiLCJVc2VyLmdldEluc3RhbmNlIiwiVXNlci5nZXRQZXJzb24iLCJVc2VyLnJlZ2lzdHJhdGUiLCJVc2VyLmdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5QkFBcUIsbUJBQW1CLENBQUMsQ0FBQTtBQUN6QyxxQkFBNEIsZUFBZSxDQUFDLENBQUE7QUFDNUMsc0JBQWlDLGdCQUFnQixDQUFDLENBQUE7QUFFbEQ7SUFJSUEsY0FBa0NBLElBQVVBO1FBQVZDLFNBQUlBLEdBQUpBLElBQUlBLENBQU1BO1FBQ3hDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSw0QkFBNEJBLEVBQzFDQTtZQUNJQSxPQUFPQSxFQUFFQSwwQkFBa0JBO1NBQzlCQSxDQUFDQTthQUNEQSxHQUFHQSxDQUFDQSxVQUFBQSxHQUFHQSxJQUFJQSxPQUFBQSxHQUFHQSxDQUFDQSxJQUFJQSxFQUFFQSxFQUFWQSxDQUFVQSxDQUFDQTthQUN0QkEsU0FBU0EsQ0FBQ0EsVUFBVUEsSUFBSUE7WUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDekIsQ0FBQyxDQUFDQSxDQUFDQTtJQUVQQSxDQUFDQTtJQUNNRCxnQkFBV0EsR0FBbEJBLFVBQXlDQSxJQUFVQTtRQUMvQ0UsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsSUFBSUEsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDeEJBLElBQUlBLENBQUNBLFVBQVVBLEdBQUdBLElBQUlBLENBQUNBO1lBQ3ZCQSxJQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxJQUFJQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUMvQkEsSUFBSUEsQ0FBQ0EsVUFBVUEsR0FBR0EsS0FBS0EsQ0FBQ0E7UUFDNUJBLENBQUNBO1FBRURBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBO0lBQ3pCQSxDQUFDQTtJQUNERix3QkFBU0EsR0FBVEEsVUFBVUEsSUFBSUEsRUFBRUEsSUFBSUE7UUFDaEJHLElBQUlBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLDhCQUE4QkEsRUFBRUEsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FDekRBO1lBQ0lBLE1BQUFBLElBQUlBO1lBQ0pBLE1BQUFBLElBQUlBO1NBQ1BBLENBQUNBLEVBQUVBO1lBQ0pBLE9BQU9BLEVBQUVBLElBQUlBLGNBQU9BLENBQUNBO2dCQUNqQkEsY0FBY0EsRUFBRUEsa0JBQWtCQTthQUNyQ0EsQ0FBQ0E7U0FDTEEsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsVUFBQUEsR0FBR0EsSUFBSUEsT0FBQUEsR0FBR0EsQ0FBQ0EsSUFBSUEsRUFBRUEsRUFBVkEsQ0FBVUEsQ0FBQ0E7YUFDeEJBLFNBQVNBLENBQUNBLFVBQVVBLElBQUlBO1lBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ3JCLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkQsQ0FBQyxDQUFDQSxDQUFDQTtJQUNQQSxDQUFDQTtJQUNESCx5QkFBVUEsR0FBVkEsVUFBV0EsR0FBR0E7UUFDVkksSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0Esa0NBQWtDQSxFQUFFQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxHQUFHQSxDQUFDQSxFQUFFQTtZQUNwRUEsT0FBT0EsRUFBRUEsSUFBSUEsY0FBT0EsQ0FBQ0E7Z0JBQ2pCQSxjQUFjQSxFQUFFQSxrQkFBa0JBO2FBQ3JDQSxDQUFDQTtTQUNMQSxDQUFDQTthQUNEQSxHQUFHQSxDQUFDQSxVQUFBQSxHQUFHQSxJQUFJQSxPQUFBQSxHQUFHQSxDQUFDQSxJQUFJQSxFQUFFQSxFQUFWQSxDQUFVQSxDQUFDQTthQUN0QkEsU0FBU0EsQ0FBQ0EsVUFBVUEsSUFBSUE7WUFDckIsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pDLENBQUMsQ0FBQ0EsQ0FBQ0E7SUFDUEEsQ0FBQ0E7SUFFREosa0JBQUdBLEdBQUhBO1FBQ0lLLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBO0lBQ3pCQSxDQUFDQTtJQW5ETUwsZUFBVUEsR0FBV0EsS0FBS0EsQ0FBQ0E7SUFhbENBLHNCQUFPQSxtQkFBV0E7O1lBQUNBLFdBQUNBLGlCQUFNQSxDQUFDQSxXQUFJQSxDQUFDQSxDQUFBQTs7OztXQUF6QkEsbUJBQVdBLGtDQUFYQSxtQkFBV0EsSUFRakJBO0lBdkJMQTtRQUlnQkEsV0FBQ0EsaUJBQU1BLENBQUNBLFdBQUlBLENBQUNBLENBQUFBOzthQWtENUJBO0lBQURBLFdBQUNBO0FBQURBLENBdERBLEFBc0RDQSxJQUFBO0FBdERZLFlBQUksT0FzRGhCLENBQUEiLCJmaWxlIjoic2VydmljZXMvVXNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0fSBmcm9tICdhbmd1bGFyMi9hbmd1bGFyMic7XG5pbXBvcnQge0h0dHAsIEhlYWRlcnN9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuaW1wb3J0IHtsb2NhbFN0b3JhZ2VIZWFkZXJ9IGZyb20gJ3NlcnZpY2VzL3Rva2VuJztcblxuZXhwb3J0IGNsYXNzIFVzZXIge1xuICAgIHN0YXRpYyBpbnN0YW5jZTpVc2VyO1xuICAgIHN0YXRpYyBpc0NyZWF0aW5nOkJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKEBJbmplY3QoSHR0cCkgcHJpdmF0ZSBodHRwOiBIdHRwKSB7XG4gICAgICAgIHRoaXMuaHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC91c2VyJywgXG4gICAgICAgIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IGxvY2FsU3RvcmFnZUhlYWRlclxuICAgICAgICB9KVxuICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJVc2VyID0gZGF0YTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG4gICAgc3RhdGljIGdldEluc3RhbmNlKEBJbmplY3QoSHR0cCkgcHJpdmF0ZSBodHRwOiBIdHRwKSB7XG4gICAgICAgIGlmIChVc2VyLmluc3RhbmNlID09IG51bGwpIHtcbiAgICAgICAgICAgIFVzZXIuaXNDcmVhdGluZyA9IHRydWU7XG4gICAgICAgICAgICBVc2VyLmluc3RhbmNlID0gbmV3IFVzZXIoaHR0cCk7XG4gICAgICAgICAgICBVc2VyLmlzQ3JlYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuIFxuICAgICAgICByZXR1cm4gVXNlci5pbnN0YW5jZTtcbiAgICB9XG4gICAgZ2V0UGVyc29uKG5hbWUsIHBhc3MpIHtcbiAgICAgICAgdGhpcy5odHRwLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9zaWduVXAnLCBKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICAgIHBhc3NcbiAgICAgICAgICAgIH0pLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyh7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSkubWFwKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJVc2VyID0gZGF0YTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHRoaXMuY3VyclVzZXIudG9rZW4pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVnaXN0cmF0ZShvYmopIHtcbiAgICAgICAgdGhpcy5odHRwLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9yZWdpc3RyYXRlJywgSlNPTi5zdHJpbmdpZnkob2JqKSwge1xuICAgICAgICAgICAgaGVhZGVyczogbmV3IEhlYWRlcnMoe1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIGdldFBlcnNvbihkYXRhLmZpcnN0TmFtZSwgZGF0YS5wYXNzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0KCk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJVc2VyO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=