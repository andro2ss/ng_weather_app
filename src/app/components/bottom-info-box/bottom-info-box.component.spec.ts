import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomInfoBoxComponent } from './bottom-info-box.component';

describe('BottomInfoBoxComponent', () => {
  let component: BottomInfoBoxComponent;
  let fixture: ComponentFixture<BottomInfoBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomInfoBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomInfoBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
