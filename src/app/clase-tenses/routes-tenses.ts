import { Routes } from "@angular/router";
import { PresentSimpleComponent } from "./present-simple/present-simple.component";
import { TensesPageMainComponent } from "./tenses-page-main/tenses-page-main.component";
import { PastSimpleComponent } from "./past-simple/past-simple.component";
import { FutureSimpleComponent } from "./future-simple/future-simple.component";
import { PresentPerfectComponent } from "./present-perfect/present-perfect.component";
import { PastPerfectComponent } from "./past-perfect/past-perfect.component";
import { PresentContinuousComponent } from "./present-continuous/present-continuous.component";
import { PresentPerfectContinuousComponent } from "./present-perfect-continuous/present-perfect-continuous.component";

export const ROUTES_TENSES: Routes = [

    {
        path: '', component: TensesPageMainComponent
    },

    {
        path: 'present-simple', component: PresentSimpleComponent
    },

    {
        path: 'past-simple', component: PastSimpleComponent
    },

    {
        path: 'future-simple', component: FutureSimpleComponent
    },

    {
        path: 'present-perfect', component: PresentPerfectComponent
    },

    {
        path: 'past-perfect', component: PastPerfectComponent
    },

    {
        path: 'present-continuous', component: PresentContinuousComponent
    },

    {
        path: 'present-perfect-continuous', component: PresentPerfectContinuousComponent
    }
    
]