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
var Link = (function () {
    function Link(_elRef) {
        this._elRef = _elRef;
    }
    Object.defineProperty(Link.prototype, "href", {
        get: function () {
            return this._elRef.nativeElement.getAttribute('href');
        },
        enumerable: true,
        configurable: true
    });
    Link = __decorate([
        angular2_1.Directive({ selector: 'a' }), 
        __metadata('design:paramtypes', [angular2_1.ElementRef])
    ], Link);
    return Link;
})();
var ListItem = (function () {
    function ListItem(links, location, _elRef, _renderer) {
        this.links = links;
        this.location = location;
        this._elRef = _elRef;
        this._renderer = _renderer;
        this.className = 'active';
    }
    ListItem.prototype.toggleClass = function () {
        console.log(this.linkHref);
        if (this.linkHref === this.location.path()) {
            this._renderer.setElementClass(this._elRef, this.className, true);
        }
        else {
            this._renderer.setElementClass(this._elRef, this.className, false);
        }
    };
    Object.defineProperty(ListItem.prototype, "linkHref", {
        get: function () {
            return this.links.first.href;
        },
        enumerable: true,
        configurable: true
    });
    ListItem = __decorate([
        angular2_1.Directive({ selector: 'li' }),
        __param(0, angular2_1.Query(Link)),
        __param(1, angular2_1.Inject(router_1.Location)), 
        __metadata('design:paramtypes', [angular2_1.QueryList, router_1.Location, angular2_1.ElementRef, angular2_1.Renderer])
    ], ListItem);
    return ListItem;
})();
var List = (function () {
    function List(_items) {
        var _this = this;
        this._items = _items;
        this._items.changes.observer(function (_) {
            _this.setActive();
        });
    }
    List.prototype.setActive = function () {
        this._items.map(function (item) {
            item.toggleClass();
        });
    };
    List = __decorate([
        angular2_1.Directive({ selector: '[set-active]', host: { '(click)': 'setActive()' } }),
        __param(0, angular2_1.Query(ListItem)), 
        __metadata('design:paramtypes', [angular2_1.QueryList])
    ], List);
    return List;
})();
exports.SetActive = [List, ListItem, Link];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpcmVjdGl2ZXMvc2V0X2FjdGl2ZS50cyJdLCJuYW1lcyI6WyJMaW5rIiwiTGluay5jb25zdHJ1Y3RvciIsIkxpbmsuaHJlZiIsIkxpc3RJdGVtIiwiTGlzdEl0ZW0uY29uc3RydWN0b3IiLCJMaXN0SXRlbS50b2dnbGVDbGFzcyIsIkxpc3RJdGVtLmxpbmtIcmVmIiwiTGlzdCIsIkxpc3QuY29uc3RydWN0b3IiLCJMaXN0LnNldEFjdGl2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5QkFPTyxtQkFBbUIsQ0FBQyxDQUFBO0FBQzNCLHVCQUF1QixpQkFBaUIsQ0FBQyxDQUFBO0FBa0J6QztJQUVFQSxjQUFxQkEsTUFBa0JBO1FBQWxCQyxXQUFNQSxHQUFOQSxNQUFNQSxDQUFZQTtJQUFHQSxDQUFDQTtJQUMzQ0Qsc0JBQUlBLHNCQUFJQTthQUFSQTtZQUtFRSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxhQUFhQSxDQUFDQSxZQUFZQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQTtRQUN4REEsQ0FBQ0E7OztPQUFBRjtJQVRIQTtRQUFDQSxvQkFBU0EsQ0FBQ0EsRUFBRUEsUUFBUUEsRUFBRUEsR0FBR0EsRUFBRUEsQ0FBQ0E7O2FBVTVCQTtJQUFEQSxXQUFDQTtBQUFEQSxDQVZBLEFBVUNBLElBQUE7QUFFRDtJQUdFRyxrQkFBZ0NBLEtBQXNCQSxFQUNqQkEsUUFBa0JBLEVBQ25DQSxNQUFrQkEsRUFDbEJBLFNBQW1CQTtRQUhQQyxVQUFLQSxHQUFMQSxLQUFLQSxDQUFpQkE7UUFDakJBLGFBQVFBLEdBQVJBLFFBQVFBLENBQVVBO1FBQ25DQSxXQUFNQSxHQUFOQSxNQUFNQSxDQUFZQTtRQUNsQkEsY0FBU0EsR0FBVEEsU0FBU0EsQ0FBVUE7UUFKdkNBLGNBQVNBLEdBQUdBLFFBQVFBLENBQUNBO0lBSXFCQSxDQUFDQTtJQUMzQ0QsOEJBQVdBLEdBQVhBO1FBQ0VFLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLENBQUNBO1FBQzNCQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxLQUFLQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxJQUFJQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUMzQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsZUFBZUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsRUFBRUEsSUFBSUEsQ0FBQ0EsU0FBU0EsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7UUFDcEVBLENBQUNBO1FBQUNBLElBQUlBLENBQUNBLENBQUNBO1lBQ05BLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLGVBQWVBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLEVBQUVBLElBQUlBLENBQUNBLFNBQVNBLEVBQUVBLEtBQUtBLENBQUNBLENBQUNBO1FBQ3JFQSxDQUFDQTtJQUNIQSxDQUFDQTtJQUNERixzQkFBSUEsOEJBQVFBO2FBQVpBO1lBQ0VHLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLEtBQUtBLENBQUNBLElBQUlBLENBQUNBO1FBQy9CQSxDQUFDQTs7O09BQUFIO0lBakJIQTtRQUFDQSxvQkFBU0EsQ0FBQ0EsRUFBRUEsUUFBUUEsRUFBRUEsSUFBSUEsRUFBRUEsQ0FBQ0E7UUFHaEJBLFdBQUNBLGdCQUFLQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFBQTtRQUNaQSxXQUFDQSxpQkFBTUEsQ0FBQ0EsaUJBQVFBLENBQUNBLENBQUFBOztpQkFjOUJBO0lBQURBLGVBQUNBO0FBQURBLENBbEJBLEFBa0JDQSxJQUFBO0FBRUQ7SUFHRUksY0FBcUNBLE1BQTJCQTtRQUhsRUMsaUJBZ0JDQTtRQWJzQ0EsV0FBTUEsR0FBTkEsTUFBTUEsQ0FBcUJBO1FBSTlEQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxPQUFPQSxDQUFDQSxRQUFRQSxDQUFDQSxVQUFBQSxDQUFDQTtZQUM1QkEsS0FBSUEsQ0FBQ0EsU0FBU0EsRUFBRUEsQ0FBQ0E7UUFDbkJBLENBQUNBLENBQUNBLENBQUNBO0lBQ0xBLENBQUNBO0lBQ0RELHdCQUFTQSxHQUFUQTtRQUNFRSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQSxVQUFBQSxJQUFJQTtZQUNsQkEsSUFBSUEsQ0FBQ0EsV0FBV0EsRUFBRUEsQ0FBQ0E7UUFDckJBLENBQUNBLENBQUNBLENBQUNBO0lBQ0xBLENBQUNBO0lBZkhGO1FBQUNBLG9CQUFTQSxDQUFDQSxFQUFFQSxRQUFRQSxFQUFFQSxjQUFjQSxFQUFFQSxJQUFJQSxFQUFFQSxFQUFFQSxTQUFTQSxFQUFFQSxhQUFhQSxFQUFFQSxFQUFFQSxDQUFDQTtRQUc5REEsV0FBQ0EsZ0JBQUtBLENBQUNBLFFBQVFBLENBQUNBLENBQUFBOzthQWE3QkE7SUFBREEsV0FBQ0E7QUFBREEsQ0FoQkEsQUFnQkNBLElBQUE7QUFFVSxpQkFBUyxHQUFHLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQyIsImZpbGUiOiJkaXJlY3RpdmVzL3NldF9hY3RpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEluamVjdCxcbiAgUmVuZGVyZXIsXG4gIFF1ZXJ5TGlzdCxcbiAgUXVlcnlcbn0gZnJvbSAnYW5ndWxhcjIvYW5ndWxhcjInO1xuaW1wb3J0IHtMb2NhdGlvbn0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcblxuLyoqXG4gKiBTaW1wbGUgZGlyZWN0aXZlIHRvIGFkZCBjbGFzcyBhY3RpdmUgb24gYSBMSSBlbGVtZW50IHdoZW5cbiAqIGl0cyBBIGNoaWxkIGVsZW1lbnQgaXMgY2xpY2tlZCBvciBvbiBwYWdlIGxvYWQuIEFjdGl2ZSBjbGFzc1xuICogaXMgcmVtb3ZlZCBmcm9tIGFsbCBvdGhlciBMSSBlbGVtZW50LlxuICogRm9sbG93IHRoZSBzYW1lIHByaW5jaXBsZSBhcyBuYXYncyBpbiBCb290c3RyYXAuXG4gKlxuICogQEV4YW1wbGU6XG4gKiBcdDx1bCBzZXQtYWN0aXZlPlxuICogXHRcdDxsaT5cbiAqIFx0XHRcdDxhIGhyZWY9XCJhMVwiPmxpbmsgMTwvYT5cbiAqIFx0XHQ8L2xpPlxuICogXHRcdDxsaT5cbiAqIFx0XHRcdDxhIGhyZWY9XCJhXCI+bGluayAyPC9hPlxuICogXHRcdDwvbGk+XG4gKiBcdDwvdWw+XG4gKi9cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ2EnIH0pXG5jbGFzcyBMaW5rIHtcbiAgY29uc3RydWN0b3IgKHByaXZhdGUgX2VsUmVmOiBFbGVtZW50UmVmKSB7fVxuICBnZXQgaHJlZigpOiBzdHJpbmcge1xuICAgIC8vIFJlbHkgb24gdGhlIERPTSB1bnRpbCB0aGVyZSBpcyBhIGJldHRlciBvcHRpb24uXG4gICAgLy8gVGhlIHByb2JsZW0gaXMgdGhhdCB0aGUgaHJlZiBhdHRyaWJ1dGUgaXMgZ2VuZXJhdGVkIGJ5IHJvdXRlci1saW5rXG4gICAgLy8gZGlyZWN0aXZlIHdoaWNoIGlzIGluc3RhbnRpYXRlZCBhZnRlciB0aGlzIG9uZS4gaHJlZiBpcyB0aGVuIG5vdFxuICAgIC8vIGF2YWlsYWJsZSBhdCB0aGF0IHRpbWUuXG4gICAgcmV0dXJuIHRoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnbGknIH0pXG5jbGFzcyBMaXN0SXRlbSB7XG4gIGNsYXNzTmFtZSA9ICdhY3RpdmUnO1xuICBjb25zdHJ1Y3RvcihAUXVlcnkoTGluaykgcHVibGljIGxpbmtzOiBRdWVyeUxpc3Q8TGluaz4sXG4gICAgICAgICAgICAgIEBJbmplY3QoTG9jYXRpb24pIHB1YmxpYyBsb2NhdGlvbjogTG9jYXRpb24sXG4gICAgICAgICAgICAgIHByaXZhdGUgX2VsUmVmOiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIpIHt9XG4gIHRvZ2dsZUNsYXNzKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMubGlua0hyZWYpO1xuICAgIGlmICh0aGlzLmxpbmtIcmVmID09PSB0aGlzLmxvY2F0aW9uLnBhdGgoKSkge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMuX2VsUmVmLCB0aGlzLmNsYXNzTmFtZSwgdHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyh0aGlzLl9lbFJlZiwgdGhpcy5jbGFzc05hbWUsIGZhbHNlKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGxpbmtIcmVmKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMubGlua3MuZmlyc3QuaHJlZjtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbc2V0LWFjdGl2ZV0nLCBob3N0OiB7ICcoY2xpY2spJzogJ3NldEFjdGl2ZSgpJyB9IH0pXG5jbGFzcyBMaXN0IHtcbiAgX2hyZWY7XG4gIGNvbnN0cnVjdG9yKEBRdWVyeShMaXN0SXRlbSkgcHJpdmF0ZSBfaXRlbXM6IFF1ZXJ5TGlzdDxMaXN0SXRlbT4pIHtcbiAgICAvLyBfaXRlbXMgaXMgcG9wdWxhdGVkIGxhdGVyIG9uIGFzIGl0J3MgcmVmZXJzIHRvIGNoaWxkIGNsYXNzZXMuXG4gICAgLy8gU28gd2Ugd2FpdCBmb3IgY2hhbmdlcy5cbiAgICAvLyBUT0RPOiBGaWd1cmUgb3V0IHRoZSBjaGFuZ2VzIG5lZWRlZCBoZXJlIHRvIG1ha2UgdGhpcyB3b3JrIGFnYWluXG4gICAgdGhpcy5faXRlbXMuY2hhbmdlcy5vYnNlcnZlcihfID0+IHtcbiAgICAgIHRoaXMuc2V0QWN0aXZlKCk7XG4gICAgfSk7XG4gIH1cbiAgc2V0QWN0aXZlKCk6IHZvaWQge1xuICAgIHRoaXMuX2l0ZW1zLm1hcChpdGVtID0+IHtcbiAgICAgIGl0ZW0udG9nZ2xlQ2xhc3MoKTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgdmFyIFNldEFjdGl2ZSA9IFtMaXN0LCBMaXN0SXRlbSwgTGlua107XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=