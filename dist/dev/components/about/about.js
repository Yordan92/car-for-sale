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
        this.cars = list.get();
    }
    About.prototype.submit = function (data) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYWJvdXQvYWJvdXQudHMiXSwibmFtZXMiOlsiQWJvdXQiLCJBYm91dC5jb25zdHJ1Y3RvciIsIkFib3V0LnN1Ym1pdCIsIkFib3V0LnNlbGVjdE1vZGVscyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx5QkFBeUQsbUJBQW1CLENBQUMsQ0FBQTtBQUU3RSwwQkFBdUIsMEJBQTBCLENBQUMsQ0FBQTtBQUNsRCwyQkFBd0IsMkJBQTJCLENBQUMsQ0FBQTtBQUNwRCx5QkFBK0IsbUJBQW1CLENBQUMsQ0FBQTtBQUVuRDtJQWtERUEsZUFBbUJBLElBQWNBLEVBQVVBLFNBQW9CQTtRQUE1Q0MsU0FBSUEsR0FBSkEsSUFBSUEsQ0FBVUE7UUFBVUEsY0FBU0EsR0FBVEEsU0FBU0EsQ0FBV0E7UUFGL0RBLFNBQUlBLEdBQUdBLEVBQUVBLENBQUNBO1FBR1JBLElBQUlBLENBQUNBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBLEdBQUdBLEVBQUVBLENBQUNBO0lBQ3pCQSxDQUFDQTtJQUVERCxzQkFBTUEsR0FBTkEsVUFBT0EsSUFBSUE7UUFDVEUsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsRUFBRUEsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7SUFDakRBLENBQUNBO0lBRURGLDRCQUFZQSxHQUFaQSxVQUFhQSxLQUFLQTtRQUNoQkcsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7SUFDdkNBLENBQUNBO0lBNURISDtRQUFDQSxvQkFBU0EsQ0FBQ0E7WUFDVEEsUUFBUUEsRUFBRUEsT0FBT0E7WUFDakJBLE1BQU1BLEVBQUVBO2dCQUNOQSxnRkFLQ0E7YUFDRkE7WUFDREEsUUFBUUEsRUFBRUEsMDJDQWtDVEE7WUFDREEsVUFBVUEsRUFBRUEsQ0FBQ0EsMEJBQWVBLEVBQUVBLGdCQUFLQSxFQUFFQSxrQkFBT0EsRUFBRUEsMEJBQWVBLENBQUNBO1NBQy9EQSxDQUFDQTs7Y0FlREE7SUFBREEsWUFBQ0E7QUFBREEsQ0E3REEsQUE2RENBLElBQUE7QUFkWSxhQUFLLFFBY2pCLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9hYm91dC9hYm91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBDT1JFX0RJUkVDVElWRVMsIE5nRm9yLCBOZ01vZGVsfSBmcm9tICdhbmd1bGFyMi9hbmd1bGFyMic7XG5cbmltcG9ydCB7TmFtZUxpc3R9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25hbWVfbGlzdCc7XG5pbXBvcnQge0NhclVwbG9hZH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY2FyX3VwbG9hZCc7XG5pbXBvcnQgeyBGT1JNX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYWJvdXQnLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgICB1bCBsaSBhIHtcbiAgICAgICAgY29sb3I6Ymx1ZTtcbiAgICAgICAgY3Vyc29yOnBvaW50ZXI7XG4gICAgICB9XG4gICAgYFxuICBdLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxoMT5VcGxvYWQgQ2FyPC9oMT5cbiAgICA8Zm9ybSBjbGFzcz1cInRvcC1iYXIgZmxleC1yb3dzXCIgI2Y9XCJmb3JtXCIgKG5nLXN1Ym1pdCk9XCJzdWJtaXQoe2RhdGE6IGYudmFsdWUsIGZpbGU6IGZpbGUuZmlsZXNbMF19KVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleC1maWxsIHRvcC1iYXJcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmxleC1maWxsXCI+TWFrZTwvc3Bhbj5cbiAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJmbGV4LWZpbGxcIiBuZy1jb250cm9sPVwibWFrZVwiPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nLWZvcj1cIiNjYXIgb2YgY2Fyc1wiIFt2YWx1ZV09XCJjYXIubWFrZVwiPnt7Y2FyLm1ha2V9fTwvb3B0aW9uPlxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvZGl2PlxuICAgIFxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleC1maWxsIHRvcC1iYXJcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmxleC1maWxsXCI+TW9kZWw8L3NwYW4+XG4gICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cImZsZXgtZmlsbFwiIG5nLWNvbnRyb2w9XCJtb2RlbFwiPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nLWZvcj1cIiNtb2RlbCBvZiBzZWxlY3RNb2RlbHMoZi52YWx1ZS5tYWtlKVwiIFt2YWx1ZV09XCJtb2RlbFwiPnt7bW9kZWx9fTwvb3B0aW9uPlxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleC1maWxsIHRvcC1iYXJcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmxleC1maWxsXCI+UHJpY2U8L3NwYW4+XG4gICAgICAgICAgICA8aW5wdXQgbmctY29udHJvbD1cInByaWNlXCIgdHlwZT1cInRleHRcIi8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4LWZpbGwgdG9wLWJhclwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmbGV4LWZpbGxcIj5ZZWFyIG9mIGNyZWF0aW9uPC9zcGFuPlxuICAgICAgICAgICAgPGlucHV0IG5nLWNvbnRyb2w9XCJ5ZWFyXCIgY2xhc3M9XCJmbGV4LWZpbGxcIiB0eXBlPVwiZGF0ZVwiPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleC1maWxsIHRvcC1iYXJcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmxleC1maWxsXCI+SW1hZ2U8L3NwYW4+XG4gICAgICAgICAgICA8aW5wdXQgI2ZpbGUgY2xhc3M9XCJmbGV4LWZpbGxcIiB0eXBlPVwiZmlsZVwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIi8+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiPkNsb3NlPC9idXR0b24+XG4gICAgPC9mb3JtPlxuICBgLFxuICBkaXJlY3RpdmVzOiBbQ09SRV9ESVJFQ1RJVkVTLCBOZ0ZvciwgTmdNb2RlbCwgRk9STV9ESVJFQ1RJVkVTXVxufSlcbmV4cG9ydCBjbGFzcyBBYm91dCB7XG4gIGNhcnMgPSBbXTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbGlzdDogTmFtZUxpc3QsIHByaXZhdGUgY2FyVXBsb2FkOiBDYXJVcGxvYWQpIHtcbiAgICB0aGlzLmNhcnMgPSBsaXN0LmdldCgpO1xuICB9XG5cbiAgc3VibWl0KGRhdGEpIHtcbiAgICB0aGlzLmNhclVwbG9hZC51cGxvYWRDYXIoZGF0YS5kYXRhLCBkYXRhLmZpbGUpO1xuICB9XG5cbiAgc2VsZWN0TW9kZWxzKHZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMubGlzdC5nZXRDYXJCeU1ha2UodmFsdWUpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=