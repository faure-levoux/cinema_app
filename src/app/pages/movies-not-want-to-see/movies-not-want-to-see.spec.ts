import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesNotWantToSee } from './movies-not-want-to-see';

describe('MoviesNotWantToSee', () => {
  let component: MoviesNotWantToSee;
  let fixture: ComponentFixture<MoviesNotWantToSee>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoviesNotWantToSee],
    }).compileComponents();

    fixture = TestBed.createComponent(MoviesNotWantToSee);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
