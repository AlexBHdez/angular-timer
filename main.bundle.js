webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"h100 bgColor\">\n  <app-timer class=\"h100\" (whenComplete)=\"logCountdownEnd()\"></app-timer>\n\n  <p class=\"footer\">by\n    <a href=\"http://www.alexbretones.com\" target=\"_blank\">AlexBHdez</a>\n  </p>\n\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.logCountdownEnd = function () {
        console.log('--countdown end--');
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_timer_timer_component__ = __webpack_require__("./src/app/components/timer/timer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_display_display_component__ = __webpack_require__("./src/app/components/display/display.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_progress_progress_component__ = __webpack_require__("./src/app/components/progress/progress.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__components_timer_timer_component__["a" /* TimerComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_display_display_component__["a" /* DisplayComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_progress_progress_component__["a" /* ProgressComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/display/display.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <span>{{minutes}}</span>\n  <span class=\"dots\">:</span>\n  <span>{{seconds}}</span>\n</div>\n"

/***/ }),

/***/ "./src/app/components/display/display.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  font-size: 25vw;\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n  font-weight: 700;\n  line-height: 0.2;\n  color: beige; }\n  :host .dots {\n    font-weight: 400; }\n  @media (min-width: 1300px) {\n  :host {\n    font-size: 320px; } }\n"

/***/ }),

/***/ "./src/app/components/display/display.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisplayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DisplayComponent = /** @class */ (function () {
    function DisplayComponent() {
        this.time = null;
        this.minutes = '00';
        this.seconds = '00';
    }
    DisplayComponent.prototype.ngOnChanges = function (changes) {
        if (changes.time) {
            var minutes = Math.trunc(changes.time.currentValue / 60);
            var seconds = changes.time.currentValue - minutes * 60;
            this.minutes = ('0' + minutes).substr(-2);
            this.seconds = ('0' + seconds).substr(-2);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Number)
    ], DisplayComponent.prototype, "time", void 0);
    DisplayComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-display',
            template: __webpack_require__("./src/app/components/display/display.component.html"),
            styles: [__webpack_require__("./src/app/components/display/display.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DisplayComponent);
    return DisplayComponent;
}());



/***/ }),

/***/ "./src/app/components/progress/progress.component.html":
/***/ (function(module, exports) {

module.exports = "<div [style.height.%]=\"progress\"></div>\n\n"

/***/ }),

/***/ "./src/app/components/progress/progress.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  background-color: #ed7b84; }\n  :host div {\n    background-color: #ed7b84; }\n"

/***/ }),

/***/ "./src/app/components/progress/progress.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProgressComponent = /** @class */ (function () {
    function ProgressComponent() {
        this.progress = 0;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], ProgressComponent.prototype, "progress", void 0);
    ProgressComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-progress',
            template: __webpack_require__("./src/app/components/progress/progress.component.html"),
            styles: [__webpack_require__("./src/app/components/progress/progress.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProgressComponent);
    return ProgressComponent;
}());



/***/ }),

