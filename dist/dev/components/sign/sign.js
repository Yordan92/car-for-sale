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
var User_1 = require('services/User');
var angular2_2 = require('angular2/angular2');
var Sign = (function () {
    function Sign(fb, user) {
        this.user = user;
        var self = this;
        this.myForm = fb.group({
            'firstName': ['', angular2_2.Validators.required],
            'lastName': [''],
            'pass': ['', angular2_2.Validators.required],
            're-pass': ['', angular2_2.Validators.required]
        });
        console.log(this.myForm);
    }
    Sign.prototype.submitUser = function (arg) {
        if (arg.valid && arg.value.pass === arg.value['re-pass']) {
            this.user.getInstance().registrate(arg.value);
        }
    };
    Sign = __decorate([
        angular2_1.Component({
            selector: 'sign'
        }),
        angular2_1.View({
            directives: [angular2_2.FORM_DIRECTIVES, angular2_1.NgIf],
            template: "\n    <h1>Sign Up </h1>\n    <form class=\"top-bar flex-rows\" [ng-form-model]=\"myForm\" (ng-submit)=\"submitUser(myForm)\">\n    \t<div class=\"flex-fill top-bar\">\n    \t\t<span class=\"flex-fill\">First Name</span>\n    \t\t<input  [ng-form-control]=\"myForm.controls['firstName']\" class=\"flex-fill\" type=\"text\"/>\n    \t</div>\n    \t<div  *ng-if=\"!myForm.controls['firstName'].valid && myForm.controls['firstName'].touched\" class=\"ui error message\" style=\"color: red\">First Name must not be null\n    \t</div>\n    \t<div class=\"flex-fill top-bar\">\n    \t\t<span class=\"flex-fill\">Last Name</span>\n    \t\t<input  [ng-form-control]=\"myForm.controls['lastName']\" class=\"flex-fill\" type=\"text\"/>\n    \t</div>\n\n    \t<div class=\"flex-fill top-bar\">\n    \t\t<span class=\"flex-fill\">Password</span>\n    \t\t<input #passinput [ng-form-control]=\"myForm.controls['pass']\"  class=\"flex-fill\" type=\"password\">\n    \t</div>\n    \t<div  *ng-if=\"!myForm.controls['pass'].valid && myForm.controls['pass'].touched\" class=\"ui error message\" style=\"color: red\">Password must not be  null\n    \t</div>\n\n    \t<div class=\"flex-fill top-bar\">\n    \t\t<span class=\"flex-fill\">Re Password</span>\n    \t\t<input  [ng-form-control]=\"myForm.controls['re-pass']\" class=\"flex-fill\" type=\"password\">\n    \t</div>\n    \t<div  *ng-if=\"!myForm.controls['re-pass'].valid && myForm.controls['re-pass'].touched\" class=\"ui error message\" style=\"color: red\">Re password must not be null\n    \t</div>\n \n\n    <input type=\"submit\"/>\n    <button>Close</button>\n    </form>\n\t\t",
            viewBindings: [angular2_2.FormBuilder],
            styles: ["\n\n\t    "]
        }), 
        __metadata('design:paramtypes', [angular2_2.FormBuilder, (typeof (_a = typeof User_1.User !== 'undefined' && User_1.User) === 'function' && _a) || Object])
    ], Sign);
    return Sign;
    var _a;
})();
exports.Sign = Sign;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2lnbi9zaWduLnRzIl0sIm5hbWVzIjpbIlNpZ24iLCJTaWduLmNvbnN0cnVjdG9yIiwiU2lnbi5zdWJtaXRVc2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHlCQUFvQyxtQkFBbUIsQ0FBQyxDQUFBO0FBRXhELHFCQUFtQixlQUFlLENBQUMsQ0FBQTtBQUVuQyx5QkFBc0UsbUJBQW1CLENBQUMsQ0FBQTtBQUMxRjtJQWdEQ0EsY0FBWUEsRUFBZUEsRUFBU0EsSUFBVUE7UUFBVkMsU0FBSUEsR0FBSkEsSUFBSUEsQ0FBTUE7UUFDN0NBLElBQUlBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBO1FBQ2JBLElBQUlBLENBQUNBLE1BQU1BLEdBQUdBLEVBQUVBLENBQUNBLEtBQUtBLENBQUNBO1lBQ3pCQSxXQUFXQSxFQUFFQSxDQUFDQSxFQUFFQSxFQUFFQSxxQkFBVUEsQ0FBQ0EsUUFBUUEsQ0FBQ0E7WUFDdENBLFVBQVVBLEVBQUVBLENBQUNBLEVBQUVBLENBQUNBO1lBQ2hCQSxNQUFNQSxFQUFFQSxDQUFDQSxFQUFFQSxFQUFFQSxxQkFBVUEsQ0FBQ0EsUUFBUUEsQ0FBQ0E7WUFDakNBLFNBQVNBLEVBQUVBLENBQUNBLEVBQUVBLEVBQUVBLHFCQUFVQSxDQUFDQSxRQUFRQSxDQUFDQTtTQUNwQ0EsQ0FBQ0EsQ0FBQ0E7UUFFSEEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7SUFDMUJBLENBQUNBO0lBRURELHlCQUFVQSxHQUFWQSxVQUFXQSxHQUFHQTtRQUNiRSxFQUFFQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxLQUFLQSxJQUFJQSxHQUFHQSxDQUFDQSxLQUFLQSxDQUFDQSxJQUFJQSxLQUFLQSxHQUFHQSxDQUFDQSxLQUFLQSxDQUFDQSxTQUFTQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUMxREEsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsRUFBRUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7UUFDL0NBLENBQUNBO0lBQ0ZBLENBQUNBO0lBaEVGRjtRQUFDQSxvQkFBU0EsQ0FBQ0E7WUFDVkEsUUFBUUEsRUFBRUEsTUFBTUE7U0FDaEJBLENBQUNBO1FBRURBLGVBQUlBLENBQUNBO1lBQ0pBLFVBQVVBLEVBQUVBLENBQUNBLDBCQUFlQSxFQUFFQSxlQUFJQSxDQUFDQTtZQUNuQ0EsUUFBUUEsRUFBRUEsd2xEQWdDVEE7WUFDREEsWUFBWUEsRUFBRUEsQ0FBQ0Esc0JBQVdBLENBQUNBO1lBQ3hCQSxNQUFNQSxFQUFFQSxDQUFDQSxZQUVSQSxDQUFDQTtTQUNOQSxDQUFDQTs7YUFzQkRBO0lBQURBLFdBQUNBOztBQUFEQSxDQWpFQSxBQWlFQ0EsSUFBQTtBQXBCWSxZQUFJLE9Bb0JoQixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvc2lnbi9zaWduLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFZpZXcsIE5nSWZ9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcbmltcG9ydCB7Um91dGVDb25maWcsIFJPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtVc2VyfSBmcm9tICdzZXJ2aWNlcy9Vc2VyJztcbmltcG9ydCB7U2lnblZhbGlkYXRvcnN9IGZyb20gJ3ZhbGlkYXRvcnMvc2lnblZhbGlkYXRvcnMnO1xuaW1wb3J0IHsgRk9STV9ESVJFQ1RJVkVTLCBGb3JtQnVpbGRlciwgQ29udHJvbEdyb3VwLCBWYWxpZGF0b3JzfSBmcm9tICdhbmd1bGFyMi9hbmd1bGFyMic7XG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdzaWduJ1xufSlcblxuQFZpZXcoe1xuXHRcdGRpcmVjdGl2ZXM6IFtGT1JNX0RJUkVDVElWRVMsIE5nSWZdLFxuXHRcdHRlbXBsYXRlOiBgXG4gICAgPGgxPlNpZ24gVXAgPC9oMT5cbiAgICA8Zm9ybSBjbGFzcz1cInRvcC1iYXIgZmxleC1yb3dzXCIgW25nLWZvcm0tbW9kZWxdPVwibXlGb3JtXCIgKG5nLXN1Ym1pdCk9XCJzdWJtaXRVc2VyKG15Rm9ybSlcIj5cbiAgICBcdDxkaXYgY2xhc3M9XCJmbGV4LWZpbGwgdG9wLWJhclwiPlxuICAgIFx0XHQ8c3BhbiBjbGFzcz1cImZsZXgtZmlsbFwiPkZpcnN0IE5hbWU8L3NwYW4+XG4gICAgXHRcdDxpbnB1dCAgW25nLWZvcm0tY29udHJvbF09XCJteUZvcm0uY29udHJvbHNbJ2ZpcnN0TmFtZSddXCIgY2xhc3M9XCJmbGV4LWZpbGxcIiB0eXBlPVwidGV4dFwiLz5cbiAgICBcdDwvZGl2PlxuICAgIFx0PGRpdiAgKm5nLWlmPVwiIW15Rm9ybS5jb250cm9sc1snZmlyc3ROYW1lJ10udmFsaWQgJiYgbXlGb3JtLmNvbnRyb2xzWydmaXJzdE5hbWUnXS50b3VjaGVkXCIgY2xhc3M9XCJ1aSBlcnJvciBtZXNzYWdlXCIgc3R5bGU9XCJjb2xvcjogcmVkXCI+Rmlyc3QgTmFtZSBtdXN0IG5vdCBiZSBudWxsXG4gICAgXHQ8L2Rpdj5cbiAgICBcdDxkaXYgY2xhc3M9XCJmbGV4LWZpbGwgdG9wLWJhclwiPlxuICAgIFx0XHQ8c3BhbiBjbGFzcz1cImZsZXgtZmlsbFwiPkxhc3QgTmFtZTwvc3Bhbj5cbiAgICBcdFx0PGlucHV0ICBbbmctZm9ybS1jb250cm9sXT1cIm15Rm9ybS5jb250cm9sc1snbGFzdE5hbWUnXVwiIGNsYXNzPVwiZmxleC1maWxsXCIgdHlwZT1cInRleHRcIi8+XG4gICAgXHQ8L2Rpdj5cblxuICAgIFx0PGRpdiBjbGFzcz1cImZsZXgtZmlsbCB0b3AtYmFyXCI+XG4gICAgXHRcdDxzcGFuIGNsYXNzPVwiZmxleC1maWxsXCI+UGFzc3dvcmQ8L3NwYW4+XG4gICAgXHRcdDxpbnB1dCAjcGFzc2lucHV0IFtuZy1mb3JtLWNvbnRyb2xdPVwibXlGb3JtLmNvbnRyb2xzWydwYXNzJ11cIiAgY2xhc3M9XCJmbGV4LWZpbGxcIiB0eXBlPVwicGFzc3dvcmRcIj5cbiAgICBcdDwvZGl2PlxuICAgIFx0PGRpdiAgKm5nLWlmPVwiIW15Rm9ybS5jb250cm9sc1sncGFzcyddLnZhbGlkICYmIG15Rm9ybS5jb250cm9sc1sncGFzcyddLnRvdWNoZWRcIiBjbGFzcz1cInVpIGVycm9yIG1lc3NhZ2VcIiBzdHlsZT1cImNvbG9yOiByZWRcIj5QYXNzd29yZCBtdXN0IG5vdCBiZSAgbnVsbFxuICAgIFx0PC9kaXY+XG5cbiAgICBcdDxkaXYgY2xhc3M9XCJmbGV4LWZpbGwgdG9wLWJhclwiPlxuICAgIFx0XHQ8c3BhbiBjbGFzcz1cImZsZXgtZmlsbFwiPlJlIFBhc3N3b3JkPC9zcGFuPlxuICAgIFx0XHQ8aW5wdXQgIFtuZy1mb3JtLWNvbnRyb2xdPVwibXlGb3JtLmNvbnRyb2xzWydyZS1wYXNzJ11cIiBjbGFzcz1cImZsZXgtZmlsbFwiIHR5cGU9XCJwYXNzd29yZFwiPlxuICAgIFx0PC9kaXY+XG4gICAgXHQ8ZGl2ICAqbmctaWY9XCIhbXlGb3JtLmNvbnRyb2xzWydyZS1wYXNzJ10udmFsaWQgJiYgbXlGb3JtLmNvbnRyb2xzWydyZS1wYXNzJ10udG91Y2hlZFwiIGNsYXNzPVwidWkgZXJyb3IgbWVzc2FnZVwiIHN0eWxlPVwiY29sb3I6IHJlZFwiPlJlIHBhc3N3b3JkIG11c3Qgbm90IGJlIG51bGxcbiAgICBcdDwvZGl2PlxuIFxuXG4gICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIi8+XG4gICAgPGJ1dHRvbj5DbG9zZTwvYnV0dG9uPlxuICAgIDwvZm9ybT5cblx0XHRgLFxuXHRcdHZpZXdCaW5kaW5nczogW0Zvcm1CdWlsZGVyXSxcblx0ICAgIHN0eWxlczogW2BcblxuXHQgICAgYF1cbn0pXG4vLyBAQ2FuQWN0aXZhdGUoKG5leHQsIHByZXYpID0+IHsgY29uc29sZS5sb2cobmV4dCwgcHJldik7cmV0dXJuIGZhbHNlO30pXG5leHBvcnQgY2xhc3MgU2lnbiB7XG5cdG15Rm9ybTogQ29udHJvbEdyb3VwO1xuXG5cdGNvbnN0cnVjdG9yKGZiOiBGb3JtQnVpbGRlciwgcHVibGljIHVzZXI6IFVzZXIpIHsgIFxuXHRcdGxldCBzZWxmID0gdGhpcztcbiAgICBcdHRoaXMubXlGb3JtID0gZmIuZ3JvdXAoeyAgXG5cdFx0XHQnZmlyc3ROYW1lJzogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcblx0XHRcdCdsYXN0TmFtZSc6IFsnJ10sXG5cdFx0XHQncGFzcyc6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG5cdFx0XHQncmUtcGFzcyc6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cblx0XHR9KTtcblx0XHQvLyB0aGlzLm15Rm9ybS52YWxpZGF0b3IgPSB0aGlzLm15Rm9ybS52YWxpZGF0b3Jcblx0XHRjb25zb2xlLmxvZyh0aGlzLm15Rm9ybSk7XG5cdH1cblxuXHRzdWJtaXRVc2VyKGFyZyk6IHZvaWQge1xuXHRcdGlmIChhcmcudmFsaWQgJiYgYXJnLnZhbHVlLnBhc3MgPT09IGFyZy52YWx1ZVsncmUtcGFzcyddKSB7XG5cdFx0XHR0aGlzLnVzZXIuZ2V0SW5zdGFuY2UoKS5yZWdpc3RyYXRlKGFyZy52YWx1ZSk7XG5cdFx0fVxuXHR9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=