webpackJsonp([53],{

/***/ 1859:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonResourceMyResourcePageModule", function() { return AddonResourceMyResourcePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_courses_components_components_module__ = __webpack_require__(931);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipes_pipes_module__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__my_resource__ = __webpack_require__(1989);
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








var AddonResourceMyResourcePageModule = /** @class */ (function () {
    function AddonResourceMyResourcePageModule() {
    }
    AddonResourceMyResourcePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__my_resource__["a" /* AddonResourceMyResourcePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_6__pipes_pipes_module__["a" /* CorePipesModule */],
                __WEBPACK_IMPORTED_MODULE_3__core_courses_components_components_module__["a" /* CoreCoursesComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_7__my_resource__["a" /* AddonResourceMyResourcePage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], AddonResourceMyResourcePageModule);
    return AddonResourceMyResourcePageModule;
}());

//# sourceMappingURL=my-resource.module.js.map

/***/ }),

/***/ 1989:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonResourceMyResourcePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_courses_providers_courses__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utils_dom__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_utils_utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_events__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_app__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_courses_providers_my_overview__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_course_providers_helper__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__core_course_providers_options_delegate__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_moment__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_tabs_tabs__ = __webpack_require__(135);
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
 * Page that displays the list of calendar events.
 */
var AddonResourceMyResourcePage = /** @class */ (function () {
    function AddonResourceMyResourcePage(domUtils, coursesProvider, utils, myOverviewProvider, sitesProvider, courseHelper, courseOptionsDelegate, eventsProvider, navCtrl, appProvider) {
        this.domUtils = domUtils;
        this.coursesProvider = coursesProvider;
        this.utils = utils;
        this.myOverviewProvider = myOverviewProvider;
        this.sitesProvider = sitesProvider;
        this.courseHelper = courseHelper;
        this.courseOptionsDelegate = courseOptionsDelegate;
        this.eventsProvider = eventsProvider;
        this.navCtrl = navCtrl;
        this.courses = {
            selected: 'inprogress',
            loaded: false,
            filter: '',
            past: [],
            inprogress: [],
            future: []
        };
        this.tabShown = 'courses';
        this.showFilter = false;
        this.timeline = {
            sort: 'sortbydates',
            events: [],
            loaded: false,
            canLoadMore: undefined
        };
        this.timelineCourses = {
            courses: [],
            loaded: false,
            canLoadMore: false
        };
        this.prefetchCoursesData = {
            inprogress: {},
            past: {},
            future: {}
        };
        this.prefetchIconsInitialized = false;
        this.courseIds = '';
        this.loadSiteName();
    }
    /**
     * View loaded.
     */
    AddonResourceMyResourcePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.searchEnabled = !this.coursesProvider.isSearchCoursesDisabledInSite();
        this.downloadAllCoursesEnabled = !this.coursesProvider.isDownloadCoursesDisabledInSite();
        // Refresh the enabled flags if site is updated.
        this.updateSiteObserver = this.eventsProvider.on(__WEBPACK_IMPORTED_MODULE_6__providers_events__["a" /* CoreEventsProvider */].SITE_UPDATED, function () {
            var wasEnabled = _this.downloadAllCoursesEnabled;
            _this.searchEnabled = !_this.coursesProvider.isSearchCoursesDisabledInSite();
            _this.downloadAllCoursesEnabled = !_this.coursesProvider.isDownloadCoursesDisabledInSite();
            if (!wasEnabled && _this.downloadAllCoursesEnabled && _this.courses.loaded) {
                // Download all courses is enabled now, initialize it.
                _this.initPrefetchCoursesIcons();
            }
            _this.loadSiteName();
        });
        if (!this.courses.loaded) {
            this.fetchMyOverviewCourses().finally(function () {
                _this.courses.loaded = true;
            });
        }
    };
    /**
     * Fetch the timeline.
     *
     * @param {number} [afterEventId] The last event id.
     * @return {Promise<any>} Promise resolved when done.
     */
    AddonResourceMyResourcePage.prototype.fetchMyOverviewTimeline = function (afterEventId) {
        var _this = this;
        return this.myOverviewProvider.getActionEventsByTimesort(afterEventId).then(function (events) {
            _this.timeline.events = events.events;
            _this.timeline.canLoadMore = events.canLoadMore;
        }).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'Error getting my overview data.');
        });
    };
    /**
     * Go to search courses.
     */
    AddonResourceMyResourcePage.prototype.openSearch = function () {
        this.navCtrl.push('CoreCoursesSearchPage');
    };
    /**
     * Fetch the timeline by courses.
     *
     * @return {Promise<any>} Promise resolved when done.
     */
    AddonResourceMyResourcePage.prototype.fetchMyOverviewTimelineByCourses = function () {
        var _this = this;
        return this.fetchUserCourses().then(function (courses) {
            var today = __WEBPACK_IMPORTED_MODULE_11_moment__().unix();
            var courseIds;
            courses = courses.filter(function (course) {
                return course.startdate <= today && (!course.enddate || course.enddate >= today);
            });
            _this.timelineCourses.courses = courses;
            if (courses.length > 0) {
                courseIds = courses.map(function (course) {
                    return course.id;
                });
                return _this.myOverviewProvider.getActionEventsByCourses(courseIds).then(function (courseEvents) {
                    _this.timelineCourses.courses.forEach(function (course) {
                        course.events = courseEvents[course.id].events;
                        course.canLoadMore = courseEvents[course.id].canLoadMore;
                    });
                });
            }
        }).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'Error getting my overview data.');
        });
    };
    /**
     * Show or hide the filter.
     */
    AddonResourceMyResourcePage.prototype.switchFilter = function () {
        var _this = this;
        this.showFilter = !this.showFilter;
        this.courses.filter = '';
        this.filteredCourses = this.courses[this.courses.selected];
        if (this.showFilter) {
            setTimeout(function () {
                _this.searchbar.setFocus();
            });
        }
    };
    /**
     * Fetch the courses for my overview.
     *
     * @return {Promise<any>} Promise resolved when done.
     */
    AddonResourceMyResourcePage.prototype.fetchMyOverviewCourses = function () {
        var _this = this;
        return this.fetchUserCourses().then(function (courses) {
            var today = __WEBPACK_IMPORTED_MODULE_11_moment__().unix(), categoryList = [];
            _this.courses.past = [];
            _this.courses.inprogress = [];
            _this.courses.future = [];
            courses.forEach(function (course) {
                if (course.startdate > today) {
                    // Courses that have not started yet.
                    _this.courses.future.push(course);
                }
                else if (course.enddate && course.enddate < today) {
                    // Courses that have already ended.
                    _this.courses.past.push(course);
                }
                else {
                    // Courses still in progress.
                    _this.courses.inprogress.push(course);
                }
                if (!categoryList.find(function (el) { return el.id == course.category; })) {
                    categoryList.push({ id: course.category, name: course.categoryname, courses: [] });
                }
            });
            categoryList.forEach(function (category) {
                courses.forEach(function (course) {
                    if (category.id == course.category) {
                        category.courses.push(course);
                    }
                });
            });
            categoryList.sort(function (a, b) {
                return a.id - b.id;
            });
            _this.filteredCategory = categoryList;
            _this.courses.filter = '';
            _this.showFilter = false;
            _this.filteredCourses = _this.courses[_this.courses.selected];
            _this.initPrefetchCoursesIcons();
        }).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'Error getting my overview data.');
        });
    };
    /**
     * Fetch user courses.
     *
     * @return {Promise<any>} Promise resolved when done.
     */
    AddonResourceMyResourcePage.prototype.fetchUserCourses = function () {
        var _this = this;
        return this.coursesProvider.getUserCourses(null, null, 2).then(function (courses) {
            var promises = [], courseIds = courses.map(function (course) {
                return course.id;
            });
            if (_this.coursesProvider.canGetAdminAndNavOptions()) {
                // Load course options of the course.
                promises.push(_this.coursesProvider.getCoursesAdminAndNavOptions(courseIds).then(function (options) {
                    courses.forEach(function (course) {
                        course.navOptions = options.navOptions[course.id];
                        course.admOptions = options.admOptions[course.id];
                    });
                }));
            }
            _this.courseIds = courseIds.join(',');
            if (_this.courseIds && _this.coursesProvider.isGetCoursesByFieldAvailable()) {
                // Load course image of all the courses.
                promises.push(_this.coursesProvider.getCoursesByField('ids', _this.courseIds).then(function (coursesInfo) {
                    coursesInfo = _this.utils.arrayToObject(coursesInfo, 'id');
                    courses.forEach(function (course) {
                        if (coursesInfo[course.id] && coursesInfo[course.id].overviewfiles &&
                            coursesInfo[course.id].overviewfiles[0]) {
                            course.imageThumb = coursesInfo[course.id].overviewfiles[0].fileurl;
                        }
                        else {
                            course.imageThumb = false;
                        }
                    });
                }));
            }
            return Promise.all(promises).then(function () {
                return courses.sort(function (a, b) {
                    var compareA = a.fullname.toLowerCase(), compareB = b.fullname.toLowerCase();
                    return compareA.localeCompare(compareB);
                });
            });
        });
    };
    /**
     * Initialize the prefetch icon for selected courses.
     */
    AddonResourceMyResourcePage.prototype.initPrefetchCoursesIcons = function () {
        var _this = this;
        if (this.prefetchIconsInitialized || !this.downloadAllCoursesEnabled) {
            // Already initialized.
            return;
        }
        this.prefetchIconsInitialized = true;
        Object.keys(this.prefetchCoursesData).forEach(function (filter) {
            if (!_this.courses[filter] || _this.courses[filter].length < 2) {
                // Not enough courses.
                _this.prefetchCoursesData[filter].icon = '';
                return;
            }
            _this.courseHelper.determineCoursesStatus(_this.courses[filter]).then(function (status) {
                var icon = _this.courseHelper.getCourseStatusIconAndTitleFromStatus(status).icon;
                if (icon == 'spinner') {
                    // It seems all courses are being downloaded, show a download button instead.
                    icon = 'cloud-download';
                }
                _this.prefetchCoursesData[filter].icon = icon;
            });
        });
    };
    /**
     * Refresh the data.
     *
     * @param {any} refresher Refresher.
     * @return {Promise<any>} Promise resolved when done.
     */
    AddonResourceMyResourcePage.prototype.refreshMyOverview = function (refresher) {
        var _this = this;
        var promises = [];
        if (this.tabShown == 'timeline') {
            promises.push(this.myOverviewProvider.invalidateActionEventsByTimesort());
            promises.push(this.myOverviewProvider.invalidateActionEventsByCourses());
        }
        promises.push(this.coursesProvider.invalidateUserCourses());
        promises.push(this.courseOptionsDelegate.clearAndInvalidateCoursesOptions());
        if (this.courseIds) {
            promises.push(this.coursesProvider.invalidateCoursesByField('ids', this.courseIds));
        }
        return Promise.all(promises).finally(function () {
            switch (_this.tabShown) {
                case 'timeline':
                    switch (_this.timeline.sort) {
                        case 'sortbydates':
                            return _this.fetchMyOverviewTimeline();
                        case 'sortbycourses':
                            return _this.fetchMyOverviewTimelineByCourses();
                        default:
                    }
                    break;
                case 'courses':
                    _this.prefetchIconsInitialized = false;
                    return _this.fetchMyOverviewCourses();
                default:
            }
        }).finally(function () {
            refresher.complete();
        });
    };
    /**
     * Load the site name.
     */
    AddonResourceMyResourcePage.prototype.loadSiteName = function () {
        this.siteName = this.sitesProvider.getCurrentSite().getInfo().sitename;
    };
    /**
     * Page destroyed.
     */
    AddonResourceMyResourcePage.prototype.ngOnDestroy = function () {
        this.isDestroyed = true;
        this.updateSiteObserver && this.updateSiteObserver.off();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_12__components_tabs_tabs__["a" /* CoreTabsComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_12__components_tabs_tabs__["a" /* CoreTabsComponent */])
    ], AddonResourceMyResourcePage.prototype, "tabsComponent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('searchbar'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* Searchbar */])
    ], AddonResourceMyResourcePage.prototype, "searchbar", void 0);
    AddonResourceMyResourcePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addon-resource-my-resource',template:/*ion-inline-start:"/Users/danglong/Desktop/phonegap/ats2/src/addon/resource/pages/my-resource/my-resource.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title><core-format-text [text]="siteName"></core-format-text></ion-title>\n\n        <ion-buttons end>\n            <button *ngIf="searchEnabled" ion-button icon-only (click)="openSearch()" [attr.aria-label]="\'core.courses.searchcourses\' | translate">\n                <ion-icon name="search"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n   \n    <ion-refresher [enabled]="timeline.loaded || timelineCourses.loaded || courses.loaded" (ionRefresh)="refreshMyOverview($event)">\n        <ion-refresher-content pullingText="{{ \'core.pulltorefresh\' | translate }}"></ion-refresher-content>\n    </ion-refresher>\n\n    <core-loading [hideUntil]="courses.loaded" class="core-loading-center">\n        <core-empty-box *ngIf="courses[courses.selected].length == 0 && courses.selected == \'inprogress\'" image="assets/img/icons/courses.svg" [message]="\'core.courses.nocoursesinprogress\' | translate"></core-empty-box>\n        <core-empty-box *ngIf="courses[courses.selected].length == 0 && courses.selected == \'future\'" image="assets/img/icons/courses.svg" [message]="\'core.courses.nocoursesfuture\' | translate"></core-empty-box>\n        <core-empty-box *ngIf="courses[courses.selected].length == 0 && courses.selected == \'past\'" image="assets/img/icons/courses.svg" [message]="\'core.courses.nocoursespast\' | translate"></core-empty-box>\n        <div>\n            <core-courses-course-list-slide [categories]="filteredCategory">\n            </core-courses-course-list-slide>\n        </div>\n    </core-loading>\n\n</ion-content>'/*ion-inline-end:"/Users/danglong/Desktop/phonegap/ats2/src/addon/resource/pages/my-resource/my-resource.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_utils_dom__["a" /* CoreDomUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_2__core_courses_providers_courses__["a" /* CoreCoursesProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_utils_utils__["a" /* CoreUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_8__core_courses_providers_my_overview__["a" /* CoreCoursesMyOverviewProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_sites__["a" /* CoreSitesProvider */],
            __WEBPACK_IMPORTED_MODULE_9__core_course_providers_helper__["a" /* CoreCourseHelperProvider */], __WEBPACK_IMPORTED_MODULE_10__core_course_providers_options_delegate__["a" /* CoreCourseOptionsDelegate */],
            __WEBPACK_IMPORTED_MODULE_6__providers_events__["a" /* CoreEventsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_7__providers_app__["a" /* CoreAppProvider */]])
    ], AddonResourceMyResourcePage);
    return AddonResourceMyResourcePage;
}());

//# sourceMappingURL=my-resource.js.map

/***/ })

});
//# sourceMappingURL=53.js.map