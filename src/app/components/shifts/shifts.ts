import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';


interface Shift {

  start: string;

  end: string;

  label: string;

  type: 'morning' | 'evening' | 'off';

}

interface Employee {

  initials: string;

  name: string;

  role: string;

  shifts: (Shift | null)[];

}

@Component({
  selector: 'app-shifts',
  imports: [
    MatCardModule,
MatButtonModule,
MatIconModule,
MatFormFieldModule,
MatInputModule,
MatSelectModule,CommonModule
  ],
  templateUrl: './shifts.html',
  styleUrl: './shifts.css',
})
export class Shifts {

  employees: Employee[] = [

  {
    initials: 'TM',
    name: 'Thabo Mokoena',
    role: 'Bartender',
    shifts: [
      { start:'08:00', end:'16:00', label:'Morning', type:'morning' },
      { start:'08:00', end:'16:00', label:'Morning', type:'morning' },
      null,
      { start:'14:00', end:'22:00', label:'Evening', type:'evening' },
      { start:'14:00', end:'22:00', label:'Evening', type:'evening' },
      null,
      { start:'10:00', end:'18:00', label:'Weekend', type:'morning' }
    ]
  },

  {
    initials:'NK',
    name:'Nomsa Khumalo',
    role:'Chef',
    shifts:[
      { start:'10:00', end:'18:00', label:'Kitchen', type:'morning' },
      { start:'10:00', end:'18:00', label:'Kitchen', type:'morning' },
      { start:'14:00', end:'22:00', label:'Dinner', type:'evening' },
      null,
      { start:'10:00', end:'18:00', label:'Kitchen', type:'morning' },
      { start:'14:00', end:'22:00', label:'Dinner', type:'evening' },
      null
    ]
  },

  {
    initials:'SD',
    name:'Sipho Dlamini',
    role:'Waiter',
    shifts:[
      null,
      { start:'09:00', end:'17:00', label:'Lunch', type:'morning' },
      { start:'09:00', end:'17:00', label:'Lunch', type:'morning' },
      { start:'15:00', end:'23:00', label:'Night', type:'evening' },
      null,
      { start:'15:00', end:'23:00', label:'Night', type:'evening' },
      { start:'15:00', end:'23:00', label:'Night', type:'evening' }
    ]
  }

];

}
