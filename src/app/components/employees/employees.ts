import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-employees',
  imports: [
     MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule
  ],
  templateUrl: './employees.html',
  styleUrl: './employees.css',
})
export class Employees {

}
