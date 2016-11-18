import { Component} from '@angular/core';
import { HttPTestServices } from '../CartCount/app.HttPTestService';
import { AtparUser } from '../CartCount/AtparUser';
@Component({
    templateUrl:'./app/HTMLPages/allocatecarts.html',
    
    providers: [HttPTestServices]
})
export class HttpTestComponent {

    _Alldetails: AtparUser[];
   
    constructor(private TestService: HttPTestServices) { }

    Getalldetails(): void {
        this.TestService.GetAll().forEach(m => this._Alldetails = m);
    }

    ngOnInit(): void {
        this.Getalldetails();
    }

}