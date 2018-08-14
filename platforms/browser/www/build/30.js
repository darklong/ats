webpackJsonp([30],{

/***/ 1873:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreLoginIntroductionPageModule", function() { return CoreLoginIntroductionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__introduction__ = __webpack_require__(1999);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__ = __webpack_require__(15);
// (C) Copyright 2015 Martin Dougiamas
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var CoreLoginIntroductionPageModule = /** @class */ (function () {
    function CoreLoginIntroductionPageModule() {
    }
    CoreLoginIntroductionPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__introduction__["a" /* CoreLoginIntroductionPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__introduction__["a" /* CoreLoginIntroductionPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ]
        })
    ], CoreLoginIntroductionPageModule);
    return CoreLoginIntroductionPageModule;
}());

//# sourceMappingURL=introduction.module.js.map

/***/ }),

/***/ 1999:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreLoginIntroductionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_app__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_events__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_utils_dom__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_helper__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__(20);
// (C) Copyright 2015 Martin Dougiamas
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Page to enter the user credentials.
 */
var CoreLoginIntroductionPage = /** @class */ (function () {
    function CoreLoginIntroductionPage(navCtrl, navParams, fb, appProvider, sitesProvider, loginHelper, domUtils, translate, eventsProvider) {
        this.navCtrl = navCtrl;
        this.appProvider = appProvider;
        this.sitesProvider = sitesProvider;
        this.loginHelper = loginHelper;
        this.domUtils = domUtils;
        this.translate = translate;
        this.eventsProvider = eventsProvider;
        this.siteChecked = false;
        this.pageLoaded = false;
        this.isBrowserSSO = false;
        this.eventThrown = false;
        this.viewLeft = false;
        this.siteUrl = navParams.get('siteUrl');
        this.siteConfig = navParams.get('siteConfig');
        this.urlToOpen = navParams.get('urlToOpen');
        this.credForm = fb.group({
            username: [navParams.get('username') || '', __WEBPACK_IMPORTED_MODULE_8__angular_forms__["h" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_8__angular_forms__["h" /* Validators */].required]
        });
    }
    /**
     * View loaded.
     */
    CoreLoginIntroductionPage.prototype.ionViewDidLoad = function () {
        this.treatSiteConfig();
        if (this.loginHelper.isFixedUrlSet()) {
            // Fixed URL, we need to check if it uses browser SSO login.
            this.checkSite(this.siteUrl);
        }
        else {
            this.siteChecked = true;
            this.pageLoaded = true;
        }
    };
    /**
     * View left.
     */
    CoreLoginIntroductionPage.prototype.ionViewDidLeave = function () {
        this.viewLeft = true;
        this.eventsProvider.trigger(__WEBPACK_IMPORTED_MODULE_4__providers_events__["a" /* CoreEventsProvider */].LOGIN_SITE_UNCHECKED, { config: this.siteConfig }, this.siteId);
    };
    /**
     * Check if a site uses local_mobile, requires SSO login, etc.
     * This should be used only if a fixed URL is set, otherwise this check is already performed in CoreLoginSitePage.
     *
     * @param {string} siteUrl Site URL to check.
     * @return {Promise<any>} Promise resolved when done.
     */
    CoreLoginIntroductionPage.prototype.checkSite = function (siteUrl) {
        var _this = this;
        this.pageLoaded = false;
        // If the site is configured with http:// protocol we force that one, otherwise we use default mode.
        var protocol = siteUrl.indexOf('http://') === 0 ? 'http://' : undefined;
        return this.sitesProvider.checkSite(siteUrl, protocol).then(function (result) {
            _this.siteChecked = true;
            _this.siteUrl = result.siteUrl;
            _this.siteConfig = result.config;
            _this.treatSiteConfig();
            if (result && result.warning) {
                _this.domUtils.showErrorModal(result.warning, true, 4000);
            }
            if (_this.loginHelper.isSSOLoginNeeded(result.code)) {
                // SSO. User needs to authenticate in a browser.
                _this.isBrowserSSO = true;
                // Check that there's no SSO authentication ongoing and the view hasn't changed.
                if (!_this.appProvider.isSSOAuthenticationOngoing() && !_this.viewLeft) {
                    _this.loginHelper.confirmAndOpenBrowserForSSOLogin(result.siteUrl, result.code, result.service, result.config && result.config.launchurl);
                }
            }
            else {
                _this.isBrowserSSO = false;
            }
        }).catch(function (error) {
            _this.domUtils.showErrorModal(error);
        }).finally(function () {
            _this.pageLoaded = true;
        });
    };
    /**
     * Treat the site configuration (if it exists).
     */
    CoreLoginIntroductionPage.prototype.treatSiteConfig = function () {
        if (this.siteConfig) {
            this.siteName = this.siteConfig.sitename;
            this.logoUrl = this.siteConfig.logourl || this.siteConfig.compactlogourl;
            this.authInstructions = this.siteConfig.authinstructions || this.translate.instant('core.login.loginsteps');
            this.canSignup = this.siteConfig.registerauth == 'email' && !this.loginHelper.isEmailSignupDisabled(this.siteConfig);
            this.identityProviders = this.loginHelper.getValidIdentityProviders(this.siteConfig);
            if (!this.eventThrown && !this.viewLeft) {
                this.eventThrown = true;
                this.eventsProvider.trigger(__WEBPACK_IMPORTED_MODULE_4__providers_events__["a" /* CoreEventsProvider */].LOGIN_SITE_CHECKED, { config: this.siteConfig });
            }
        }
        else {
            this.siteName = null;
            this.logoUrl = null;
            this.authInstructions = null;
            this.canSignup = false;
            this.identityProviders = [];
        }
    };
    /**
     * goLoginPage  Login button clicked.
     */
    CoreLoginIntroductionPage.prototype.goLoginPage = function () {
        this.navCtrl.push('CoreLoginCredentialsPage', { siteUrl: this.siteUrl });
        return;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* Slides */])
    ], CoreLoginIntroductionPage.prototype, "slides", void 0);
    CoreLoginIntroductionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-core-login-introduction',template:/*ion-inline-start:"/Users/danglong/Desktop/phonegap/moodlemobiledirectory/src/core/login/pages/introduction/introduction.html"*/'<ion-content class="core-center-view">\n    <core-loading [hideUntil]="pageLoaded">\n        <div class="box">\n            <img *ngIf="!logoUrl" src="assets/img/login_logo_fe.png" class="login-logo-parent" role="presentation">\n            <div text-wrap text-center>\n                <!-- Show site logo or a default image. -->\n                <img *ngIf="logoUrl" [src]="logoUrl" role="presentation">\n                <img *ngIf="!logoUrl" src="assets/img/login_logo_ats.png" class="login-logo" role="presentation">\n                \n\n                <!-- If no sitename show big siteurl. -->\n                <!-- <p *ngIf="!siteName" padding class="item-heading core-siteurl">{{siteUrl}}</p> -->\n                <!-- If sitename, show big sitename and small siteurl. -->\n                <p *ngIf="siteName" padding class="item-heading core-sitename"><core-format-text [text]="siteName"></core-format-text></p>\n                <p *ngIf="siteName" class="core-siteurl">{{siteUrl}}</p>\n            </div>\n            <ion-slides   class="login-slides" pager="true" >\n\n                <ion-slide>\n                     <img src="assets/img/login_slides/slide_1.jpg" class="img-slides" role="presentation">\n                    <p class="slogan-text">Thế giới phải chìm đắm trong đau khổ không phải vì tội ác của những kẻ xấu, mà là vì sự im lặng của những người tốt</p>\n                </ion-slide>\n\n                <ion-slide>\n                    <img src="assets/img/login_slides/slide_2.jpg" class="img-slides" role="presentation">\n                    <p class="slogan-text">Thế giới phải chìm đắm trong đau khổ không phải vì tội ác của những kẻ xấu, mà là vì sự im lặng của những người tốt</p>\n                </ion-slide>\n\n                <ion-slide>\n                    <img src="assets/img/login_slides/slide_3.jpg" class="img-slides" role="presentation">\n                    <p class="slogan-text">Thế giới phải chìm đắm trong đau khổ không phải vì tội ác của những kẻ xấu, mà là vì sự im lặng của những người tốt</p>\n                </ion-slide>\n\n            </ion-slides>\n            <button ion-button block  (click)="goLoginPage()" >{{ \'core.login.loginbutton\' | translate }}</button>\n        </div>\n    </core-loading>\n</ion-content>\n'/*ion-inline-end:"/Users/danglong/Desktop/phonegap/moodlemobiledirectory/src/core/login/pages/introduction/introduction.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_app__["a" /* CoreAppProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_sites__["a" /* CoreSitesProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_helper__["a" /* CoreLoginHelperProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_utils_dom__["a" /* CoreDomUtilsProvider */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_events__["a" /* CoreEventsProvider */]])
    ], CoreLoginIntroductionPage);
    return CoreLoginIntroductionPage;
}());

//# sourceMappingURL=introduction.js.map

/***/ })

});
//# sourceMappingURL=30.js.map