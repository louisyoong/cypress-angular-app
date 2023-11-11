import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickComponent } from './click.component';

describe('ClickComponent', () => {
  let component: ClickComponent;
  let fixture: ComponentFixture<ClickComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClickComponent]
    });
    fixture = TestBed.createComponent(ClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
