import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesListingComponent } from './courses-listing.component';

describe('CoursesListingComponent', () => {
  let component: CoursesListingComponent;
  let fixture: ComponentFixture<CoursesListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursesListingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoursesListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
