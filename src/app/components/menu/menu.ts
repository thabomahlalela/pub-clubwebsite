import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatLabel, MatFormField, MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-menu',
  imports: [
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatChipsModule,
    CommonModule,
    MatLabel,
    MatFormField,
     CommonModule,
  FormsModule,
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatDividerModule,
  MatChipsModule,
  MatFormFieldModule,
  MatInputModule
],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  categories = [
  {
    label: 'FROM THE FIRE',
    title: 'Chisanyama',
    icon: 'local_fire_department',
    image: 'Screenshot 2026-06-29 122123.png'
  },
  {
    label: 'ON THE SIDE',
    title: 'Sides',
    icon: 'restaurant',
    image: 'Screenshot 2026-06-29 122358.png'
  },
  {
    label: 'LOCAL & PROUD',
    title: 'Beers',
    icon: 'sports_bar',
    image: 'Screenshot 2026-06-29 122606.png'
  },
  {
    label: 'SHAKEN',
    title: 'Cocktails',
    icon: 'local_bar',
    image: 'Screenshot 2026-06-29 122856.png'
  },
  {
    label: 'TOP SHELF',
    title: 'Spirits',
    icon: 'liquor',
    image: 'Screenshot 2026-06-29 123139.png'
  },
  {
    label: 'NON-ALCOHOLIC',
    title: 'Soft',
    icon: 'local_drink',
    image: 'Screenshot 2026-06-29 123522.png'
  }
];

menuItems = [

  {
    image:'assets/images/menu/boerewors.jpg',
    name:'Boerewors Roll',
    description:'Traditional wors with onion relish',
    price:85,
    popular:true
  },

  {
    image:'assets/images/menu/ribs.jpg',
    name:'Pork Ribs',
    description:'500g pork ribs with BBQ basting',
    price:180,
    popular:false
  },

  {
    image:'assets/images/menu/tbone.jpg',
    name:'T-Bone Steak',
    description:'Flame grilled to perfection',
    price:220,
    popular:false
  },

  {
    image:'assets/images/menu/garlic.jpg',
    name:'Garlic Bread',
    description:'House made herb butter',
    price:35,
    popular:false
  },

  {
    image:'assets/images/menu/pap.jpg',
    name:'Pap & Chakalaka',
    description:'Generous portion',
    price:45,
    popular:false
  }

];



cart = [
  {
    name: 'Castle Lager',
    qty: 2,
    price: 35
  },
  {
    name: 'Boerewors Roll',
    qty: 1,
    price: 85
  },
  {
    name: 'Garlic Bread',
    qty: 1,
    price: 35
  }
];

serviceFee = 10;

get subtotal(): number {
  return this.cart.reduce((total, item) => total + (item.qty * item.price), 0);
}

get total(): number {
  return this.subtotal + this.serviceFee;
}

increase(item: any) {
  item.qty++;
}

decrease(item: any) {
  if (item.qty > 1) {
    item.qty--;
  }
}

remove(item: any) {
  this.cart = this.cart.filter(i => i !== item);
}

}
