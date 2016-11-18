import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../CartCount/app.component';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { Httpcheckcomponent } from '../CartCount/app.HttpCheckcomponent';
import { HttpModule } from '@angular/http';
import { ContactComponent } from '../CartCount/app.Contactcomponent';
import { MyComponent } from '../CartCount/app.mycomponent';
import { HttpTestComponent } from '../CartCount/app.httptestcomponent';
import { SampleComponent } from '../CartCount/app.samplecomponent';
import { DispalyComponent } from '../CartCount/app.dispalycomponent';
import { LoginComponent } from '../CartCount/app.LoginComponent';
@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot([
        { path: 'CartCount/allocatecarts', component: HttpTestComponent },
        { path: 'CartCount/cartdetailreport', component: MyComponent },
        { path: 'CartCount/criticalitems', component: ContactComponent },
        { path: 'CartCount/dailyactivity', component: SampleComponent },
        { path: 'CartCount/dailyuseractivity', component: DispalyComponent },
        { path: 'CartCount/getusers', component: HttpTestComponent },
        { path: 'CartCount/itemexceptionreport', component: LoginComponent }
    ])],
        
    declarations: [AppComponent, Httpcheckcomponent,
        MyComponent, HttpTestComponent,
        ContactComponent, SampleComponent, DispalyComponent, LoginComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
