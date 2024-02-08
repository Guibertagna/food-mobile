import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccontPage } from './accont.page';

describe('AccontPage', () => {
  let component: AccontPage;
  let fixture: ComponentFixture<AccontPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AccontPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
