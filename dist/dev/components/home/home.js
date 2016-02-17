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
var Home = (function () {
    function Home() {
    }
    Home = __decorate([
        angular2_1.Component({
            selector: 'home'
        }),
        angular2_1.View({
            template: "\n   <div>\n   <div ng-for=\"*car of carInStock\">\n   \t<h1>{car.model}</h1>\n   </div>\n   </div>\n\t",
            styles: ["\n      .note {\n        color: #a8a8a8;\n      }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], Home);
    return Home;
})();
exports.Home = Home;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaG9tZS9ob21lLnRzIl0sIm5hbWVzIjpbIkhvbWUiLCJIb21lLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHlCQUE4QixtQkFBbUIsQ0FBQyxDQUFBO0FBQ2xEO0lBQUFBO0lBa0JtQkMsQ0FBQ0E7SUFsQnBCRDtRQUFDQSxvQkFBU0EsQ0FBQ0E7WUFDVkEsUUFBUUEsRUFBRUEsTUFBTUE7U0FDaEJBLENBQUNBO1FBRURBLGVBQUlBLENBQUNBO1lBQ0xBLFFBQVFBLEVBQUVBLHlHQU1UQTtZQUNFQSxNQUFNQSxFQUFFQSxDQUFDQSx5REFJUkEsQ0FBQ0E7U0FDTEEsQ0FBQ0E7O2FBQ2tCQTtJQUFEQSxXQUFDQTtBQUFEQSxDQWxCbkIsQUFrQm9CQSxJQUFBO0FBQVAsWUFBSSxPQUFHLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9ob21lL2hvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgVmlld30gZnJvbSAnYW5ndWxhcjIvYW5ndWxhcjInO1xuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnaG9tZSdcbn0pXG5cbkBWaWV3KHtcblx0dGVtcGxhdGU6IGBcbiAgIDxkaXY+XG4gICA8ZGl2IG5nLWZvcj1cIipjYXIgb2YgY2FySW5TdG9ja1wiPlxuICAgXHQ8aDE+e2Nhci5tb2RlbH08L2gxPlxuICAgPC9kaXY+XG4gICA8L2Rpdj5cblx0YCxcbiAgICBzdHlsZXM6IFtgXG4gICAgICAubm90ZSB7XG4gICAgICAgIGNvbG9yOiAjYThhOGE4O1xuICAgICAgfVxuICAgIGBdXG59KVxuZXhwb3J0IGNsYXNzIEhvbWUge31cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==