webpackJsonp([54],{

/***/ 1846:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModWorkshopPhaseSelectorPageModule", function() { return AddonModWorkshopPhaseSelectorPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_directives_module__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__phase__ = __webpack_require__(1970);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_compile_components_compile_html_compile_html_module__ = __webpack_require__(391);
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






var AddonModWorkshopPhaseSelectorPageModule = /** @class */ (function () {
    function AddonModWorkshopPhaseSelectorPageModule() {
    }
    AddonModWorkshopPhaseSelectorPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__phase__["a" /* AddonModWorkshopPhaseSelectorPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_5__core_compile_components_compile_html_compile_html_module__["a" /* CoreCompileHtmlComponentModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__phase__["a" /* AddonModWorkshopPhaseSelectorPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], AddonModWorkshopPhaseSelectorPageModule);
    return AddonModWorkshopPhaseSelectorPageModule;
}());

//# sourceMappingURL=phase.module.js.map

/***/ }),

/***/ 1970:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonModWorkshopPhaseSelectorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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
 * Page that displays the phase selector modal.
 */
var AddonModWorkshopPhaseSelectorPage = /** @class */ (function () {
    function AddonModWorkshopPhaseSelectorPage(params, viewCtrl) {
        this.viewCtrl = viewCtrl;
        this.selected = params.get('selected');
        this.original = this.selected;
        this.phases = params.get('phases');
        this.workshopPhase = params.get('workshopPhase');
    }
    /**
     * Close modal.
     */
    AddonModWorkshopPhaseSelectorPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    /**
     * Select phase.
     */
    AddonModWorkshopPhaseSelectorPage.prototype.switchPhase = function () {
        // This is a quick hack to avoid the first switch phase call done just when opening the modal.
        if (this.original != this.selected) {
            this.viewCtrl.dismiss(this.selected);
        }
        this.original = null;
    };
    AddonModWorkshopPhaseSelectorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addon-mod-workshop-phase-selector',template:/*ion-inline-start:"/Users/danglong/Desktop/phonegap/moodlemobiledirectory/src/addon/mod/workshop/pages/phase/phase.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>{{ \'addon.mod_workshop.selectphase\' | translate }}</ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="closeModal()" [attr.aria-label]="\'core.close\' | translate">\n                <ion-icon name="close"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <ion-list radio-group [(ngModel)]="selected" (ionChange)="switchPhase()">\n        <ng-container *ngFor="let phase of phases">\n            <ion-item *ngIf="workshopPhase >= phase.code || phase.tasks.length || phase.switchUrl">\n                <ion-label>{{ phase.title }}\n                    <p text-wrap *ngIf="workshopPhase == phase.code">{{ \'addon.mod_workshop.userplancurrentphase\' | translate }}</p>\n                </ion-label>\n                <ion-radio [value]="phase.code"></ion-radio>\n            </ion-item>\n            <ion-item *ngIf="!(workshopPhase >= phase.code || phase.tasks.length || phase.switchUrl)">\n                {{ phase.title }}\n            </ion-item>\n        </ng-container>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/danglong/Desktop/phonegap/moodlemobiledirectory/src/addon/mod/workshop/pages/phase/phase.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ViewController */]])
    ], AddonModWorkshopPhaseSelectorPage);
    return AddonModWorkshopPhaseSelectorPage;
}());

//# sourceMappingURL=phase.js.map

/***/ })

});
//# sourceMappingURL=54.js.map