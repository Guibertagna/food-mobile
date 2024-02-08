import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SerchPage } from './serch.page';

describe('SerchPage', () => {
  let component: SerchPage;
  let fixture: ComponentFixture<SerchPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SerchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
