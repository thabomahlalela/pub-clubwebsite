import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosScreen } from './photos-screen';

describe('PhotosScreen', () => {
  let component: PhotosScreen;
  let fixture: ComponentFixture<PhotosScreen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotosScreen]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotosScreen);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
