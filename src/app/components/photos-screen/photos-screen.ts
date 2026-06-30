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
      image:'https://scontent-jnb2-1.xx.fbcdn.net/v/t39.99422-6/735476225_823431530705698_5271530595013623761_n.png?stp=dst-jpg_tt6&cstp=mx1454x1600&ctp=s590x590&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFPuvvKanJwYwL3uAbf4W3zIuEWk7tNf8Ai4RaTu01_wE3OABlN2x4Vpqq-ea3-ar1qUNo2B557efxMNUSu5F0d&_nc_ohc=brZwImQD_zoQ7kNvwEvmpne&_nc_oc=AdpFMbTyhMWqxKPy-1SFMdFl1mGrV744-B54YPNVsPlyRONCB7gyh9D9S9m7-aoYLjg&_nc_zt=14&_nc_ht=scontent-jnb2-1.xx&_nc_gid=YDovAvEJbM_fi0xITXl9lQ&_nc_ss=7b2a8&oh=00_AQAQrsKJBqdsTCcSjz8pXbZ8sOnN90wzMMlGABW8keqVkQ&oe=6A499CEB',
      user:'Lethabo M.',
      likes:128,
      category:'Parties',
      caption:'Friday Night'
    },

    {
      image:'https://scontent-jnb2-1.xx.fbcdn.net/v/t39.99422-6/731173257_1651296242833614_4406704057720223435_n.png?stp=dst-jpg_tt6&cstp=mx1066x1600&ctp=s590x590&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEbHe2-IszjB8jyeQyQrgd6hk9LGggPWpGGT0saCA9akYJuJEJy8e6Qe7mdVV56js3sMXHTrvwE9vU814rBtNZk&_nc_ohc=nrG5LZ6Yh70Q7kNvwGM4gcI&_nc_oc=AdoZ4GOtKFsOOphXGPKT79HixjYgJVMOYGurQGevVULIEyWAY2AjTcp13E_s_anKkKg&_nc_zt=14&_nc_ht=scontent-jnb2-1.xx&_nc_gid=YDovAvEJbM_fi0xITXl9lQ&_nc_ss=7b2a8&oh=00_AQCFs_wU-LIg1QAFfEe_NM0DzE1UeXPcspNKWPG6i6cl7w&oe=6A498A25',
      user:'Sipho_K',
      likes:94,
      category:'Drinks',
      caption:'Premium Drinks'
    },

    {
      image:'https://scontent-jnb2-1.xx.fbcdn.net/v/t39.99422-6/735704418_1058104226897205_4529927079818959160_n.png?stp=dst-jpg_tt6&cstp=mx1066x1600&ctp=s590x590&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGXlbEoGQQiUQ8TT63FgSYsQTsHhgMsyaBBOweGAyzJoAC4D9S7OfA2BrremB6vjs2TgvZ2aL2y0MZQQ4Ir2MYX&_nc_ohc=jZ3LoOf6RCIQ7kNvwFAC-hA&_nc_oc=AdpiTEm0JwgRbiBsKH3WyG_KXK_N5ne_s9FJBdt7mTSDKUTRFaLgk9r8cKQDEj7N83A&_nc_zt=14&_nc_ht=scontent-jnb2-1.xx&_nc_gid=YDovAvEJbM_fi0xITXl9lQ&_nc_ss=7b2a8&oh=00_AQCzKcRKvNvdjENkX8eaAb-bOlT4WSW42M1_3jcFL1PueQ&oe=6A4989E4',
      user:'Thabo_12',
      likes:156,
      category:'Braai',
      caption:'Braai Time'
    },
     {
      image:'https://scontent-jnb2-1.xx.fbcdn.net/v/t39.99422-6/731067957_1333905165387290_8849823951236827103_n.png?stp=dst-jpg_tt6&cstp=mx1066x1600&ctp=s590x590&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFAQ3VDMXeqH7pdBE702k2MlMChDTtP3aKUwKENO0_dopOfiZq_3bwNQm2_rjpus1m1nD9CsDhCODznRgYewdtf&_nc_ohc=3d0khXTPRncQ7kNvwEQlp1W&_nc_oc=Adp6w6KfjTM_Nk7hrWCWLzQ-CDpGt4bcrWG3FtLzIBjfAdbD9GbW-IuraUpJ55q3I-E&_nc_zt=14&_nc_ht=scontent-jnb2-1.xx&_nc_gid=YDovAvEJbM_fi0xITXl9lQ&_nc_ss=7b2a8&oh=00_AQB87VOKMhteivOJ-b6Gp8GRBvUlI33t8kL7xyIX-QleDQ&oe=6A49A30A',
      user:'Nomsa_B',
      likes:87,
      category:'Drinks',
      caption:'Cocktails'
    },

    {
      image:'https://scontent-jnb2-1.xx.fbcdn.net/v/t39.99422-6/735786533_1336659494622928_7207852695010919679_n.png?stp=dst-jpg_tt6&cstp=mx1066x1600&ctp=s590x590&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGMgEYZ5zUEwmJUIwsBD1Do6F_7F4AQ-bvoX_sXgBD5u45oXMmbKc73ERzcTj253MeLznaGDyLyUpreNXZys6Ox&_nc_ohc=jgxs_t21g6kQ7kNvwG7pW_y&_nc_oc=AdrHeZjI8r_y7g-gwjzmXXg4uY3o8sqdVjYJPwzXrClorJcfA2pOs93YBlYyzVb3vws&_nc_zt=14&_nc_ht=scontent-jnb2-1.xx&_nc_gid=YDovAvEJbM_fi0xITXl9lQ&_nc_ss=7b2a8&oh=00_AQBzy2TNZlRozTTu0zn1Rp3hpeojGHIrrEKYA-MNRqkl0g&oe=6A499CAB',
      user:'BraaiKing',
      likes:102,
      category:'Braai',
      caption:'Meat Lovers'
    },

    {
      image:'https://scontent-jnb2-1.xx.fbcdn.net/v/t39.99422-6/735133922_1000011082848646_6044800253833736565_n.png?stp=dst-jpg_tt6&cstp=mx1066x1600&ctp=s1066x1600&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHdmZuflYbVdsWDd7Yym3JDHuNOQZ8YPsUe405Bnxg-xd7mxp35QnRN7ALe4gYfhjEW6zFcBd7BcrBFG5xbGmYO&_nc_ohc=zu7MBaWN_2gQ7kNvwHROMnh&_nc_oc=AdraLdhf-ASJzOoC0rKxJmK3J3eXejUJX462neH15bvs_Ydzpe9-BagWXL2zLe8JvmA&_nc_zt=14&_nc_ht=scontent-jnb2-1.xx&_nc_gid=FXXXNOW0z4ejPRWc_lynQw&_nc_ss=7b2a8&oh=00_AQAZcqeqdDxFSfvpUESxC-uVsBvIjGRNG_e5IZtxM46iDg&oe=6A499DA5',
      user:'Zanelee',
      likes:77,
      category:'Parties',
      caption:'Saturday Night'
    },

    {
      image:'https://scontent-jnb2-1.xx.fbcdn.net/v/t39.99422-6/734101294_1576557224034419_3699701536436509640_n.png?stp=dst-jpg_tt6&cstp=mx1066x1600&ctp=s1066x1600&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGAqGepdPOJJLhjHpIM_uUeBM1HQCzzeaMEzUdALPN5o65VkLeNrgLxDFiUZI8JJNwbGiSwC1v71_pQN42qM3_N&_nc_ohc=4VH4MvY1cwAQ7kNvwGijLZS&_nc_oc=AdrCeDYub4SOQWFlnrnF2_iPKHHy5CW6EipEte06Ir4Nvk3ARu9_19bwg_aY20dJLO0&_nc_zt=14&_nc_ht=scontent-jnb2-1.xx&_nc_gid=mFr6tWb336aTyrqrg2JLgA&_nc_ss=7b2a8&oh=00_AQDpgjqSEMoQ9cing3quhn79sQFLdK781BFBFBliLAyyTQ&oe=6A49A33E',
      user:'Paballo',
      likes:91,
      category:'Parties',
      caption:'Friends'
    },

    {
      image:'https://scontent-jnb2-1.xx.fbcdn.net/v/t39.99422-6/735134118_1576406583879224_4705708386206787397_n.png?stp=dst-jpg_tt6&cstp=mx1066x1600&ctp=s1066x1600&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHcMTkVw4wxJbIfxKHdPQgBVVrnHf9OY9xVWucd_05j3FlPMuF85PLKxelYpEEx5lpZqvTLtw69LFxt7YlUaYpB&_nc_ohc=pEd2BXRAseoQ7kNvwE2PtdY&_nc_oc=AdqfylvwetRt94Thz309y0V54u4I14X9oa60EiPGX4r2JfNJ4Bh2ZOhQB_StB7HCLpg&_nc_zt=14&_nc_ht=scontent-jnb2-1.xx&_nc_gid=V-URvetcu9kd-s5BN5yy-Q&_nc_ss=7b2a8&oh=00_AQAwcZhdQ_h9Znx5e4Djz0ykBSh7q3M9aKyMG8RFAUupcQ&oe=6A499E1E',
      user:'Kamo_',
      likes:68,
      category:'Drinks',
      caption:'VIP Lounge'
    },
     {
      image:'https://scontent-jnb2-1.xx.fbcdn.net/v/t39.99422-6/734988996_992356863565467_5694465114856683996_n.png?stp=dst-jpg_tt6&cstp=mx1600x1066&ctp=s1600x1066&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGJSRHS_9sI6Rb8YqS1V9vFHBzOvvMfndscHM6-8x-d21MG5HXhzSgcsunGys-9HESKq6NspLkIHIj1oXDQeon5&_nc_ohc=YpseZdKlbmUQ7kNvwEXeypT&_nc_oc=AdpZWkWJYhv6SvXBi2pZF-LPzuD7BU1dBNgJkTF0C-bTd7VYV7xO12kLDXDPI7m2DqM&_nc_zt=14&_nc_ht=scontent-jnb2-1.xx&_nc_gid=09-AtCdDF1aBTaiMDIiW5A&_nc_ss=7b2a8&oh=00_AQAs4EW_aBzaMV0CGxpP4FfkR-g107kBVAV1M8_k2MiVUg&oe=6A49B0B6',
      user:'Lerato M.',
      likes:64,
      category:'Food',
      caption:'Dessert'
    },

    {
      image:'https://scontent-jnb2-1.xx.fbcdn.net/v/t39.99422-6/735377058_1411634944261660_5916930731390779629_n.png?stp=dst-jpg_tt6&cstp=mx1066x1600&ctp=s1066x1600&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGbmcX7d6YgdZxklbzDKl84GHDrK7TwAi0YcOsrtPACLXGNQ4QJjmGXMgYD9wZjmoE5HELVtMuioX-gHaYGXMLm&_nc_ohc=ssosu11p5b0Q7kNvwFPJQZB&_nc_oc=Adrr-HugwM0R8W_tQffXlQAndSSixJwl5wWOv6LTy66j9WUrkCEPgP1cpHVXceogrcQ&_nc_zt=14&_nc_ht=scontent-jnb2-1.xx&_nc_gid=pJepSBxMA16nlEfoeUYKUg&_nc_ss=7b2a8&oh=00_AQCNIKeItJzk5iZwSA5rtkNLUUOrztnVhhZRvLra6i4JvQ&oe=6A498EE5',
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
