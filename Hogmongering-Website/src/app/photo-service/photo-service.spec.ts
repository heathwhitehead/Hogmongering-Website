import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoService } from './photo-service';

describe('PhotoService', () => {
  let component: PhotoService;
  let fixture: ComponentFixture<PhotoService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoService],
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoService);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
