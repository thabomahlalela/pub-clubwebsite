import { Routes } from '@angular/router';
import { LandingPage } from './components/landing-page/landing-page';
import { Menu } from './components/menu/menu';
 
import { Activities } from './components/activities/activities';
import { StaffPortal } from './components/staff-portal/staff-portal';
import { QrScanner } from './components/qr-scanner/qr-scanner';
import { Orders } from './components/orders/orders';

export const routes: Routes = [
    {
        path:'',
        component:LandingPage
    },
    {
        path:'menu',
        component:Menu
    },

    {
        path:'events',
        component:Activities
    },

    {
        path:'staff-portal',
        component:StaffPortal,
        children:[
            {
                path:'verify',
                component:QrScanner
            },

            {
                path:'orders',
                component:Orders
            }
        ]
    }
];
