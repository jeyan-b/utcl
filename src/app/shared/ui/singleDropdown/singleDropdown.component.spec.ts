import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDialogComponent } from './singleDropdown.component';

describe('MatDialogComponent', () => {
  let component: MatDialogComponent;
  let fixture: ComponentFixture<MatDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MatDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
