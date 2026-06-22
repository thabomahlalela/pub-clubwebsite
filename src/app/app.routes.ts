import { Routes } from '@angular/router';
import { CustomerPortal } from './components/customer-portal/customer-portal';
import { Membership } from './components/membership/membership';
import { BookingTable } from './components/booking-table/booking-table';


export const routes: Routes = [
    {
        path : 'customer-portal',
        component : CustomerPortal
    },
    {
        path : 'membership',
        component : Membership
    },
    {
        path : 'booking-table',
        component : BookingTable
    },
];
