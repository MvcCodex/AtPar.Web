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
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('../CartCount/app.component');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var app_HttpCheckcomponent_1 = require('../CartCount/app.HttpCheckcomponent');
var http_1 = require('@angular/http');
var app_Contactcomponent_1 = require('../CartCount/app.Contactcomponent');
var app_mycomponent_1 = require('../CartCount/app.mycomponent');
var app_httptestcomponent_1 = require('../CartCount/app.httptestcomponent');
var app_samplecomponent_1 = require('../CartCount/app.samplecomponent');
var app_dispalycomponent_1 = require('../CartCount/app.dispalycomponent');
var app_LoginComponent_1 = require('../CartCount/app.LoginComponent');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, router_1.RouterModule.forRoot([
                    { path: 'CartCount/allocatecarts', component: app_httptestcomponent_1.HttpTestComponent },
                    { path: 'CartCount/cartdetailreport', component: app_mycomponent_1.MyComponent },
                    { path: 'CartCount/criticalitems', component: app_Contactcomponent_1.ContactComponent },
                    { path: 'CartCount/dailyactivity', component: app_samplecomponent_1.SampleComponent },
                    { path: 'CartCount/dailyuseractivity', component: app_dispalycomponent_1.DispalyComponent },
                    { path: 'CartCount/getusers', component: app_httptestcomponent_1.HttpTestComponent },
                    { path: 'CartCount/itemexceptionreport', component: app_LoginComponent_1.LoginComponent }
                ])],
            declarations: [app_component_1.AppComponent, app_HttpCheckcomponent_1.Httpcheckcomponent,
                app_mycomponent_1.MyComponent, app_httptestcomponent_1.HttpTestComponent,
                app_Contactcomponent_1.ContactComponent, app_samplecomponent_1.SampleComponent, app_dispalycomponent_1.DispalyComponent, app_LoginComponent_1.LoginComponent],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map