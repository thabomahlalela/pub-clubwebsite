import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatToolbarModule } from '@angular/material/toolbar';
import html2canvas from  'html2canvas';

@Component({
  selector: 'app-customer-portal',
  standalone : true,
  imports: [CommonModule,MatCardModule,MatButtonModule,MatChipsModule,MatToolbarModule],
  templateUrl: './customer-portal.html',
  styleUrl: './customer-portal.css',
})
export class CustomerPortal {
  bookings = [
  {
    table: 'Table 3',
    type: 'STANDARD',
    status: 'CONFIRMED',
    date: '2026-06-17 • Party of 4'
  },
  {
    table: 'Table 10',
    type: 'VIP',
    status: 'VERIFIED',
    date: '2026-06-14 • Party of 8'
  }
];

tickets = [
  {
    name: 'Amapiano Saturdays',
    status: 'VALID',
    date: '20 Jun 2026 • R150'
  },
  {
    name: 'Chisanyama Sundays',
    status: 'VALID',
    date: '21 Jun 2026 • Free'
  }
];


 capturePoster() {
  const element = document.getElementById('poster');

  html2canvas(element!, {
    scale: 2,
    useCORS: true
  }).then(canvas => {
    const image = canvas.toDataURL('image/png');

    const link = document.createElement('a');
    link.href = image;
    link.download = 'poster.png';
    link.click();
  });
}
}
