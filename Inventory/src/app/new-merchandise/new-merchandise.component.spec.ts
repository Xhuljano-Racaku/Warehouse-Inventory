import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMerchandiseComponent } from './new-merchandise.component';

describe('NewMerchandiseComponent', () => {
  let component: NewMerchandiseComponent;
  let fixture: ComponentFixture<NewMerchandiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewMerchandiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewMerchandiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
