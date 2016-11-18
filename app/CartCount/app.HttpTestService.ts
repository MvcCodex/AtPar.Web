import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AtparUser } from '../CartCount/AtparUser';


@Injectable()
export class HttPTestServices {
    constructor(private _http: Http) { }
    GetAll() {
        return this._http.get("api/User")
            .map(res => <AtparUser[]> res.json());
     
    }
    
}