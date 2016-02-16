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
var car_upload_1 = require('../../services/car_upload');
var angular2_2 = require('angular2/angular2');
var About = (function () {
    function About(list, carUpload) {
        this.list = list;
        this.carUpload = carUpload;
        this.cars = [];
        debugger;
        this.cars = list.get();
    }
    About.prototype.submit = function (data) {
        debugger;
        this.carUpload.uploadCar(data.data, data.file);
    };
    About.prototype.selectModels = function (value) {
        return this.list.getCarByMake(value);
    };
    About = __decorate([
        angular2_1.Component({
            selector: 'about',
            styles: [
                "\n      ul li a {\n        color:blue;\n        cursor:pointer;\n      }\n    "
            ],
            template: "\n    <h1>Upload Car</h1>\n    <form class=\"top-bar flex-rows\" #f=\"form\" (ng-submit)=\"submit({data: f.value, file: file.files[0]})\">\n        <div class=\"flex-fill top-bar\">\n            <span class=\"flex-fill\">Make</span>\n            <select class=\"flex-fill\" ng-control=\"make\">\n                <option *ng-for=\"#car of cars\" [value]=\"car.make\">{{car.make}}</option>\n            </select>\n        </div>\n    \n        <div class=\"flex-fill top-bar\">\n            <span class=\"flex-fill\">Model</span>\n             <select class=\"flex-fill\" ng-control=\"model\">\n                <option *ng-for=\"#model of selectModels(f.value.make)\" [value]=\"model\">{{model}}</option>\n            </select>\n        </div>\n\n         <div class=\"flex-fill top-bar\">\n            <span class=\"flex-fill\">Price</span>\n            <input ng-control=\"price\" type=\"text\"/>\n        </div>\n\n        <div class=\"flex-fill top-bar\">\n            <span class=\"flex-fill\">Year of creation</span>\n            <input ng-control=\"year\" class=\"flex-fill\" type=\"date\">\n        </div>\n\n        <div class=\"flex-fill top-bar\">\n            <span class=\"flex-fill\">Image</span>\n            <input #file class=\"flex-fill\" type=\"file\">\n        </div>\n        <input type=\"submit\"/>\n        <button type=\"button\">Close</button>\n    </form>\n  ",
            directives: [angular2_1.CORE_DIRECTIVES, angular2_1.NgFor, angular2_1.NgModel, angular2_2.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [name_list_1.NameList, car_upload_1.CarUpload])
    ], About);
    return About;
})();
exports.About = About;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYWJvdXQvYWJvdXQudHMiXSwibmFtZXMiOlsiQWJvdXQiLCJBYm91dC5jb25zdHJ1Y3RvciIsIkFib3V0LnN1Ym1pdCIsIkFib3V0LnNlbGVjdE1vZGVscyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx5QkFBeUQsbUJBQW1CLENBQUMsQ0FBQTtBQUU3RSwwQkFBdUIsMEJBQTBCLENBQUMsQ0FBQTtBQUNsRCwyQkFBd0IsMkJBQ3hCLENBQUMsQ0FEa0Q7QUFDbkQseUJBQXNFLG1CQUFtQixDQUFDLENBQUE7QUFFMUY7SUFrREVBLGVBQW1CQSxJQUFjQSxFQUFVQSxTQUFvQkE7UUFBNUNDLFNBQUlBLEdBQUpBLElBQUlBLENBQVVBO1FBQVVBLGNBQVNBLEdBQVRBLFNBQVNBLENBQVdBO1FBRi9EQSxTQUFJQSxHQUFHQSxFQUFFQSxDQUFDQTtRQUdSQSxRQUFRQSxDQUFDQTtRQUNUQSxJQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQTtJQUN6QkEsQ0FBQ0E7SUFFREQsc0JBQU1BLEdBQU5BLFVBQU9BLElBQUlBO1FBQ1RFLFFBQVFBLENBQUNBO1FBQ1RBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLFNBQVNBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLEVBQUVBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO0lBRWpEQSxDQUFDQTtJQUVERiw0QkFBWUEsR0FBWkEsVUFBYUEsS0FBS0E7UUFDaEJHLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLEtBQUtBLENBQUNBLENBQUFBO0lBQ3RDQSxDQUFDQTtJQS9ESEg7UUFBQ0Esb0JBQVNBLENBQUNBO1lBQ1RBLFFBQVFBLEVBQUVBLE9BQU9BO1lBQ2pCQSxNQUFNQSxFQUFFQTtnQkFDTkEsZ0ZBS0NBO2FBQ0ZBO1lBQ0RBLFFBQVFBLEVBQUVBLDAyQ0FrQ1RBO1lBQ0RBLFVBQVVBLEVBQUVBLENBQUNBLDBCQUFlQSxFQUFFQSxnQkFBS0EsRUFBRUEsa0JBQU9BLEVBQUVBLDBCQUFlQSxDQUFDQTtTQUMvREEsQ0FBQ0E7O2NBa0JEQTtJQUFEQSxZQUFDQTtBQUFEQSxDQWhFQSxBQWdFQ0EsSUFBQTtBQWpCWSxhQUFLLFFBaUJqQixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvYWJvdXQvYWJvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgQ09SRV9ESVJFQ1RJVkVTLCBOZ0ZvciwgTmdNb2RlbH0gZnJvbSAnYW5ndWxhcjIvYW5ndWxhcjInO1xuXG5pbXBvcnQge05hbWVMaXN0fSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9uYW1lX2xpc3QnO1xuaW1wb3J0IHtDYXJVcGxvYWR9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Nhcl91cGxvYWQnXG5pbXBvcnQgeyBGT1JNX0RJUkVDVElWRVMsIEZvcm1CdWlsZGVyLCBDb250cm9sR3JvdXAsIFZhbGlkYXRvcnN9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYWJvdXQnLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgICB1bCBsaSBhIHtcbiAgICAgICAgY29sb3I6Ymx1ZTtcbiAgICAgICAgY3Vyc29yOnBvaW50ZXI7XG4gICAgICB9XG4gICAgYFxuICBdLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxoMT5VcGxvYWQgQ2FyPC9oMT5cbiAgICA8Zm9ybSBjbGFzcz1cInRvcC1iYXIgZmxleC1yb3dzXCIgI2Y9XCJmb3JtXCIgKG5nLXN1Ym1pdCk9XCJzdWJtaXQoe2RhdGE6IGYudmFsdWUsIGZpbGU6IGZpbGUuZmlsZXNbMF19KVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleC1maWxsIHRvcC1iYXJcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmxleC1maWxsXCI+TWFrZTwvc3Bhbj5cbiAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJmbGV4LWZpbGxcIiBuZy1jb250cm9sPVwibWFrZVwiPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nLWZvcj1cIiNjYXIgb2YgY2Fyc1wiIFt2YWx1ZV09XCJjYXIubWFrZVwiPnt7Y2FyLm1ha2V9fTwvb3B0aW9uPlxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvZGl2PlxuICAgIFxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleC1maWxsIHRvcC1iYXJcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmxleC1maWxsXCI+TW9kZWw8L3NwYW4+XG4gICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cImZsZXgtZmlsbFwiIG5nLWNvbnRyb2w9XCJtb2RlbFwiPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nLWZvcj1cIiNtb2RlbCBvZiBzZWxlY3RNb2RlbHMoZi52YWx1ZS5tYWtlKVwiIFt2YWx1ZV09XCJtb2RlbFwiPnt7bW9kZWx9fTwvb3B0aW9uPlxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleC1maWxsIHRvcC1iYXJcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmxleC1maWxsXCI+UHJpY2U8L3NwYW4+XG4gICAgICAgICAgICA8aW5wdXQgbmctY29udHJvbD1cInByaWNlXCIgdHlwZT1cInRleHRcIi8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4LWZpbGwgdG9wLWJhclwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmbGV4LWZpbGxcIj5ZZWFyIG9mIGNyZWF0aW9uPC9zcGFuPlxuICAgICAgICAgICAgPGlucHV0IG5nLWNvbnRyb2w9XCJ5ZWFyXCIgY2xhc3M9XCJmbGV4LWZpbGxcIiB0eXBlPVwiZGF0ZVwiPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleC1maWxsIHRvcC1iYXJcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmxleC1maWxsXCI+SW1hZ2U8L3NwYW4+XG4gICAgICAgICAgICA8aW5wdXQgI2ZpbGUgY2xhc3M9XCJmbGV4LWZpbGxcIiB0eXBlPVwiZmlsZVwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIi8+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiPkNsb3NlPC9idXR0b24+XG4gICAgPC9mb3JtPlxuICBgLFxuICBkaXJlY3RpdmVzOiBbQ09SRV9ESVJFQ1RJVkVTLCBOZ0ZvciwgTmdNb2RlbCwgRk9STV9ESVJFQ1RJVkVTXVxufSlcbmV4cG9ydCBjbGFzcyBBYm91dCB7XG4gIGNhcnMgPSBbXTtcbiAgXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBsaXN0OiBOYW1lTGlzdCwgcHJpdmF0ZSBjYXJVcGxvYWQ6IENhclVwbG9hZCkge1xuICAgIGRlYnVnZ2VyO1xuICAgIHRoaXMuY2FycyA9IGxpc3QuZ2V0KCk7XG4gIH1cblxuICBzdWJtaXQoZGF0YSkge1xuICAgIGRlYnVnZ2VyO1xuICAgIHRoaXMuY2FyVXBsb2FkLnVwbG9hZENhcihkYXRhLmRhdGEsIGRhdGEuZmlsZSk7XG5cbiAgfVxuXG4gIHNlbGVjdE1vZGVscyh2YWx1ZSkge1xuICAgIHJldHVybiB0aGlzLmxpc3QuZ2V0Q2FyQnlNYWtlKHZhbHVlKVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=