/***/ "./src/app/components/timer/timer.component.html":
/***/ (function(module, exports) {

module.exports = "<app-progress [progress]=\"progress\"></app-progress>\n<div class=\"timer\">\n  <app-display [time]=\"countdown\"></app-display>\n  \n  <div class=\"buttons\">\n    <button *ngIf=\"!timerService.paused\" (click)=\"timerService.toggleCountdown()\" class=\"start\">START</button>\n    <button *ngIf=\"timerService.paused\" (click)=\"timerService.toggleCountdown()\" class=\"pause\">PAUSE</button>\n    <button (click)=\"timerService.restartCountdown(time.value)\" class=\"restart\">RESTART</button>\n  </div>\n\n  <div class=\"timePicker\">\n    <input type=\"text\" pattern=\"[0-9]\" class=\"timeByUser\" (keyup)=\"setTimer($event)\" #time placeholder=\"seconds\">\n    <p class=\"timeInfo\">Just write your time in seconds and play.</p>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/timer/timer.component.scss":
/***/ (function(module, exports) {

module.exports = ".timer {\n  position: fixed;\n  top: 40%;\n  width: 100%;\n  text-align: center; }\n  .timer .buttons {\n    position: absolute;\n    width: 100%;\n    top: 350px; }\n  .timer .buttons button {\n      cursor: pointer;\n      font-size: 18px;\n      letter-spacing: 2px;\n      text-transform: uppercase;\n      display: inline-block;\n      text-align: center;\n      width: 270px;\n      font-weight: bold;\n      padding: 14px 0px;\n      border: 3px solid #d6d5b3;\n      border-radius: 2px;\n      position: relative;\n      -webkit-box-shadow: 0 2px 10px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.1);\n              box-shadow: 0 2px 10px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.1);\n      background-color: transparent; }\n  .timer .buttons button:before {\n        -webkit-transition: 0.5s all ease;\n        transition: 0.5s all ease;\n        position: absolute;\n        top: 0;\n        left: 50%;\n        right: 50%;\n        bottom: 0;\n        opacity: 0;\n        content: '';\n        background-color: #d6d5b3;\n        z-index: -2; }\n  .timer .buttons button:hover:before {\n        -webkit-transition: 0.5s all ease;\n        transition: 0.5s all ease;\n        left: 0;\n        right: 0;\n        opacity: 1; }\n  .timer .buttons button:focus:before {\n        -webkit-transition: 0.5s all ease;\n        transition: 0.5s all ease;\n        left: 0;\n        right: 0;\n        opacity: 1; }\n  .timer .buttons .start, .timer .buttons .pause {\n      color: #FFF;\n      text-decoration: none;\n      -webkit-transition: 0.3s all ease;\n      -webkit-transition: 0.3s ease all;\n      transition: 0.3s ease all; }\n  .timer .buttons .start:hover, .timer .buttons .pause:hover {\n        color: #FFF; }\n  .timer .buttons .start:focus, .timer .buttons .pause:focus {\n        color: #FFF; }\n  .timer .buttons .restart {\n      color: #d6d5b3;\n      text-decoration: none;\n      -webkit-transition: 0.3s all ease;\n      -webkit-transition: 0.3s ease all;\n      transition: 0.3s ease all; }\n  .timer .buttons .restart:hover {\n        color: #FFF; }\n  .timer .buttons .restart:focus {\n        color: #FFF; }\n  .timer .timePicker {\n    position: absolute;\n    top: 200px;\n    text-align: center;\n    width: 100%; }\n  .timer .timePicker .timeByUser {\n      font-size: 10px;\n      letter-spacing: 2px;\n      text-transform: uppercase;\n      text-align: center;\n      width: 135px;\n      font-weight: bold;\n      padding: 14px 0px;\n      border: 1.5px solid #d6d5b3;\n      border-radius: 2px;\n      position: relative;\n      -webkit-box-shadow: 0 2px 10px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.1);\n              box-shadow: 0 2px 10px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.1);\n      background-color: rgba(214, 213, 179, 0.3);\n      color: #FFF; }\n  .timer .timePicker .timeInfo {\n      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n      color: #d6d5b3;\n      font-weight: 400; }\n"

/***/ }),

/***/ "./src/app/components/timer/timer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_timer_service__ = __webpack_require__("./src/app/services/timer.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TimerComponent = /** @class */ (function () {
    function TimerComponent(timerService) {
        this.timerService = timerService;
        this.init = 0;
        this.whenComplete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.countdownEndSubscription = null;
        this.countdownSubscription = null;
        this.countdown = 0;
    }
    Object.defineProperty(TimerComponent.prototype, "progress", {
        get: function () {
            return (this.init - this.countdown) / this.init * 100;
        },
        enumerable: true,
        configurable: true
    });
    TimerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.timerService.restartCountdown(this.init);
        this.countdownEndSubscription = this.timerService.countdownEnd$.subscribe(function () {
            _this.whenComplete.emit();
        });
        this.countdownSubscription = this.timerService.countdown$.subscribe(function (data) {
            _this.countdown = data;
        });
    };
    TimerComponent.prototype.ngOnDestroy = function () {
        this.timerService.destroy();
        this.countdownEndSubscription.unsubscribe();
        this.countdownSubscription.unsubscribe();
    };
    TimerComponent.prototype.setTimer = function (event) {
        var time = parseInt(event.target.value, 2);
        if (isNaN(time)) {
            this.init = 0;
        }
        else {
            this.init = event.target.value;
            this.timerService.setTimer(event.target.value);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], TimerComponent.prototype, "init", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], TimerComponent.prototype, "whenComplete", void 0);
    TimerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-timer',
            template: __webpack_require__("./src/app/components/timer/timer.component.html"),
            styles: [__webpack_require__("./src/app/components/timer/timer.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_timer_service__["a" /* TimerService */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_timer_service__["a" /* TimerService */]])
    ], TimerComponent);
    return TimerComponent;
}());



/***/ }),

/***/ "./src/app/services/timer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TimerService = /** @class */ (function () {
    function TimerService() {
        this.countdownTimerRef = null;
        this.paused = false;
        this.init = 0;
        this.countdownEndSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.countdownEnd$ = this.countdownEndSource.asObservable();
        this.countdownSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](0);
        this.countdown$ = this.countdownSource.asObservable();
    }
    TimerService.prototype.destroy = function () {
        this.clearTimeout();
    };
    TimerService.prototype.setTimer = function (time) {
        this.countdownSource.next(time);
    };
    TimerService.prototype.restartCountdown = function (time) {
        this.paused = false;
        this.clearTimeout();
        this.countdownSource.next(time);
    };
    TimerService.prototype.toggleCountdown = function () {
        this.paused = !this.paused;
        if (this.paused === true) {
            this.doCountdown();
        }
        else {
            this.clearTimeout();
        }
    };
    TimerService.prototype.doCountdown = function () {
        var _this = this;
        this.countdownTimerRef = setTimeout(function () {
            _this.countdownSource.next(_this.countdownSource.getValue() - 1);
            _this.processCountdown();
        }, 1000);
    };
    TimerService.prototype.processCountdown = function () {
        if (this.countdownSource.getValue() <= 0) {
            this.countdownEndSource.next();
        }
        else {
            this.doCountdown();
        }
    };
    TimerService.prototype.clearTimeout = function () {
        if (this.countdownTimerRef) {
            clearTimeout(this.countdownTimerRef);
            this.countdownTimerRef = null;
        }
    };
    TimerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], TimerService);
    return TimerService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map