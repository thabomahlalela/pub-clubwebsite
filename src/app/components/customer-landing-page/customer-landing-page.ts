import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-customer-landing-page',
  imports: [MatToolbarModule, MatButtonModule, MatCardModule,RouterOutlet ,RouterLink,
    RouterLinkActive],
  templateUrl: './customer-landing-page.html',
  styleUrl: './customer-landing-page.css',
})
export class CustomerLandingPage {

}
