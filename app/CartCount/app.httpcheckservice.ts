import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Routepath } from "../CartCount/Routepath";



@Injectable()
export class HttPcheckServices {
    constructor(private _http: Http) { }
    getmenudetails() {
        return this._http.get("api/Route/GetRoutes")
            .map(res => <Routepath[]>res.json());
    }
}