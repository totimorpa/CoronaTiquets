(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["calendari-calendari-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/calendari/calendari.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/calendari/calendari.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color = \"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Calendari</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <iframe src=\"https://calendar.google.com/calendar/embed?height=520&amp;wkst=2&amp;bgcolor=%233bc7c4&amp;ctz=Atlantic%2FFaroe&amp;showTitle=0&amp;showCalendars=0&amp;showTz=0&amp;showTabs=0&amp;showPrint=0&amp;showDate=1&amp;mode=WEEK&amp;hl=ca&amp;src=cGFycmFnYWZlcnJlcmFsZXhAZ21haWwuY29t&amp;color=%23039BE5\" style=\"border:solid 1px #777\" width=\"100%\" height=\"100%\" frameborder=\"0\" scrolling=\"no\"></iframe></ion-content>\n\n\n");

/***/ }),

/***/ "./src/app/pages/calendari/calendari-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/calendari/calendari-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: CalendariPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendariPageRoutingModule", function() { return CalendariPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _calendari_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calendari.page */ "./src/app/pages/calendari/calendari.page.ts");




const routes = [
    {
        path: '',
        component: _calendari_page__WEBPACK_IMPORTED_MODULE_3__["CalendariPage"]
    }
];
let CalendariPageRoutingModule = class CalendariPageRoutingModule {
};
CalendariPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CalendariPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/calendari/calendari.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/calendari/calendari.module.ts ***!
  \*****************************************************/
/*! exports provided: CalendariPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendariPageModule", function() { return CalendariPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _calendari_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calendari-routing.module */ "./src/app/pages/calendari/calendari-routing.module.ts");
/* harmony import */ var _calendari_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calendari.page */ "./src/app/pages/calendari/calendari.page.ts");







let CalendariPageModule = class CalendariPageModule {
};
CalendariPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _calendari_routing_module__WEBPACK_IMPORTED_MODULE_5__["CalendariPageRoutingModule"]
        ],
        declarations: [_calendari_page__WEBPACK_IMPORTED_MODULE_6__["CalendariPage"]]
    })
], CalendariPageModule);



/***/ }),

/***/ "./src/app/pages/calendari/calendari.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/calendari/calendari.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhbGVuZGFyaS9jYWxlbmRhcmkucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/calendari/calendari.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/calendari/calendari.page.ts ***!
  \***************************************************/
/*! exports provided: CalendariPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendariPage", function() { return CalendariPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CalendariPage = class CalendariPage {
    constructor() { }
    ngOnInit() {
    }
};
CalendariPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-calendari',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./calendari.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/calendari/calendari.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./calendari.page.scss */ "./src/app/pages/calendari/calendari.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CalendariPage);



/***/ })

}]);
//# sourceMappingURL=calendari-calendari-module-es2015.js.map