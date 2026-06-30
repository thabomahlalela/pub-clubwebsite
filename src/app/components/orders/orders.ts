import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';



interface OrderItem {
  name: string;
  quantity: number;
}

interface Order {

  number: string;

  table: string;

  customer: string;

  status: 'Preparing' | 'Ready' | 'Completed' | 'Cancelled';

  time: string;

  total: string;

  items: OrderItem[];

}

@Component({
  selector: 'app-orders',
  imports: [
    MatCardModule,
MatButtonModule,
MatIconModule,
MatFormFieldModule,
MatInputModule,
MatSelectModule,
CommonModule
  ],
  templateUrl: './orders.html',
  styleUrl: './orders.css',
})
export class Orders {
     orders: Order[] = [

    {
      number: '1024',
      table: 'Table 7',
      customer: 'John M.',
      status: 'Preparing',
      time: '19:42',
      total: 'R520',

      items: [
        { quantity: 2, name: 'Signature Burger' },
        { quantity: 2, name: 'Craft Lager' },
        { quantity: 1, name: 'Fries' }
      ]
    },

    {
      number: '1025',
      table: 'Table 12',
      customer: 'Walk-in',
      status: 'Ready',
      time: '19:47',
      total: 'R340',
        items: [
        { quantity: 1, name: 'Chicken Wings' },
        { quantity: 2, name: 'Gin & Tonic' }
      ]
    },

    {
      number: '1026',
      table: 'Table 3',
      customer: 'Sarah P.',
      status: 'Preparing',
      time: '19:51',
      total: 'R880',

      items: [
        { quantity: 2, name: 'T-Bone Steak' },
        { quantity: 1, name: 'Wine Bottle' },
        { quantity: 3, name: 'Garlic Bread' }
      ]
    },

    {
      number: '1027',
      table: 'Table 5',
      customer: 'Mike D.',
      status: 'Completed',
      time: '18:20',
      total: 'R210',

      items: [
        { quantity: 1, name: 'Beef Burger' },
        { quantity: 2, name: 'Coke' }
      ]
    },

    {
        number: '1028',
      table: 'Table 10',
      customer: 'Birthday Group',
      status: 'Preparing',
      time: '20:05',
      total: 'R1430',

      items: [
        { quantity: 5, name: 'Platter' },
        { quantity: 8, name: 'Castle Lite' },
        { quantity: 4, name: 'Cocktails' }
      ]
    },

    {
      number: '1029',
      table: 'Table 2',
      customer: 'Walk-in',
      status: 'Cancelled',
      time: '20:14',
      total: 'R120',

      items: [
        { quantity: 2, name: 'Milkshake' }
      ]
    }

  ];
}
