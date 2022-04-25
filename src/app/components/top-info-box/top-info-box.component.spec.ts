import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopInfoBoxComponent } from './top-info-box.component';

describe('TopInfoBoxComponent', () => {
  let component: TopInfoBoxComponent;
  let fixture: ComponentFixture<TopInfoBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopInfoBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopInfoBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
