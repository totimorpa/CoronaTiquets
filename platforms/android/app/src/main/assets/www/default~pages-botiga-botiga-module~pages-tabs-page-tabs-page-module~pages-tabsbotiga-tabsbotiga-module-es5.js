function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-botiga-botiga-module~pages-tabs-page-tabs-page-module~pages-tabsbotiga-tabsbotiga-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/botiga/botiga.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/botiga/botiga.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesBotigaBotigaPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngFor=\"let speaker of speakers\">\n  <div *ngIf='merceria(speaker.name)'>\n    <ion-header>\n      <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n          <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>{{speaker.name}}</ion-title>\n      </ion-toolbar>\n    </ion-header>\n  </div>\n</div>\n\n<ion-content fullscreen=\"true\">\n  <div *ngFor=\"let speaker of speakers\">\n    <div *ngIf='merceria(speaker.name)'>\n\n      <img class=\"foto\" [src]=\"speaker.profilePic\" [alt]=\"speaker.name + ' profile picture'\">\n      <ion-list>\n        <ion-item lines='none'>\n          <h2>{{speaker.name}}</h2>\n          <ion-button mode='ios' fill='clear' slot='end'>\n            <ion-icon name=\"create-outline\"></ion-icon>Editar\n          </ion-button>\n        </ion-item>\n        <ion-item>\n          <p>{{speaker.about}}</p>\n          <ion-button mode='ios' fill='clear' slot='end'>\n            <ion-icon name=\"create-outline\"></ion-icon>Editar\n          </ion-button>\n        </ion-item>\n        <ion-item lines=none>\n          <p><b>Ubicació</b> </p>\n          <ion-button mode='ios' fill='clear' slot='end'>\n            <ion-icon name=\"create-outline\"></ion-icon>Editar\n          </ion-button>\n        </ion-item>\n        <ion-item style=\"font-size: small\">{{speaker.carrer}}<br>{{speaker.cp}}<br>{{speaker.location}}</ion-item>\n        <ion-item lines='none'>\n          <p><b>Horari d'apertura</b></p>\n          <ion-button mode='ios' fill='clear' slot='end'>\n            <ion-icon name=\"create-outline\"></ion-icon>Editar\n          </ion-button>\n\n        </ion-item>\n        <ion-item class=petit lines=none>\n          <ion-label>Hora d'apertura</ion-label>\n          <ion-datetime display-format=\"h:mm A\" picker-format=\"h:mm A\" value=\"1990-02-19T07:00Z\"></ion-datetime>\n        </ion-item>\n        <ion-item class=petit>\n          <ion-label>Hora de tancament</ion-label>\n          <ion-datetime display-format=\"h:mm A\" picker-format=\"h:mm A\" value=\"1990-02-19T18:00Z\"></ion-datetime>\n        </ion-item>\n\n        <ion-item lines=none>\n          <ion-label><b>Serveis que ofereixo</b></ion-label>\n          <ion-button mode='ios' fill='clear' slot='end'>\n            <ion-icon name=\"create-outline\"></ion-icon>Guardar canvis\n          </ion-button>\n        </ion-item>\n\n        <ion-item class=petit lines=none>\n          <ion-label>Tickets</ion-label>\n          <ion-checkbox slot=start [checked]=\"speaker.serveis.includes('t')\"></ion-checkbox>\n        </ion-item>\n        <ion-item class=petit lines=none>\n          <ion-label>Entrega a domicili</ion-label>\n          <ion-checkbox slot=start [checked]=\"speaker.serveis.includes('e')\"></ion-checkbox>\n        </ion-item>\n        <ion-item class=petit lines=none>\n          <ion-label>Comanda on-line</ion-label>\n          <ion-checkbox slot=start [checked]=\"speaker.serveis.includes('o')\"></ion-checkbox>\n        </ion-item>\n\n\n      </ion-list>\n    </div>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/botiga/botiga-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/botiga/botiga-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: BotigaPageRoutingModule */

  /***/
  function srcAppPagesBotigaBotigaRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BotigaPageRoutingModule", function () {
      return BotigaPageRoutingModule;
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


    var _botiga_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./botiga.page */
    "./src/app/pages/botiga/botiga.page.ts");

    var routes = [{
      path: '',
      component: _botiga_page__WEBPACK_IMPORTED_MODULE_3__["BotigaPage"]
    }];

    var BotigaPageRoutingModule = function BotigaPageRoutingModule() {
      _classCallCheck(this, BotigaPageRoutingModule);
    };

    BotigaPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], BotigaPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/botiga/botiga.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/botiga/botiga.module.ts ***!
    \***********************************************/

  /*! exports provided: BotigaPageModule */

  /***/
  function srcAppPagesBotigaBotigaModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BotigaPageModule", function () {
      return BotigaPageModule;
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


    var _botiga_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./botiga-routing.module */
    "./src/app/pages/botiga/botiga-routing.module.ts");
    /* harmony import */


    var _botiga_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./botiga.page */
    "./src/app/pages/botiga/botiga.page.ts");

    var BotigaPageModule = function BotigaPageModule() {
      _classCallCheck(this, BotigaPageModule);
    };

    BotigaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _botiga_routing_module__WEBPACK_IMPORTED_MODULE_5__["BotigaPageRoutingModule"]],
      declarations: [_botiga_page__WEBPACK_IMPORTED_MODULE_6__["BotigaPage"]]
    })], BotigaPageModule);
    /***/
  },

  /***/
  "./src/app/pages/botiga/botiga.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/pages/botiga/botiga.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesBotigaBotigaPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".foto {\n  padding: 0px;\n}\n\n.petit {\n  font-size: small;\n  height: 3em;\n}\n\nion-item {\n  --min-height: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b3RpbXAvRGVza3RvcC9Db3JvbmFUaXF1ZXRzL3NyYy9hcHAvcGFnZXMvYm90aWdhL2JvdGlnYS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2JvdGlnYS9ib3RpZ2EucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0FDQ0o7O0FESUE7RUFDSSxpQkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYm90aWdhL2JvdGlnYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm90byB7XG4gICAgcGFkZGluZzowcHhcbn1cblxuLnBldGl0IHtcbiAgICBmb250LXNpemU6IHNtYWxsO1xuICAgIGhlaWdodDozZW07XG5cblxufVxuXG5pb24taXRlbSB7XG4gICAgLS1taW4taGVpZ2h0OiAwcHg7XG59XG5cbiIsIi5mb3RvIHtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4ucGV0aXQge1xuICBmb250LXNpemU6IHNtYWxsO1xuICBoZWlnaHQ6IDNlbTtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLW1pbi1oZWlnaHQ6IDBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/botiga/botiga.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/botiga/botiga.page.ts ***!
    \*********************************************/

  /*! exports provided: BotigaPage */

  /***/
  function srcAppPagesBotigaBotigaPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BotigaPage", function () {
      return BotigaPage;
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


    var _providers_conference_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../providers/conference-data */
    "./src/app/providers/conference-data.ts");

    var BotigaPage =
    /*#__PURE__*/
    function () {
      function BotigaPage(router, confData) {
        _classCallCheck(this, BotigaPage);

        this.router = router;
        this.confData = confData;
        this.speakers = [];
      }

      _createClass(BotigaPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "botiga",
        value: function botiga() {
          this.router.navigateByUrl('/botiga');
        }
      }, {
        key: "tiquets",
        value: function tiquets() {
          this.router.navigateByUrl('/tiquets');
        }
      }, {
        key: "calendari",
        value: function calendari() {
          this.router.navigateByUrl('/calendari');
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          var _this = this;

          this.confData.getSpeakers().subscribe(function (speakers) {
            _this.speakers = speakers;
          });
        }
      }, {
        key: "merceria",
        value: function merceria(a) {
          return a == "ElectroBoom BCN";
        }
      }]);

      return BotigaPage;
    }();

    BotigaPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _providers_conference_data__WEBPACK_IMPORTED_MODULE_3__["ConferenceData"]
      }];
    };

    BotigaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-botiga',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./botiga.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/botiga/botiga.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./botiga.page.scss */
      "./src/app/pages/botiga/botiga.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _providers_conference_data__WEBPACK_IMPORTED_MODULE_3__["ConferenceData"]])], BotigaPage);
    /***/
  },

  /***/
  "./src/app/providers/conference-data.ts":
  /*!**********************************************!*\
    !*** ./src/app/providers/conference-data.ts ***!
    \**********************************************/

  /*! exports provided: ConferenceData */

  /***/
  function srcAppProvidersConferenceDataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConferenceData", function () {
      return ConferenceData;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _user_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./user-data */
    "./src/app/providers/user-data.ts");

    var ConferenceData =
    /*#__PURE__*/
    function () {
      function ConferenceData(http, user) {
        _classCallCheck(this, ConferenceData);

        this.http = http;
        this.user = user;
      }

      _createClass(ConferenceData, [{
        key: "load",
        value: function load() {
          if (this.data) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.data);
          } else {
            return this.http.get('assets/data/data.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.processData, this));
          }
        }
      }, {
        key: "processData",
        value: function processData(data) {
          var _this2 = this;

          // just some good 'ol JS fun with objects and arrays
          // build up the data by linking speakers to sessions
          this.data = data; // loop through each day in the schedule

          this.data.schedule.forEach(function (day) {
            // loop through each timeline group in the day
            day.groups.forEach(function (group) {
              // loop through each session in the timeline group
              group.sessions.forEach(function (session) {
                session.speakers = [];

                if (session.speakerNames) {
                  session.speakerNames.forEach(function (speakerName) {
                    var speaker = _this2.data.speakers.find(function (s) {
                      return s.name === speakerName;
                    });

                    if (speaker) {
                      session.speakers.push(speaker);
                      speaker.sessions = speaker.sessions || [];
                      speaker.sessions.push(session);
                    }
                  });
                }
              });
            });
          });
          return this.data;
        }
      }, {
        key: "getTimeline",
        value: function getTimeline(dayIndex) {
          var _this3 = this;

          var queryText = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
          var excludeTracks = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
          var segment = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'all';
          return this.load().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            var day = data.schedule[dayIndex];
            day.shownSessions = 0;
            queryText = queryText.toLowerCase().replace(/,|\.|-/g, ' ');
            var queryWords = queryText.split(' ').filter(function (w) {
              return !!w.trim().length;
            });
            day.groups.forEach(function (group) {
              group.hide = true;
              group.sessions.forEach(function (session) {
                // check if this session should show or not
                _this3.filterSession(session, queryWords, excludeTracks, segment);

                if (!session.hide) {
                  // if this session is not hidden then this group should show
                  group.hide = false;
                  day.shownSessions++;
                }
              });
            });
            return day;
          }));
        }
      }, {
        key: "filterSession",
        value: function filterSession(session, queryWords, excludeTracks, segment) {
          var matchesQueryText = false;

          if (queryWords.length) {
            // of any query word is in the session name than it passes the query test
            queryWords.forEach(function (queryWord) {
              if (session.name.toLowerCase().indexOf(queryWord) > -1) {
                matchesQueryText = true;
              }
            });
          } else {
            // if there are no query words then this session passes the query test
            matchesQueryText = true;
          } // if any of the sessions tracks are not in the
          // exclude tracks then this session passes the track test


          var matchesTracks = false;
          session.tracks.forEach(function (trackName) {
            if (excludeTracks.indexOf(trackName) === -1) {
              matchesTracks = true;
            }
          }); // if the segment is 'favorites', but session is not a user favorite
          // then this session does not pass the segment test

          var matchesSegment = false;

          if (segment === 'favorites') {
            if (this.user.hasFavorite(session.name)) {
              matchesSegment = true;
            }
          } else {
            matchesSegment = true;
          } // all tests must be true if it should not be hidden


          session.hide = !(matchesQueryText && matchesTracks && matchesSegment);
        }
      }, {
        key: "getSpeakers",
        value: function getSpeakers() {
          return this.load().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            return data.speakers.sort(function (a, b) {
              var aName = a.name.split(' ').pop();
              var bName = b.name.split(' ').pop();
              return aName.localeCompare(bName);
            });
          }));
        }
      }, {
        key: "getBotiga",
        value: function getBotiga() {
          return this.load().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            return data.botiga.sort(function (a, b) {
              var aName = a.name.split(' ').pop();
              var bName = b.name.split(' ').pop();
              return aName.localeCompare(bName);
            });
          }));
        }
      }, {
        key: "getTracks",
        value: function getTracks() {
          return this.load().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            return data.tracks.sort();
          }));
        }
      }, {
        key: "getMap",
        value: function getMap() {
          return this.load().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            return data.map;
          }));
        }
      }]);

      return ConferenceData;
    }();

    ConferenceData.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: _user_data__WEBPACK_IMPORTED_MODULE_5__["UserData"]
      }];
    };

    ConferenceData = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _user_data__WEBPACK_IMPORTED_MODULE_5__["UserData"]])], ConferenceData);
    /***/
  }
}]);
//# sourceMappingURL=default~pages-botiga-botiga-module~pages-tabs-page-tabs-page-module~pages-tabsbotiga-tabsbotiga-module-es5.js.map