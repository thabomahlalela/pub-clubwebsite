import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatError, MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-qr-scanner',
  imports: [MatCardModule,MatInputModule, MatError, MatButtonModule],
  templateUrl: './qr-scanner.html',
  styleUrl: './qr-scanner.css',
})
export class QrScanner {

}
