import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerimageComponent } from './partnerimage.component';

describe('PartnerimageComponent', () => {
  let component: PartnerimageComponent;
  let fixture: ComponentFixture<PartnerimageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartnerimageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PartnerimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
