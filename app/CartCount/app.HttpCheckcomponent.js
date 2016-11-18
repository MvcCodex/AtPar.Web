"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var app_httpcheckservice_1 = require('../CartCount/app.httpcheckservice');
var Httpcheckcomponent = (function () {
    function Httpcheckcomponent(RouteService) {
        this.RouteService = RouteService;
    }
    Httpcheckcomponent.prototype.getRouteLinks = function () {
        var _this = this;
        this.RouteService.getmenudetails().forEach(function (p) { return _this.menudetails = p; });
    };
    Httpcheckcomponent.prototype.ngOnInit = function () {
        this.getRouteLinks();
    };
    Httpcheckcomponent = __decorate([
        core_1.Component({
            selector: 'menu-app',
            templateUrl: './app/HTMLPages/Httpcheckcomponent.html',
            providers: [app_httpcheckservice_1.HttPcheckServices]
        }), 
        __metadata('design:paramtypes', [app_httpcheckservice_1.HttPcheckServices])
    ], Httpcheckcomponent);
    return Httpcheckcomponent;
}());
exports.Httpcheckcomponent = Httpcheckcomponent;
//# sourceMappingURL=app.HttpCheckcomponent.js.map