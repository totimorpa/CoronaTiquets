function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tabsbotiga-tabsbotiga-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabsbotiga/tabsbotiga.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabsbotiga/tabsbotiga.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTabsbotigaTabsbotigaPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-tabs>\n\n  <ion-tab-bar slot=\"bottom\" color = \"primary\">\n    <ion-tab-button tab=\"botiga\">\n      <ion-icon name=\"home-outline\"></ion-icon>\n      <ion-label>Botiga</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"tiquets\">\n      <ion-icon name=\"albums-outline\"></ion-icon>\n      <ion-label>Tiquets entrants</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"calendari\">\n      <ion-icon name=\"calendar-outline\"></ion-icon>\n      <ion-label>Calendari</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n\n</ion-tabs>";
    /***/
  },

  /***/
  "./src/app/pages/tabsbotiga/tabsbotiga-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/tabsbotiga/tabsbotiga-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: TabsbotigaPageRoutingModule */

  /***/
  function srcAppPagesTabsbotigaTabsbotigaRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsbotigaPageRoutingModule", function () {
      return TabsbotigaPageRoutingModule;
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


    var _tabsbotiga_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tabsbotiga.page */
    "./src/app/pages/tabsbotiga/tabsbotiga.page.ts");
    /* harmony import */


    var _botiga_botiga_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../botiga/botiga.page */
    "./src/app/pages/botiga/botiga.page.ts");

    var routes = [{
      path: 'tabsbotiga',
      component: _tabsbotiga_page__WEBPACK_IMPORTED_MODULE_3__["TabsbotigaPage"],
      children: [{
        path: 'botiga',
        children: [{
          path: '',
          component: _botiga_botiga_page__WEBPACK_IMPORTED_MODULE_4__["BotigaPage"]
        }, {
          path: 'session/:sessionId',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | session-detail-session-detail-module */
            "default~pages-tabs-page-tabs-page-module~session-detail-session-detail-module").then(__webpack_require__.bind(null,
            /*! ../session-detail/session-detail.module */
            "./src/app/pages/session-detail/session-detail.module.ts")).then(function (m) {
              return m.SessionDetailModule;
            });
          }
        }]
      }, {
        path: 'tiquets',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.resolve().then(__webpack_require__.bind(null,
            /*! ../tiquets/tiquets.module */
            "./src/app/pages/tiquets/tiquets.module.ts")).then(function (m) {
              return m.TiquetsPageModule;
            });
          }
        }]
      }, {
        path: 'calendari',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | calendari-calendari-module */
            "calendari-calendari-module").then(__webpack_require__.bind(null,
            /*! ../calendari/calendari.module */
            "./src/app/pages/calendari/calendari.module.ts")).then(function (m) {
              return m.CalendariPageModule;
            });
          }
        }]
      }, {
        path: '',
        redirectTo: '/app/tabsbotiga/botiga',
        pathMatch: 'full'
      }]
    }];

    var TabsbotigaPageRoutingModule = function TabsbotigaPageRoutingModule() {
      _classCallCheck(this, TabsbotigaPageRoutingModule);
    };

    TabsbotigaPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TabsbotigaPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/tabsbotiga/tabsbotiga.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/tabsbotiga/tabsbotiga.module.ts ***!
    \*******************************************************/

  /*! exports provided: TabsbotigaPageModule */

  /***/
  function srcAppPagesTabsbotigaTabsbotigaModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsbotigaPageModule", function () {
      return TabsbotigaPageModule;
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


    var _tabsbotiga_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tabsbotiga-routing.module */
    "./src/app/pages/tabsbotiga/tabsbotiga-routing.module.ts");
    /* harmony import */


    var _tabsbotiga_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tabsbotiga.page */
    "./src/app/pages/tabsbotiga/tabsbotiga.page.ts");
    /* harmony import */


    var _tiquets_tiquets_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../tiquets/tiquets.module */
    "./src/app/pages/tiquets/tiquets.module.ts");
    /* harmony import */


    var _botiga_botiga_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../botiga/botiga.module */
    "./src/app/pages/botiga/botiga.module.ts");

    var TabsbotigaPageModule = function TabsbotigaPageModule() {
      _classCallCheck(this, TabsbotigaPageModule);
    };

    TabsbotigaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _tabsbotiga_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsbotigaPageRoutingModule"], _tiquets_tiquets_module__WEBPACK_IMPORTED_MODULE_7__["TiquetsPageModule"], _botiga_botiga_module__WEBPACK_IMPORTED_MODULE_8__["BotigaPageModule"]],
      declarations: [_tabsbotiga_page__WEBPACK_IMPORTED_MODULE_6__["TabsbotigaPage"]]
    })], TabsbotigaPageModule);
    /***/
  },

  /***/
  "./src/app/pages/tabsbotiga/tabsbotiga.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/pages/tabsbotiga/tabsbotiga.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTabsbotigaTabsbotigaPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".tabbar {\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.tab-button {\n  max-width: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b3RpbXAvRGVza3RvcC9Db3JvbmFUaXF1ZXRzL3NyYy9hcHAvcGFnZXMvdGFic2JvdGlnYS90YWJzYm90aWdhLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvdGFic2JvdGlnYS90YWJzYm90aWdhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdCQUFBO1VBQUEsdUJBQUE7QUNDSjs7QURFRTtFQUNFLGdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90YWJzYm90aWdhL3RhYnNib3RpZ2EucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmJhciB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgXG4gIC50YWItYnV0dG9uIHtcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICB9IiwiLnRhYmJhciB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4udGFiLWJ1dHRvbiB7XG4gIG1heC13aWR0aDogMjAwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/tabsbotiga/tabsbotiga.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/tabsbotiga/tabsbotiga.page.ts ***!
    \*****************************************************/

  /*! exports provided: TabsbotigaPage */

  /***/
  function srcAppPagesTabsbotigaTabsbotigaPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsbotigaPage", function () {
      return TabsbotigaPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TabsbotigaPage =
    /*#__PURE__*/
    function () {
      function TabsbotigaPage() {
        _classCallCheck(this, TabsbotigaPage);
      }

      _createClass(TabsbotigaPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TabsbotigaPage;
    }();

    TabsbotigaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tabsbotiga',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tabsbotiga.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabsbotiga/tabsbotiga.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tabsbotiga.page.scss */
      "./src/app/pages/tabsbotiga/tabsbotiga.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], TabsbotigaPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-tabsbotiga-tabsbotiga-module-es5.js.map