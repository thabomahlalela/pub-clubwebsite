import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-create-events',
  imports: [MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule],
  templateUrl: './create-events.html',
  styleUrl: './create-events.css',
})
export class CreateEvents {

}
