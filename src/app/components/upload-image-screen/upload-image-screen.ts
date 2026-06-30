import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { PhotosScreen } from '../photos-screen/photos-screen';

@Component({
  selector: 'app-upload-image-screen',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
MatButtonModule,
MatIconModule,
MatFormFieldModule,
MatInputModule,
MatSelectModule,
MatCheckboxModule,
MatDatepickerModule,
MatNativeDateModule,
ReactiveFormsModule,
FormsModule
  ],
  templateUrl: './upload-image-screen.html',
  styleUrl: './upload-image-screen.css',
})
export class UploadImageScreen {

     readonly dialogRef = inject(
    MatDialogRef<PhotosScreen>
  );

    uploadForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.uploadForm = this.fb.group({

      caption: [''],

      event: [''],

      dateTaken: [new Date()],

      location: ['Swingles Pub & Chisanyama, Orkney'],

      accepted: [true]

    });

  }


}
