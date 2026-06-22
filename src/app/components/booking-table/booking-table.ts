import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-booking-table',
  imports: [MatToolbarModule,MatButtonModule,MatFormFieldModule,MatInputModule, MatSelectModule,MatCardModule
    ,MatDatepickerModule,MatNativeDateModule, AsyncPipe],
  templateUrl: './booking-table.html',
  styleUrl: './booking-table.css',
})
export class BookingTable {

   isMobile$!: Observable<any>;

  constructor(private breakpointObserver: BreakpointObserver) {}

    ngOnInit(): void {
    this.isMobile$ = this.breakpointObserver.observe('(max-width: 768px)');
  }

}
