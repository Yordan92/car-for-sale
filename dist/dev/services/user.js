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
var User = (function () {
    function User(http) {
        this.http = http;
        this.get();
    }
    User.prototype.getPerson = function (email, password) {
        this.http.post('http://localhost:3000/signUp', JSON.stringify({
            email: email,
            password: password
        }), {
            headers: new http_1.Headers({
                'Content-Type': 'application/json'
            })
        }).map(function (res) { return res.json(); })
            .subscribe(function (data) {
            this.currUser = data;
        });
    };
    User.prototype.registrate = function (obj) {
        var _this = this;
        this.http.post('http://localhost:3000/registrate', JSON.stringify(obj), {
            headers: new http_1.Headers({
                'Content-Type': 'application/json'
            })
        })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) { return _this.getPerson(data.firstName, data.pass); });
    };
    User.prototype.get = function () {
        this.http.get('http://localhost:3000/user')
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            this.currUser = data;
            console.log(this.currUser);
        });
    };
    User.prototype.getUser = function () {
        return this.currUser;
    };
    User = __decorate([
        __param(0, angular2_1.Inject(http_1.Http)), 
        __metadata('design:paramtypes', [http_1.Http])
    ], User);
    return User;
})();
exports.User = User;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3VzZXIudHMiXSwibmFtZXMiOlsiVXNlciIsIlVzZXIuY29uc3RydWN0b3IiLCJVc2VyLmdldFBlcnNvbiIsIlVzZXIucmVnaXN0cmF0ZSIsIlVzZXIuZ2V0IiwiVXNlci5nZXRVc2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHlCQUFxQixtQkFBbUIsQ0FBQyxDQUFBO0FBQ3pDLHFCQUE0QixlQUFlLENBQUMsQ0FBQTtBQUk1QztJQUlJQSxjQUFrQ0EsSUFBVUE7UUFBVkMsU0FBSUEsR0FBSkEsSUFBSUEsQ0FBTUE7UUFFeENBLElBQUlBLENBQUNBLEdBQUdBLEVBQUVBLENBQUNBO0lBRWZBLENBQUNBO0lBRURELHdCQUFTQSxHQUFUQSxVQUFVQSxLQUFLQSxFQUFFQSxRQUFRQTtRQUNyQkUsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsOEJBQThCQSxFQUFFQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUN6REE7WUFDSUEsT0FBQUEsS0FBS0E7WUFDTEEsVUFBQUEsUUFBUUE7U0FDWEEsQ0FBQ0EsRUFBRUE7WUFDSkEsT0FBT0EsRUFBRUEsSUFBSUEsY0FBT0EsQ0FBQ0E7Z0JBQ2pCQSxjQUFjQSxFQUFFQSxrQkFBa0JBO2FBQ3JDQSxDQUFDQTtTQUNMQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxVQUFBQSxHQUFHQSxJQUFJQSxPQUFBQSxHQUFHQSxDQUFDQSxJQUFJQSxFQUFFQSxFQUFWQSxDQUFVQSxDQUFDQTthQUN4QkEsU0FBU0EsQ0FBQ0EsVUFBVUEsSUFBSUE7WUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFFdkIsQ0FBQyxDQUFDQSxDQUFDQTtJQUNQQSxDQUFDQTtJQUNERix5QkFBVUEsR0FBVkEsVUFBV0EsR0FBR0E7UUFBZEcsaUJBUUNBO1FBUEdBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLGtDQUFrQ0EsRUFBRUEsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsRUFBRUE7WUFDcEVBLE9BQU9BLEVBQUVBLElBQUlBLGNBQU9BLENBQUNBO2dCQUNqQkEsY0FBY0EsRUFBRUEsa0JBQWtCQTthQUNyQ0EsQ0FBQ0E7U0FDTEEsQ0FBQ0E7YUFDREEsR0FBR0EsQ0FBQ0EsVUFBQUEsR0FBR0EsSUFBSUEsT0FBQUEsR0FBR0EsQ0FBQ0EsSUFBSUEsRUFBRUEsRUFBVkEsQ0FBVUEsQ0FBQ0E7YUFDdEJBLFNBQVNBLENBQUVBLFVBQUNBLElBQUlBLElBQUtBLE9BQUFBLEtBQUlBLENBQUNBLFNBQVNBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLEVBQUVBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLEVBQXpDQSxDQUF5Q0EsQ0FBQ0EsQ0FBQ0E7SUFDckVBLENBQUNBO0lBRURILGtCQUFHQSxHQUFIQTtRQUNJSSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSw0QkFBNEJBLENBQUNBO2FBQ3RDQSxHQUFHQSxDQUFDQSxVQUFBQSxHQUFHQSxJQUFJQSxPQUFBQSxHQUFHQSxDQUFDQSxJQUFJQSxFQUFFQSxFQUFWQSxDQUFVQSxDQUFDQTthQUN0QkEsU0FBU0EsQ0FBQ0EsVUFBVUEsSUFBSUE7WUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDN0IsQ0FBQyxDQUFDQSxDQUFDQTtJQUNYQSxDQUFDQTtJQUVESixzQkFBT0EsR0FBUEE7UUFDSUssTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0E7SUFDekJBLENBQUNBO0lBOUNMTDtRQUlnQkEsV0FBQ0EsaUJBQU1BLENBQUNBLFdBQUlBLENBQUNBLENBQUFBOzthQTRDNUJBO0lBQURBLFdBQUNBO0FBQURBLENBaERBLEFBZ0RDQSxJQUFBO0FBaERZLFlBQUksT0FnRGhCLENBQUEiLCJmaWxlIjoic2VydmljZXMvdXNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0fSBmcm9tICdhbmd1bGFyMi9hbmd1bGFyMic7XG5pbXBvcnQge0h0dHAsIEhlYWRlcnN9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuaW1wb3J0IHtDdXJyZW50VXNlcn0gZnJvbSAnLi9jdXJyZW50X3VzZXInXG4vLyBpbXBvcnQge2xvY2FsU3RvcmFnZUhlYWRlcn0gZnJvbSAnc2VydmljZXMvdG9rZW4nO1xuXG5leHBvcnQgY2xhc3MgVXNlciB7XG4gICAgY3VycmVudFVzZXI6IEN1cnJlbnRVc2VyO1xuICAgIGN1cnJVc2VyO1xuXG4gICAgY29uc3RydWN0b3IoQEluamVjdChIdHRwKSBwcml2YXRlIGh0dHA6IEh0dHApIHtcbiAgICAgICAgLy8gdGhpcy5jdXJyZW50VXNlciA9IG5ldyBDdXJyZW50VXNlcigpO1xuICAgICAgICB0aGlzLmdldCgpO1xuXG4gICAgfVxuXG4gICAgZ2V0UGVyc29uKGVtYWlsLCBwYXNzd29yZCkge1xuICAgICAgICB0aGlzLmh0dHAucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL3NpZ25VcCcsIEpTT04uc3RyaW5naWZ5KFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkXG4gICAgICAgICAgICB9KSwge1xuICAgICAgICAgICAgaGVhZGVyczogbmV3IEhlYWRlcnMoe1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgLnN1YnNjcmliZShmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgIHRoaXMuY3VyclVzZXIgPSBkYXRhO1xuICAgICAgICAgICAgLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgdGhpcy5jdXJyVXNlci50b2tlbik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZWdpc3RyYXRlKG9iaikge1xuICAgICAgICB0aGlzLmh0dHAucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL3JlZ2lzdHJhdGUnLCBKU09OLnN0cmluZ2lmeShvYmopLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyh7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgLnN1YnNjcmliZSggKGRhdGEpID0+IHRoaXMuZ2V0UGVyc29uKGRhdGEuZmlyc3ROYW1lLCBkYXRhLnBhc3MpKTtcbiAgICB9XG4gICAgXG4gICAgZ2V0KCkge1xuICAgICAgICB0aGlzLmh0dHAuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvdXNlcicpXG4gICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgLnN1YnNjcmliZShmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICB0aGlzLmN1cnJVc2VyID0gZGF0YTtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5jdXJyVXNlcik7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRVc2VyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyVXNlcjtcbiAgICB9XG4gIFxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9