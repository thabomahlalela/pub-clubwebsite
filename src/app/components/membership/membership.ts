import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-membership',
  imports: [ MatToolbarModule,MatButtonModule,MatCardModule],
  templateUrl: './membership.html',
  styleUrl: './membership.css',
})
export class Membership {

}
