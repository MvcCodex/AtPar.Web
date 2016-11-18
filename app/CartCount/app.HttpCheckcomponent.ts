import { Component } from '@angular/core';
import { HttPcheckServices } from '../CartCount/app.httpcheckservice';
import { Routepath } from "../CartCount/Routepath";
@Component({
    selector: 'menu-app',
    templateUrl:'./app/HTMLPages/Httpcheckcomponent.html',
        
    providers: [HttPcheckServices]
})
export class Httpcheckcomponent {

    menudetails: Routepath[];
    constructor(private RouteService: HttPcheckServices) { }

    getRouteLinks(): void {
        this.RouteService.getmenudetails().forEach(p => this.menudetails = p);
    }

    ngOnInit(): void {
        this.getRouteLinks();
    }

}
