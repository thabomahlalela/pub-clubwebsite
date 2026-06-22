import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatError, MatInputModule } from '@angular/material/input';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-staff-portal',
  imports: [MatCardModule, MatButtonModule, MatInputModule,  RouterOutlet],
  templateUrl: './staff-portal.html',
  styleUrl: './staff-portal.css',
})
export class StaffPortal {

}
