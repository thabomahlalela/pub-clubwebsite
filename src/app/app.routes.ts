import { Routes } from '@angular/router';
import { LandingPage } from './components/landing-page/landing-page';
import { Menu } from './components/menu/menu';
 
import { Activities } from './components/activities/activities';
import { StaffPortal } from './components/staff-portal/staff-portal';
import { QrScanner } from './components/qr-scanner/qr-scanner';
import { Orders } from './components/orders/orders';
import { BookingTable } from './components/booking-table/booking-table';
import { Membership } from './components/membership/membership';
import { HomeScreen } from './components/home-screen/home-screen';
import { CustomerPortal } from './components/customer-portal/customer-portal';
import { CustomerLandingPage } from './components/customer-landing-page/customer-landing-page';
import { Employees } from './components/employees/employees';
import { CreateEvents } from './components/create-events/create-events';
import { Report } from './components/report/report';
import { Shifts } from './components/shifts/shifts';
import { PhotosScreen } from './components/photos-screen/photos-screen';
import { UploadImageScreen } from './components/upload-image-screen/upload-image-screen';

export const routes: Routes = [
    
    {
        path:'',
        component:HomeScreen,
        children :[
             {
                path:'booking-table',
                component:BookingTable
            },

            {
                path:'',
                component:LandingPage
            },

             {
                path:'membership',
                component:Membership
            },

           {  
                path:'menu',
                component:Menu
            },

            {
                path:'events',
                component:Activities
            },
         
        ]
    },

    {
             path:'customer-landing-page',
        component : CustomerLandingPage,
        children:[
             {
                path:'',
                component : CustomerPortal
            },

              {
                path:'booking-table',
                component:BookingTable
            },

            {
                path:'',
                component:LandingPage
            },

             {
                path:'membership',
                component:Membership
            },

           {  
                path:'menu',
                component:Menu
            },

            {
                path:'events',
                component:Activities
            },
            
        ]
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
            },
             {
                path:'employees',
                component:Employees
            }
            ,
             {
                path:'create-events',
                component:CreateEvents
            }
            ,
             {
                path:'report',
                component:Report
            }
             ,
             {
                path:'shifts',
                component:Shifts
            }
            
        ]
    },

    {
        path : 'view-photos',
        component : PhotosScreen

    },

      {
        path : 'upload-image',
        component : UploadImageScreen

    }
];
