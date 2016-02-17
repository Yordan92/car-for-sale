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
        var _this = this;
        this.http.post('http://localhost:3000/signUp', JSON.stringify({
            email: email,
            password: password
        }), {
            headers: new http_1.Headers({
                'Content-Type': 'application/json'
            })
        }).map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.setUser(data);
            window.location.href = '/';
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
        var _this = this;
        this.http.get('http://localhost:3000/user')
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.setUser(data);
        });
    };
    User.prototype.setUser = function (user) {
        this.currUser = user;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3VzZXIudHMiXSwibmFtZXMiOlsiVXNlciIsIlVzZXIuY29uc3RydWN0b3IiLCJVc2VyLmdldFBlcnNvbiIsIlVzZXIucmVnaXN0cmF0ZSIsIlVzZXIuZ2V0IiwiVXNlci5zZXRVc2VyIiwiVXNlci5nZXRVc2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHlCQUFxQixtQkFBbUIsQ0FBQyxDQUFBO0FBQ3pDLHFCQUE0QixlQUFlLENBQUMsQ0FBQTtBQUU1QztJQUdJQSxjQUFtQ0EsSUFBVUE7UUFBVkMsU0FBSUEsR0FBSkEsSUFBSUEsQ0FBTUE7UUFDekNBLElBQUlBLENBQUNBLEdBQUdBLEVBQUVBLENBQUNBO0lBRWZBLENBQUNBO0lBRURELHdCQUFTQSxHQUFUQSxVQUFVQSxLQUFLQSxFQUFFQSxRQUFRQTtRQUF6QkUsaUJBY0NBO1FBYkdBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLDhCQUE4QkEsRUFBRUEsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FDekRBO1lBQ0lBLE9BQUFBLEtBQUtBO1lBQ0xBLFVBQUFBLFFBQVFBO1NBQ1hBLENBQUNBLEVBQUVBO1lBQ0pBLE9BQU9BLEVBQUVBLElBQUlBLGNBQU9BLENBQUNBO2dCQUNqQkEsY0FBY0EsRUFBRUEsa0JBQWtCQTthQUNyQ0EsQ0FBQ0E7U0FDTEEsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsVUFBQUEsR0FBR0EsSUFBSUEsT0FBQUEsR0FBR0EsQ0FBQ0EsSUFBSUEsRUFBRUEsRUFBVkEsQ0FBVUEsQ0FBQ0E7YUFDeEJBLFNBQVNBLENBQUVBLFVBQUNBLElBQUlBO1lBQ2JBLEtBQUlBLENBQUNBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLENBQUNBO1lBQ25CQSxNQUFNQSxDQUFDQSxRQUFRQSxDQUFDQSxJQUFJQSxHQUFDQSxHQUFHQSxDQUFDQTtRQUM3QkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFDUEEsQ0FBQ0E7SUFDREYseUJBQVVBLEdBQVZBLFVBQVdBLEdBQUdBO1FBQWRHLGlCQVFDQTtRQVBHQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxrQ0FBa0NBLEVBQUVBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLEdBQUdBLENBQUNBLEVBQUVBO1lBQ3BFQSxPQUFPQSxFQUFFQSxJQUFJQSxjQUFPQSxDQUFDQTtnQkFDakJBLGNBQWNBLEVBQUVBLGtCQUFrQkE7YUFDckNBLENBQUNBO1NBQ0xBLENBQUNBO2FBQ0RBLEdBQUdBLENBQUNBLFVBQUFBLEdBQUdBLElBQUlBLE9BQUFBLEdBQUdBLENBQUNBLElBQUlBLEVBQUVBLEVBQVZBLENBQVVBLENBQUNBO2FBQ3RCQSxTQUFTQSxDQUFFQSxVQUFDQSxJQUFJQSxJQUFLQSxPQUFBQSxLQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxFQUFFQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxFQUF6Q0EsQ0FBeUNBLENBQUNBLENBQUNBO0lBQ3JFQSxDQUFDQTtJQUVESCxrQkFBR0EsR0FBSEE7UUFBQUksaUJBT0NBO1FBTkdBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLDRCQUE0QkEsQ0FBQ0E7YUFDdENBLEdBQUdBLENBQUNBLFVBQUFBLEdBQUdBLElBQUlBLE9BQUFBLEdBQUdBLENBQUNBLElBQUlBLEVBQUVBLEVBQVZBLENBQVVBLENBQUNBO2FBQ3RCQSxTQUFTQSxDQUFFQSxVQUFDQSxJQUFJQTtZQUNiQSxLQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtRQUV2QkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFDWEEsQ0FBQ0E7SUFFREosc0JBQU9BLEdBQVBBLFVBQVFBLElBQUlBO1FBQ1JLLElBQUlBLENBQUNBLFFBQVFBLEdBQUdBLElBQUlBLENBQUNBO0lBQ3pCQSxDQUFDQTtJQUVETCxzQkFBT0EsR0FBUEE7UUFDSU0sTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0E7SUFDekJBLENBQUNBO0lBaERMTjtRQUdpQkEsV0FBQ0EsaUJBQU1BLENBQUNBLFdBQUlBLENBQUNBLENBQUFBOzthQThDN0JBO0lBQURBLFdBQUNBO0FBQURBLENBakRBLEFBaURDQSxJQUFBO0FBakRZLFlBQUksT0FpRGhCLENBQUEiLCJmaWxlIjoic2VydmljZXMvdXNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0fSBmcm9tICdhbmd1bGFyMi9hbmd1bGFyMic7XG5pbXBvcnQge0h0dHAsIEhlYWRlcnN9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuXG5leHBvcnQgY2xhc3MgVXNlciB7XG4gICAgY3VyclVzZXI7XG5cbiAgICBjb25zdHJ1Y3RvciggQEluamVjdChIdHRwKSBwcml2YXRlIGh0dHA6IEh0dHApIHtcbiAgICAgICAgdGhpcy5nZXQoKTtcblxuICAgIH1cblxuICAgIGdldFBlcnNvbihlbWFpbCwgcGFzc3dvcmQpIHtcbiAgICAgICAgdGhpcy5odHRwLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9zaWduVXAnLCBKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICAgICAgICBwYXNzd29yZFxuICAgICAgICAgICAgfSksIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IG5ldyBIZWFkZXJzKHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KS5tYXAocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgIC5zdWJzY3JpYmUoIChkYXRhKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFVzZXIoZGF0YSk7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZj0nLyc7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZWdpc3RyYXRlKG9iaikge1xuICAgICAgICB0aGlzLmh0dHAucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL3JlZ2lzdHJhdGUnLCBKU09OLnN0cmluZ2lmeShvYmopLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyh7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgLnN1YnNjcmliZSggKGRhdGEpID0+IHRoaXMuZ2V0UGVyc29uKGRhdGEuZmlyc3ROYW1lLCBkYXRhLnBhc3MpKTtcbiAgICB9XG5cbiAgICBnZXQoKSB7XG4gICAgICAgIHRoaXMuaHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC91c2VyJylcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0VXNlcihkYXRhKTtcblxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2V0VXNlcih1c2VyKSB7XG4gICAgICAgIHRoaXMuY3VyclVzZXIgPSB1c2VyO1xuICAgIH1cblxuICAgIGdldFVzZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJVc2VyO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==