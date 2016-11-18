import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    templateUrl:'./app/HTMLPages/AppComponent.html'
    
})
export class AppComponent {
    private showDetails = false;
    onSelect() {
        this.showDetails = true;
    }
}
