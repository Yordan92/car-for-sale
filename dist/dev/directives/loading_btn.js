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
var LoadingBtn = (function () {
    function LoadingBtn(_elRef) {
        this._elRef = _elRef;
        this._loading = false;
        this.sampleCustomEvent = new angular2_1.EventEmitter();
        this._originalText = this._elRef.nativeElement.innerHTML;
    }
    LoadingBtn.prototype.toggleText = function () {
        if (this._loading) {
            this._elRef.nativeElement.innerHTML = this._text;
        }
        else {
            this._elRef.nativeElement.innerHTML = this._originalText;
        }
    };
    Object.defineProperty(LoadingBtn.prototype, "text", {
        set: function (v) {
            if (!v) {
                v = 'default text';
            }
            this._text = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoadingBtn.prototype, "loading", {
        set: function (v) {
            this.sampleCustomEvent.next("Button is " + (v ? '' : 'not ') + "loading.");
            this._loading = v;
            this.toggleText();
        },
        enumerable: true,
        configurable: true
    });
    LoadingBtn = __decorate([
        angular2_1.Directive({
            selector: 'button[loading-btn]',
            properties: [
                'text: loadingText',
                'loading: loadingMore'
            ],
            events: [
                'sampleCustomEvent'
            ],
            host: {
                '[disabled]': '_loading'
            }
        }), 
        __metadata('design:paramtypes', [angular2_1.ElementRef])
    ], LoadingBtn);
    return LoadingBtn;
})();
exports.LoadingBtn = LoadingBtn;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpcmVjdGl2ZXMvbG9hZGluZ19idG4udHMiXSwibmFtZXMiOlsiTG9hZGluZ0J0biIsIkxvYWRpbmdCdG4uY29uc3RydWN0b3IiLCJMb2FkaW5nQnRuLnRvZ2dsZVRleHQiLCJMb2FkaW5nQnRuLnRleHQiLCJMb2FkaW5nQnRuLmxvYWRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEseUJBQWtELG1CQUFtQixDQUFDLENBQUE7QUFpQnRFO0lBa0JFQSxvQkFBb0JBLE1BQWtCQTtRQUFsQkMsV0FBTUEsR0FBTkEsTUFBTUEsQ0FBWUE7UUFKL0JBLGFBQVFBLEdBQUdBLEtBQUtBLENBQUNBO1FBR2hCQSxzQkFBaUJBLEdBQUdBLElBQUlBLHVCQUFZQSxFQUFFQSxDQUFDQTtRQUU3Q0EsSUFBSUEsQ0FBQ0EsYUFBYUEsR0FBR0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsU0FBU0EsQ0FBQ0E7SUFDM0RBLENBQUNBO0lBQ0RELCtCQUFVQSxHQUFWQTtRQUNFRSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNsQkEsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsU0FBU0EsR0FBR0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0E7UUFDbkRBLENBQUNBO1FBQUNBLElBQUlBLENBQUNBLENBQUNBO1lBQ05BLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLGFBQWFBLENBQUNBLFNBQVNBLEdBQUdBLElBQUlBLENBQUNBLGFBQWFBLENBQUNBO1FBQzNEQSxDQUFDQTtJQUNIQSxDQUFDQTtJQUNERixzQkFBSUEsNEJBQUlBO2FBQVJBLFVBQVNBLENBQVNBO1lBQ2hCRyxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFBQ0EsQ0FBQ0EsR0FBR0EsY0FBY0EsQ0FBQ0E7WUFBQ0EsQ0FBQ0E7WUFDL0JBLElBQUlBLENBQUNBLEtBQUtBLEdBQUdBLENBQUNBLENBQUNBO1FBQ2pCQSxDQUFDQTs7O09BQUFIO0lBQ0RBLHNCQUFJQSwrQkFBT0E7YUFBWEEsVUFBWUEsQ0FBVUE7WUFDcEJJLElBQUlBLENBQUNBLGlCQUFpQkEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsZ0JBQWFBLENBQUNBLEdBQUdBLEVBQUVBLEdBQUdBLE1BQU1BLGNBQVVBLENBQUNBLENBQUNBO1lBQ3BFQSxJQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxDQUFDQSxDQUFDQTtZQUNsQkEsSUFBSUEsQ0FBQ0EsVUFBVUEsRUFBRUEsQ0FBQ0E7UUFDcEJBLENBQUNBOzs7T0FBQUo7SUFwQ0hBO1FBQUNBLG9CQUFTQSxDQUFDQTtZQUNUQSxRQUFRQSxFQUFFQSxxQkFBcUJBO1lBQy9CQSxVQUFVQSxFQUFFQTtnQkFDVkEsbUJBQW1CQTtnQkFDbkJBLHNCQUFzQkE7YUFDdkJBO1lBQ0RBLE1BQU1BLEVBQUVBO2dCQUNOQSxtQkFBbUJBO2FBQ3BCQTtZQUNEQSxJQUFJQSxFQUFFQTtnQkFDSkEsWUFBWUEsRUFBRUEsVUFBVUE7YUFDekJBO1NBQ0ZBLENBQUNBOzttQkF5QkRBO0lBQURBLGlCQUFDQTtBQUFEQSxDQXJDQSxBQXFDQ0EsSUFBQTtBQXhCWSxrQkFBVSxhQXdCdEIsQ0FBQSIsImZpbGUiOiJkaXJlY3RpdmVzL2xvYWRpbmdfYnRuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlcn0gZnJvbSAnYW5ndWxhcjIvYW5ndWxhcjInO1xuLyoqXG4gKiBTaW1wbGUgZGlyZWN0aXZlIHRvIGRpc3BsYXkgYW4gYWN0aW9uIG1lc3NhZ2UgKHZpYSBbbG9hZGluZy10ZXh0XSBwcm9wZXJ0eSkgaW4gYSBidXR0b24gd2hlbiBjbGlja2VkLlxuICogVGhlIGJ1dHRvbiBpcyB0aGVuIGRpc2FibGVkIHVudGlsIHRoZSBhY3Rpb24gaXMgY29tcGxldGVkLlxuICogSXQgaGFuZGxlcyBzdGF0ZSB2aWEgdGhlIFtsb2FkaW5nLW1vcmVdIHByb3BlcnR5LlxuICogU2hvd3MgaG93IGFuIGV4YW1wbGUgb2YgaG93IHRvIGVtaXQgY3VzdG9tIGV2ZW50cyAoc2FtcGxlLWN1c3RvbS1ldmVudCkgd2l0aCBhIHZhbHVlLlxuICpcbiAqIEBFeGFtcGxlOlxuICogIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIFxuICogICAgbG9hZGluZyBcbiAqICAgIFtsb2FkaW5nLXRleHRdPVwiJ0xvYWRpbmcgbW9yZS4uLidcIiBcbiAqICAgIFtsb2FkaW5nLW1vcmVdPVwiYW55LWJpbmRpbmdcIiBcbiAqICAgIChzYW1wbGUtY3VzdG9tLWV2ZW50KT1cImV2ZW50SGFuZGxlcigkZXZlbnQpXCJcbiAqICAgIChjbGljayk9XCJhbnlBY3Rpb24oKVwiPlxuICogIFx0ICBDYWxsIG15IGFjdGlvblxuICogIDwvYnV0dG9uPlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdidXR0b25bbG9hZGluZy1idG5dJyxcbiAgcHJvcGVydGllczogW1xuICAgICd0ZXh0OiBsb2FkaW5nVGV4dCcsXG4gICAgJ2xvYWRpbmc6IGxvYWRpbmdNb3JlJ1xuICBdLFxuICBldmVudHM6IFtcbiAgICAnc2FtcGxlQ3VzdG9tRXZlbnQnXG4gIF0sXG4gIGhvc3Q6IHtcbiAgICAnW2Rpc2FibGVkXSc6ICdfbG9hZGluZydcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBMb2FkaW5nQnRuIHtcbiAgcHVibGljIF9sb2FkaW5nID0gZmFsc2U7XG4gIHByaXZhdGUgX3RleHQ6IHN0cmluZztcbiAgcHJpdmF0ZSBfb3JpZ2luYWxUZXh0OiBzdHJpbmc7XG4gIHByaXZhdGUgc2FtcGxlQ3VzdG9tRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsUmVmOiBFbGVtZW50UmVmKSB7XG4gICAgdGhpcy5fb3JpZ2luYWxUZXh0ID0gdGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudC5pbm5lckhUTUw7XG4gIH1cbiAgdG9nZ2xlVGV4dCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fbG9hZGluZykge1xuICAgICAgdGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLl90ZXh0O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50LmlubmVySFRNTCA9IHRoaXMuX29yaWdpbmFsVGV4dDtcbiAgICB9XG4gIH1cbiAgc2V0IHRleHQodjogc3RyaW5nKSB7XG4gICAgaWYgKCF2KSB7IHYgPSAnZGVmYXVsdCB0ZXh0JzsgfVxuICAgIHRoaXMuX3RleHQgPSB2O1xuICB9XG4gIHNldCBsb2FkaW5nKHY6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnNhbXBsZUN1c3RvbUV2ZW50Lm5leHQoYEJ1dHRvbiBpcyAke3YgPyAnJyA6ICdub3QgJ31sb2FkaW5nLmApO1xuICAgIHRoaXMuX2xvYWRpbmcgPSB2O1xuICAgIHRoaXMudG9nZ2xlVGV4dCgpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=