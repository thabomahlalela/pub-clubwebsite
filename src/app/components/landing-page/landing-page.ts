import { Component } from '@angular/core';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { PhotosScreen } from '../photos-screen/photos-screen';

@Component({
  selector: 'app-landing-page',
  imports: [MatIconModule,PhotosScreen],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage {
   

   
}
