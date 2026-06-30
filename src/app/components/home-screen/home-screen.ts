import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-home-screen',
  imports: [MatToolbarModule, MatButtonModule, MatCardModule,RouterOutlet ,RouterLink,
    RouterLinkActive],
  templateUrl: './home-screen.html',
  styleUrl: './home-screen.css',
})
export class HomeScreen {

}
