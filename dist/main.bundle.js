webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout_app_component__ = __webpack_require__("../../../../../src/app/layout/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_header_header_component__ = __webpack_require__("../../../../../src/app/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_contact_header_contact_header_component__ = __webpack_require__("../../../../../src/app/components/contact-header/contact-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_banner_banner_component__ = __webpack_require__("../../../../../src/app/components/banner/banner.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__layout_app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__components_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_contact_header_contact_header_component__["a" /* ContactHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_banner_banner_component__["a" /* BannerComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__layout_app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/banner/banner.component.html":
/***/ (function(module, exports) {

module.exports = "<app-contact-header></app-contact-header>\n<div class=\"header_banner\">\n\t<app-header></app-header>\n\t\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/banner/banner.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header_banner {\n  background-image: url(\"/assets/images/banner_bg.png\");\n  background-size: cover;\n  background-position: center;\n  min-height: 657px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/banner/banner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BannerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BannerComponent = (function () {
    function BannerComponent() {
    }
    BannerComponent.prototype.ngOnInit = function () {
    };
    BannerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-banner',
            template: __webpack_require__("../../../../../src/app/components/banner/banner.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/banner/banner.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BannerComponent);
    return BannerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/contact-header/contact-header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"top_header\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"contact_info\">\n          <ul>\n            <li><img src=\"/assets/images/icon_03.png\" alt=\"contact_icon\"><span>+91-99-44-565649</span></li>\n            <li><img src=\"/assets/images/icon_05.png\" alt=\"contact_icon\"><span>Info@gmail.com</span></li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"social_icons clearfix\">\n          <ul class=\"float-right\">\n            <li>Follow Us:</li>\n            <li><a href=\"\"><img src=\"/assets/images/icon_07.png\" alt=\"social_icon\"></a></li>\n            <li><a href=\"\"><img src=\"/assets/images/icon_09.png\" alt=\"social_icon\"></a></li>\n            <li><a href=\"\"><img src=\"/assets/images/icon_11.png\" alt=\"social_icon\"></a></li>\n            <li><a href=\"\"><img src=\"/assets/images/icon_13.png\" alt=\"social_icon\"></a></li>\n            <li><a href=\"\"><img src=\"/assets/images/icon_15.png\" alt=\"social_icon\"></a></li>\n            <li><a href=\"\"><img src=\"/assets/images/icon_17.png\" alt=\"social_icon\"></a></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/contact-header/contact-header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".top_header {\n  width: 100%;\n  background-color: #fff;\n  padding: 5px 0px; }\n  .top_header ul {\n    padding-left: 0;\n    margin-bottom: 0; }\n  .top_header li {\n    list-style: none;\n    display: inline-block;\n    font-size: 14px;\n    font-weight: 500;\n    color: #213a6a; }\n    .top_header li img {\n      vertical-align: top; }\n  .top_header .contact_info li {\n    margin-right: 20px; }\n    .top_header .contact_info li img {\n      margin-right: 10px; }\n    .top_header .contact_info li:last-child {\n      margin-right: 0; }\n  .top_header .social_icons li {\n    margin-left: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/contact-header/contact-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactHeaderComponent = (function () {
    function ContactHeaderComponent() {
    }
    ContactHeaderComponent.prototype.ngOnInit = function () {
    };
    ContactHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-contact-header',
            template: __webpack_require__("../../../../../src/app/components/contact-header/contact-header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/contact-header/contact-header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactHeaderComponent);
    return ContactHeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  footer works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n\t<nav class=\"navbar navbar-toggleable-md navbar-light\">\n\t\t<div class=\"container\">\n\t\t\t<button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n\t\t\t\t<span class=\"navbar-toggler-icon\"></span>\n\t\t\t</button>\n\t\t\t<a class=\"navbar-brand\" href=\"#\">Cingle</a>\n\t\t\t<div class=\"menu-bar collapse navbar-collapse clearfix\" id=\"navbarNav\">\n\t\t\t\t<ul class=\"navbar-nav ml-auto\">\n\t\t\t\t\t<li class=\"nav-item active\">\n\t\t\t\t\t\t<a class=\"nav-link\" href=\"#\">Home</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t<a class=\"nav-link\" href=\"#\">About Us</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t<a class=\"nav-link\" href=\"#\">Portfolio</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t<a class=\"nav-link \" href=\"#\">Services</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t<a class=\"nav-link \" href=\"#\">Contact Us</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t\t\n\t</nav>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\n  background: linear-gradient(transparent 50%, rgba(0, 0, 0, 0.15));\n  /* For browsers that do not support gradients */\n  /* For Safari 5.1 to 6.0 */\n  /* For Opera 11.1 to 12.0 */\n  background: -moz-linear-gradient(transparent 50%, rgba(0, 0, 0, 0.15));\n  /* For Firefox 3.6 to 15 */ }\n  .header nav {\n    padding: 0; }\n  .header a {\n    color: #fff;\n    font-size: 18px;\n    font-weight: 500; }\n  .header .navbar-brand {\n    font-family: 'SandyText-bold';\n    font-size: 48px; }\n  .header .menu-bar li a {\n    padding: 38px 49px;\n    transition: 0.4s ease; }\n    .header .menu-bar li a:hover {\n      background-color: #fff;\n      color: #213a6a; }\n    .header .menu-bar li a:focus {\n      color: #fff; }\n  .header .menu-bar .nav-item.active {\n    background-color: #fff;\n    color: #213a6a; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/components/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-banner></app-banner>"

/***/ }),

/***/ "../../../../../src/app/layout/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/layout/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map