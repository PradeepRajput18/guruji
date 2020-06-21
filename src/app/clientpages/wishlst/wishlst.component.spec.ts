import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlstComponent } from './wishlst.component';

describe('WishlstComponent', () => {
  let component: WishlstComponent;
  let fixture: ComponentFixture<WishlstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WishlstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishlstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
