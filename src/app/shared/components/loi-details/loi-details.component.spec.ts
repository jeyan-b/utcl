import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoiDetailsComponent } from './loi-details.component';

describe('LoiDetailsComponent', () => {
  let component: LoiDetailsComponent;
  let fixture: ComponentFixture<LoiDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoiDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoiDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
