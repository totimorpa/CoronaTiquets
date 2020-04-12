(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-signupcomerc-signupcomerc-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signupcomerc/signupcomerc.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signupcomerc/signupcomerc.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content>\n  <div>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-card >\n          <ion-card-header>\n            <ion-card-title>Registrar Comerç</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <!-- <form #myform =\"ngForm\" (ngSubmit)=\"submitForm(myform.value)\"> -->\n              <form method=\"POST\" action=\"insert.php\">\n              <ion-list lines=\"full\" class=\"ion-no-margin ion-no-padding\">\n                <ion-item>\n                  <ion-label position=\"stacked\">Nom comerç</ion-label>\n                  <ion-input required ngModel type=\"text\" name=\"nomcomerc\"></ion-input>\n                </ion-item>\n                <ion-item>\n                  <ion-label position=\"stacked\">Mail</ion-label>\n                  <ion-input required ngModel type=\"mail\" name=\"mail\"></ion-input>\n                </ion-item>\n                <ion-item>\n                  <ion-label position=\"stacked\">Telefon</ion-label>\n                  <ion-input required ngModel type=\"phone\" name=\"telèfon\"></ion-input>\n                </ion-item>\n                <ion-item>\n                  <ion-label position=\"stacked\">Tags (separats per coma)</ion-label>\n                  <ion-input required ngModel type=\"text\" name=\"tags\"></ion-input>\n                </ion-item>\n                <ion-item>\n                  <ion-label position=\"stacked\">Link imatge</ion-label>\n                  <ion-input required ngModel type=\"url\" name=\"img\"></ion-input>\n                </ion-item>\n                <ion-item>\n                  <ion-label position=\"stacked\">Serveis que ofereixes</ion-label>\n                  <ion-select placeholder=\"Selecciona serveis\" ngModel name=\"serveis\" multiple>\n                    <ion-select-option value=\"t\">Tikets</ion-select-option>\n                    <ion-select-option value=\"e\">Entrega a domicili</ion-select-option>\n                    <ion-select-option value=\"o\">Comanda online</ion-select-option>\n                  </ion-select>\n                </ion-item>\n                <ion-item>\n                <ion-label position=\"stacked\">Adreça</ion-label>\n                <ion-input placeholder=\"Carrer i numero\" ngModel required type=\"text\" name=\"adreca\"></ion-input>\n                <ion-input placeholder=\"Ciutat\" ngModel required type=\"text\" name=\"ciutat\"></ion-input>\n                <ion-input placeholder=\"Codi Postal\" ngModel required type=\"text\" name=\"CP\"></ion-input>\n                </ion-item>\n                <ion-item>\n                <ion-label position=\"stacked\">Informació adicional</ion-label>\n                <ion-textarea required type=\"text\" ngModel name=\"info\"></ion-textarea>\n                </ion-item>\n                </ion-list>\n                <div class=\"ion-padding\">\n                <ion-button  (click) = \"onSignup()\" expand=\"block\" type=\"submit\" class=\"ion-no-margin\" value=\"submit\">Crear</ion-button>\n                </div>\n            </form>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/signupcomerc/signupcomerc-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/signupcomerc/signupcomerc-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: SignupcomercPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupcomercPageRoutingModule", function() { return SignupcomercPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _signupcomerc_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signupcomerc.page */ "./src/app/pages/signupcomerc/signupcomerc.page.ts");




const routes = [
    {
        path: '',
        component: _signupcomerc_page__WEBPACK_IMPORTED_MODULE_3__["SignupcomercPage"]
    }
];
let SignupcomercPageRoutingModule = class SignupcomercPageRoutingModule {
};
SignupcomercPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SignupcomercPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/signupcomerc/signupcomerc.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/signupcomerc/signupcomerc.module.ts ***!
  \***********************************************************/
/*! exports provided: SignupcomercPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupcomercPageModule", function() { return SignupcomercPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _signupcomerc_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signupcomerc-routing.module */ "./src/app/pages/signupcomerc/signupcomerc-routing.module.ts");
/* harmony import */ var _signupcomerc_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signupcomerc.page */ "./src/app/pages/signupcomerc/signupcomerc.page.ts");







let SignupcomercPageModule = class SignupcomercPageModule {
};
SignupcomercPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _signupcomerc_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignupcomercPageRoutingModule"]
        ],
        declarations: [_signupcomerc_page__WEBPACK_IMPORTED_MODULE_6__["SignupcomercPage"]]
    })
], SignupcomercPageModule);



/***/ }),

/***/ "./src/app/pages/signupcomerc/signupcomerc.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/signupcomerc/signupcomerc.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".alinear {\n  position: relative;\n  top: 50%;\n  transform: translateY(-50%);\n  -webkit-transform: translateY(-50%);\n}\n\n.list {\n  margin-bottom: 0;\n}\n\nion-title {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b3RpbXAvRGVza3RvcC9Db3JvbmFUaXF1ZXRzL3NyYy9hcHAvcGFnZXMvc2lnbnVwY29tZXJjL3NpZ251cGNvbWVyYy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NpZ251cGNvbWVyYy9zaWdudXBjb21lcmMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtBQ0NGOztBRENBO0VBQ0UsZ0JBQUE7QUNFRjs7QURBQTtFQUNFLGtCQUFBO0FDR0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zaWdudXBjb21lcmMvc2lnbnVwY29tZXJjLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbGluZWFye1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuLmxpc3Qge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuaW9uLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIiwiLmFsaW5lYXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4ubGlzdCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbmlvbi10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/signupcomerc/signupcomerc.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/signupcomerc/signupcomerc.page.ts ***!
  \*********************************************************/
/*! exports provided: SignupcomercPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupcomercPage", function() { return SignupcomercPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let SignupcomercPage = class SignupcomercPage {
    constructor(router, http) {
        this.router = router;
        this.http = http;
    }
    submitForm(formData) {
        console.log(formData);
        this.http.post("", formData).subscribe(res => {
            console.log(res);
        });
    }
    onSignup() {
        this.router.navigateByUrl('/app/tabsbotiga/botiga');
    }
    ngOnInit() {
    }
};
SignupcomercPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
SignupcomercPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signupcomerc',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signupcomerc.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signupcomerc/signupcomerc.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signupcomerc.page.scss */ "./src/app/pages/signupcomerc/signupcomerc.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], SignupcomercPage);



/***/ })

}]);
//# sourceMappingURL=pages-signupcomerc-signupcomerc-module-es2015.js.map