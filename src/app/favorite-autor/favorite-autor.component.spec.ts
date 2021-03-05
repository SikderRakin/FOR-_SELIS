import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteAutorComponent } from './favorite-autor.component';

describe('FavoriteAutorComponent', () => {
  let component: FavoriteAutorComponent;
  let fixture: ComponentFixture<FavoriteAutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteAutorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
