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
var SEED_URL = 'http://api.randomuser.me/?results=10&seed=885ad8c4404e07ea03';
var URL = 'http://api.randomuser.me/?results=10';
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.loadUsers = this.fetch(SEED_URL);
        this.usersCache = [];
        this.loading = false;
    }
    UserService.prototype.getUsers = function () {
        return this.loadUsers;
    };
    UserService.prototype.getMoreUsers = function () {
        this.loading = true;
        return this.fetch(URL);
    };
    UserService.prototype.getUser = function (username) {
        var _this = this;
        return this.findUserByUsername(username)
            .then(function (user) {
            _this.currentUser = user;
            return _this.currentUser;
        });
    };
    UserService.prototype.saveUser = function (user) {
        this.usersCache.push(user);
        this.sort();
    };
    UserService.prototype.sort = function () {
        this.usersCache.sort(function (a, b) { return a.name.last > b.name.last ? 1 : -1; });
    };
    UserService.prototype.fetch = function (url) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(url)
                .map(function (res) { return res.json().results; })
                .map(function (res) { return res.map(function (o) { return o.user; }); })
                .subscribe(function (res) {
                res.forEach(function (user) { return _this.usersCache.push(user); });
                _this.sort();
                _this.loading = false;
                resolve(_this.usersCache);
            });
        });
    };
    UserService.prototype.findUserByUsername = function (username) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.getUsers().then(function (users) {
                var user = users.filter(function (user) { return user.username === username; })[0];
                resolve(user);
            });
        });
    };
    UserService = __decorate([
        __param(0, angular2_1.Inject(http_1.Http)), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UserService);
    return UserService;
})();
exports.UserService = UserService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdXNlcnMvc2VydmljZXMvdXNlcl9zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbIlVzZXJTZXJ2aWNlIiwiVXNlclNlcnZpY2UuY29uc3RydWN0b3IiLCJVc2VyU2VydmljZS5nZXRVc2VycyIsIlVzZXJTZXJ2aWNlLmdldE1vcmVVc2VycyIsIlVzZXJTZXJ2aWNlLmdldFVzZXIiLCJVc2VyU2VydmljZS5zYXZlVXNlciIsIlVzZXJTZXJ2aWNlLnNvcnQiLCJVc2VyU2VydmljZS5mZXRjaCIsIlVzZXJTZXJ2aWNlLmZpbmRVc2VyQnlVc2VybmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5QkFBcUIsbUJBQW1CLENBQUMsQ0FBQTtBQUN6QyxxQkFBbUIsZUFBZSxDQUFDLENBQUE7QUFHbkMsSUFBTSxRQUFRLEdBQUcsOERBQThELENBQUM7QUFDaEYsSUFBTSxHQUFHLEdBQUcsc0NBQXNDLENBQUM7QUFHbkQ7SUFNRUEscUJBQWtDQSxJQUFVQTtRQUFWQyxTQUFJQSxHQUFKQSxJQUFJQSxDQUFNQTtRQUo1Q0EsY0FBU0EsR0FBR0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0E7UUFDakNBLGVBQVVBLEdBQWlCQSxFQUFFQSxDQUFDQTtRQUM5QkEsWUFBT0EsR0FBR0EsS0FBS0EsQ0FBQ0E7SUFFK0JBLENBQUNBO0lBQ2hERCw4QkFBUUEsR0FBUkE7UUFDRUUsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0E7SUFDeEJBLENBQUNBO0lBQ0RGLGtDQUFZQSxHQUFaQTtRQUNFRyxJQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxJQUFJQSxDQUFDQTtRQUNwQkEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7SUFDekJBLENBQUNBO0lBQ0RILDZCQUFPQSxHQUFQQSxVQUFRQSxRQUFRQTtRQUFoQkksaUJBTUNBO1FBTENBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLGtCQUFrQkEsQ0FBQ0EsUUFBUUEsQ0FBQ0E7YUFDckNBLElBQUlBLENBQUNBLFVBQUFBLElBQUlBO1lBQ1JBLEtBQUlBLENBQUNBLFdBQVdBLEdBQUdBLElBQUlBLENBQUNBO1lBQ3hCQSxNQUFNQSxDQUFDQSxLQUFJQSxDQUFDQSxXQUFXQSxDQUFDQTtRQUMxQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFDUEEsQ0FBQ0E7SUFDREosOEJBQVFBLEdBQVJBLFVBQVNBLElBQVdBO1FBQ2xCSyxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtRQUMzQkEsSUFBSUEsQ0FBQ0EsSUFBSUEsRUFBRUEsQ0FBQ0E7SUFDZEEsQ0FBQ0E7SUFDREwsMEJBQUlBLEdBQUpBO1FBQ0VNLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLFVBQUNBLENBQUNBLEVBQUNBLENBQUNBLElBQUtBLE9BQUFBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLEdBQUdBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLEdBQUVBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLEVBQWpDQSxDQUFpQ0EsQ0FBQ0EsQ0FBQ0E7SUFDbkVBLENBQUNBO0lBQ09OLDJCQUFLQSxHQUFiQSxVQUFjQSxHQUFXQTtRQUF6Qk8saUJBY0NBO1FBYkNBLE1BQU1BLENBQUNBLElBQUlBLE9BQU9BLENBQUNBLFVBQUNBLE9BQU9BLEVBQUVBLE1BQU1BO1lBQ2pDQSxLQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxDQUFDQTtpQkFHZkEsR0FBR0EsQ0FBQ0EsVUFBQUEsR0FBR0EsSUFBSUEsT0FBQUEsR0FBR0EsQ0FBQ0EsSUFBSUEsRUFBRUEsQ0FBQ0EsT0FBT0EsRUFBbEJBLENBQWtCQSxDQUFDQTtpQkFDOUJBLEdBQUdBLENBQUNBLFVBQUFBLEdBQUdBLElBQUlBLE9BQUFBLEdBQUdBLENBQUNBLEdBQUdBLENBQUNBLFVBQUFBLENBQUNBLElBQUlBLE9BQUFBLENBQUNBLENBQUNBLElBQUlBLEVBQU5BLENBQU1BLENBQUNBLEVBQXBCQSxDQUFvQkEsQ0FBQ0E7aUJBQ2hDQSxTQUFTQSxDQUFDQSxVQUFBQSxHQUFHQTtnQkFDWkEsR0FBR0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsVUFBQUEsSUFBSUEsSUFBSUEsT0FBQUEsS0FBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsRUFBMUJBLENBQTBCQSxDQUFDQSxDQUFDQTtnQkFDaERBLEtBQUlBLENBQUNBLElBQUlBLEVBQUVBLENBQUNBO2dCQUNaQSxLQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxLQUFLQSxDQUFDQTtnQkFDckJBLE9BQU9BLENBQUNBLEtBQUlBLENBQUNBLFVBQVVBLENBQUNBLENBQUNBO1lBQzNCQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUNQQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUNMQSxDQUFDQTtJQUNPUCx3Q0FBa0JBLEdBQTFCQSxVQUEyQkEsUUFBUUE7UUFBbkNRLGlCQU9DQTtRQU5DQSxNQUFNQSxDQUFDQSxJQUFJQSxPQUFPQSxDQUFDQSxVQUFBQSxPQUFPQTtZQUN4QkEsS0FBSUEsQ0FBQ0EsUUFBUUEsRUFBRUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBQUEsS0FBS0E7Z0JBQ3hCQSxJQUFJQSxJQUFJQSxHQUFHQSxLQUFLQSxDQUFDQSxNQUFNQSxDQUFDQSxVQUFBQSxJQUFJQSxJQUFJQSxPQUFBQSxJQUFJQSxDQUFDQSxRQUFRQSxLQUFLQSxRQUFRQSxFQUExQkEsQ0FBMEJBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO2dCQUMvREEsT0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDaEJBLENBQUNBLENBQUNBLENBQUNBO1FBQ0xBLENBQUNBLENBQUNBLENBQUNBO0lBQ0xBLENBQUNBO0lBbERIUjtRQU1jQSxXQUFDQSxpQkFBTUEsQ0FBQ0EsV0FBSUEsQ0FBQ0EsQ0FBQUE7O29CQTZDMUJBO0lBQURBLGtCQUFDQTtBQUFEQSxDQW5EQSxBQW1EQ0EsSUFBQTtBQW5EWSxtQkFBVyxjQW1EdkIsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL3VzZXJzL3NlcnZpY2VzL3VzZXJfc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0fSBmcm9tICdhbmd1bGFyMi9hbmd1bGFyMic7XG5pbXBvcnQge0h0dHB9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuaW1wb3J0IHtJVXNlcn0gZnJvbSAnLi9pbnRlcmZhY2VzJztcblxuY29uc3QgU0VFRF9VUkwgPSAnaHR0cDovL2FwaS5yYW5kb211c2VyLm1lLz9yZXN1bHRzPTEwJnNlZWQ9ODg1YWQ4YzQ0MDRlMDdlYTAzJztcbmNvbnN0IFVSTCA9ICdodHRwOi8vYXBpLnJhbmRvbXVzZXIubWUvP3Jlc3VsdHM9MTAnO1xuXG5leHBvcnQge0lVc2VyfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIHtcbiAgLy8gRmV0Y2ggb25seSBvbmNlIGFuZCBjYWNoZSB0aGUgaW5pdGlhbCBjb2xsZWN0aW9uLlxuICBsb2FkVXNlcnMgPSB0aGlzLmZldGNoKFNFRURfVVJMKTtcbiAgdXNlcnNDYWNoZSA9IDxBcnJheTxJVXNlcj4+W107XG4gIGxvYWRpbmcgPSBmYWxzZTtcbiAgY3VycmVudFVzZXI6IElVc2VyO1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KEh0dHApIHByaXZhdGUgaHR0cDogSHR0cCkge31cbiAgZ2V0VXNlcnMoKTogUHJvbWlzZTxBcnJheTxJVXNlcj4+IHtcbiAgICByZXR1cm4gdGhpcy5sb2FkVXNlcnM7XG4gIH1cbiAgZ2V0TW9yZVVzZXJzKCk6IFByb21pc2U8QXJyYXk8SVVzZXI+PiB7XG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICByZXR1cm4gdGhpcy5mZXRjaChVUkwpO1xuICB9XG4gIGdldFVzZXIodXNlcm5hbWUpOiBQcm9taXNlPElVc2VyPiB7XG4gICAgcmV0dXJuIHRoaXMuZmluZFVzZXJCeVVzZXJuYW1lKHVzZXJuYW1lKVxuICAgICAgLnRoZW4odXNlciA9PiB7XG4gICAgICAgIHRoaXMuY3VycmVudFVzZXIgPSB1c2VyO1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50VXNlcjtcbiAgICAgIH0pO1xuICB9XG4gIHNhdmVVc2VyKHVzZXI6IElVc2VyKSB7XG4gICAgdGhpcy51c2Vyc0NhY2hlLnB1c2godXNlcik7XG4gICAgdGhpcy5zb3J0KCk7XG4gIH1cbiAgc29ydCgpIHtcbiAgICB0aGlzLnVzZXJzQ2FjaGUuc29ydCgoYSxiKSA9PiBhLm5hbWUubGFzdCA+IGIubmFtZS5sYXN0PyAxIDogLTEpO1xuICB9XG4gIHByaXZhdGUgZmV0Y2godXJsOiBzdHJpbmcpOiBQcm9taXNlPEFycmF5PElVc2VyPj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLmh0dHAuZ2V0KHVybClcbiAgICAgICAgLy8gLnRvUngoKVxuICAgICAgICAvLyBDbGVhbnVwIHdoYXQgaXMgcmVjZWl2ZWQgZnJvbSB0aGUgQVBJLlxuICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpLnJlc3VsdHMpXG4gICAgICAgIC5tYXAocmVzID0+IHJlcy5tYXAobyA9PiBvLnVzZXIpKVxuICAgICAgICAuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgICAgcmVzLmZvckVhY2godXNlciA9PiB0aGlzLnVzZXJzQ2FjaGUucHVzaCh1c2VyKSk7XG4gICAgICAgICAgdGhpcy5zb3J0KCk7XG4gICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgcmVzb2x2ZSh0aGlzLnVzZXJzQ2FjaGUpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBwcml2YXRlIGZpbmRVc2VyQnlVc2VybmFtZSh1c2VybmFtZSk6IFByb21pc2U8SVVzZXI+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICB0aGlzLmdldFVzZXJzKCkudGhlbih1c2VycyA9PiB7XG4gICAgICAgIGxldCB1c2VyID0gdXNlcnMuZmlsdGVyKHVzZXIgPT4gdXNlci51c2VybmFtZSA9PT0gdXNlcm5hbWUpWzBdO1xuICAgICAgICByZXNvbHZlKHVzZXIpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==