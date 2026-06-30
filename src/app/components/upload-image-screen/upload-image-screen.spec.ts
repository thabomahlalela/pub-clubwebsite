import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadImageScreen } from './upload-image-screen';

describe('UploadImageScreen', () => {
  let component: UploadImageScreen;
  let fixture: ComponentFixture<UploadImageScreen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadImageScreen]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadImageScreen);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
