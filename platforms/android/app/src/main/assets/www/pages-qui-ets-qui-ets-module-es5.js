function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-qui-ets-qui-ets-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/qui-ets/qui-ets.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/qui-ets/qui-ets.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesQuiEtsQuiEtsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <div class=\"alinear\">\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title>Què ets?</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-button (click)=\"user()\" expand = \"block\"  size = \"large\">\n              <ion-icon name=\"person\"></ion-icon>\n              <ion-label>Usuari</ion-label>\n            </ion-button>\n\n            <ion-button (click)=\"shop()\" expand = \"block\" size=\"large\">\n              <ion-icon name=\"cart\"></ion-icon>\n              <ion-label>Comerç</ion-label>\n            </ion-button>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/qui-ets/qui-ets-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/qui-ets/qui-ets-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: QuiEtsPageRoutingModule */

  /***/
  function srcAppPagesQuiEtsQuiEtsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuiEtsPageRoutingModule", function () {
      return QuiEtsPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _qui_ets_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./qui-ets.page */
    "./src/app/pages/qui-ets/qui-ets.page.ts");

    var routes = [{
      path: '',
      component: _qui_ets_page__WEBPACK_IMPORTED_MODULE_3__["QuiEtsPage"]
    }];

    var QuiEtsPageRoutingModule = function QuiEtsPageRoutingModule() {
      _classCallCheck(this, QuiEtsPageRoutingModule);
    };

    QuiEtsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], QuiEtsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/qui-ets/qui-ets.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/qui-ets/qui-ets.module.ts ***!
    \*************************************************/

  /*! exports provided: QuiEtsPageModule */

  /***/
  function srcAppPagesQuiEtsQuiEtsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuiEtsPageModule", function () {
      return QuiEtsPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _qui_ets_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./qui-ets-routing.module */
    "./src/app/pages/qui-ets/qui-ets-routing.module.ts");
    /* harmony import */


    var _qui_ets_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./qui-ets.page */
    "./src/app/pages/qui-ets/qui-ets.page.ts");

    var QuiEtsPageModule = function QuiEtsPageModule() {
      _classCallCheck(this, QuiEtsPageModule);
    };

    QuiEtsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _qui_ets_routing_module__WEBPACK_IMPORTED_MODULE_5__["QuiEtsPageRoutingModule"]],
      declarations: [_qui_ets_page__WEBPACK_IMPORTED_MODULE_6__["QuiEtsPage"]]
    })], QuiEtsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/qui-ets/qui-ets.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/pages/qui-ets/qui-ets.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesQuiEtsQuiEtsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-title {\n  text-align: center;\n}\n\n.alinear {\n  position: relative;\n  top: 45%;\n  transform: translateY(-50%);\n  -webkit-transform: translateY(-50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b3RpbXAvRGVza3RvcC9Db3JvbmFUaXF1ZXRzL3NyYy9hcHAvcGFnZXMvcXVpLWV0cy9xdWktZXRzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcXVpLWV0cy9xdWktZXRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGtCQUFBO0FDQUY7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9xdWktZXRzL3F1aS1ldHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pb24tdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYWxpbmVhcntcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDQ1JTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuIiwiaW9uLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYWxpbmVhciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA0NSU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/qui-ets/qui-ets.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/qui-ets/qui-ets.page.ts ***!
    \***********************************************/

  /*! exports provided: QuiEtsPage */

  /***/
  function srcAppPagesQuiEtsQuiEtsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuiEtsPage", function () {
      return QuiEtsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var QuiEtsPage =
    /*#__PURE__*/
    function () {
      function QuiEtsPage(router) {
        _classCallCheck(this, QuiEtsPage);

        this.router = router;
      }

      _createClass(QuiEtsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "user",
        value: function user() {
          this.router.navigateByUrl('/app/tabs/schedule');
        }
      }, {
        key: "shop",
        value: function shop() {
          this.router.navigateByUrl('/signupcomerc');
        }
      }]);

      return QuiEtsPage;
    }();

    QuiEtsPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    QuiEtsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-qui-ets',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./qui-ets.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/qui-ets/qui-ets.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./qui-ets.page.scss */
      "./src/app/pages/qui-ets/qui-ets.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], QuiEtsPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-qui-ets-qui-ets-module-es5.js.map