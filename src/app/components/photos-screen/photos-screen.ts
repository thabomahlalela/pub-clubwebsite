import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { UploadImageScreen } from '../upload-image-screen/upload-image-screen';

@Component({
  selector: 'app-photos-screen',
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    CommonModule
  ],
  templateUrl: './photos-screen.html',
  styleUrl: './photos-screen.css',
})
export class PhotosScreen {
      //   categories = [
      //   { name:'All', icon:'photo_library' },
      //   { name:'Drinks', icon:'local_bar' },
      //   { name:'Braai', icon:'outdoor_grill' },
      //   { name:'Parties', icon:'celebration' },
      //   { name:'Food', icon:'restaurant' },
      //   { name:'Birthdays', icon:'cake' },
      //   { name:'Sports', icon:'sports_soccer' }
      // ];

      //   filteredPhotos = [

      // {
      // image:'assets/gallery/1.jpg',
      // user:'Lethabo M.',
      // likes:128,
      // category:'Parties'
      // },

      // {
      // image:'assets/gallery/2.jpg',
      // user:'Sipho_K',
      // likes:94,
      // category:'Drinks'
      // },

      // {
      // image:'assets/gallery/3.jpg',
      // user:'Thabo_12',
      // likes:156,
      // category:'Braai'
      // },

      // {
      // image:'assets/gallery/4.jpg',
      // user:'Nomsa_B',
      // likes:87,
      // category:'Drinks'
      // },

      // {
      // image:'assets/gallery/5.jpg',
      // user:'BraaiKing',
      // likes:102,
      // category:'Braai'
      // },

      // {
      // image:'assets/gallery/6.jpg',
      // user:'Zanelee',
      // likes:77,
      // category:'Parties'
      // },

      // {
      // image:'assets/gallery/7.jpg',
      // user:'Paballo',
      // likes:91,
      // category:'Parties'
      // },

      // {
      // image:'assets/gallery/8.jpg',
      // user:'Kamo_',
      // likes:68,
      // category:'Drinks'
      // },

      // {
      // image:'assets/gallery/9.jpg',
      // user:'Lerato M.',
      // likes:64,
      // category:'Food'
      // },

      // {
      // image:'assets/gallery/10.jpg',
      // user:'QueenT',
      // likes:113,
      // category:'Parties'
      // }

      // ];



  constructor(
    private dialog: MatDialog
  ) {}

  selectedCategory = 'All';

  categories = [

    {
      name:'All',
      icon:'photo_library'
    },

    {
      name:'Drinks',
      icon:'local_bar'
    },

    {
      name:'Braai',
      icon:'outdoor_grill'
    },

    {
      name:'Parties',
      icon:'celebration'
    },

    {
      name:'Food',
      icon:'restaurant'
    },
      {
      name:'Birthdays',
      icon:'cake'
    },

    {
      name:'Sports',
      icon:'sports_soccer'
    }

  ];

  photos = [

    {
      image:'Screenshot 2026-06-28 103635.png',
      user:'Lethabo M.',
      likes:128,
      category:'Parties',
      caption:'Friday Night'
    },

    {
      image:'Screenshot 2026-06-28 103903.png',
      user:'Sipho_K',
      likes:94,
      category:'Drinks',
      caption:'Premium Drinks'
    },

    {
      image:'Screenshot 2026-06-28 104208.png',
      user:'Thabo_12',
      likes:156,
      category:'Braai',
      caption:'Braai Time'
    },
     {
      image:'Screenshot 2026-06-28 104418.png',
      user:'Nomsa_B',
      likes:87,
      category:'Drinks',
      caption:'Cocktails'
    },

    {
      image:'Screenshot 2026-06-28 104730.png',
      user:'BraaiKing',
      likes:102,
      category:'Braai',
      caption:'Meat Lovers'
    },

    {
      image:'Screenshot 2026-06-28 105159.png',
      user:'Zanelee',
      likes:77,
      category:'Parties',
      caption:'Saturday Night'
    },

    {
      image:'Screenshot 2026-06-28 105719.png',
      user:'Paballo',
      likes:91,
      category:'Parties',
      caption:'Friends'
    },

    {
      image:'Screenshot 2026-06-28 105844.png',
      user:'Kamo_',
      likes:68,
      category:'Drinks',
      caption:'VIP Lounge'
    },
     {
      image:'Screenshot 2026-06-28 110152.png',
      user:'Lerato M.',
      likes:64,
      category:'Food',
      caption:'Dessert'
    },

    {
      image:'Screenshot 2026-06-28 110356.png',
      user:'QueenT',
      likes:113,
      category:'Parties',
      caption:'Girls Night'
    }

  ];

  filteredPhotos = [...this.photos];

  selectCategory(category: any): void {

    this.selectedCategory = category.name;

    if (category.name === 'All') {

      this.filteredPhotos = [...this.photos];

      return;

    }

    this.filteredPhotos = this.photos.filter(photo =>
      photo.category === category.name
    );

  }

    openShareDialog(): void {

    // We'll replace this in Part 4
     this.dialog.open(UploadImageScreen, {

    width: '95vw',

    maxWidth: '1400px',

    height: '92vh',

    panelClass: 'upload-dialog-panel',

    backdropClass: 'upload-dialog-backdrop',

    autoFocus: false,

    restoreFocus: false

  });
    console.log('Open Share Dialog');

  }

  openPhoto(photo: any): void {

    console.log(photo);

    // Full screen preview
    // Added in Part 4

  }
}
