import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-report',
  imports: [
     MatButtonModule,
  MatInputModule,
  MatFormFieldModule
  ],
  templateUrl: './report.html',
  styleUrl: './report.css',
})
export class Report {

}
