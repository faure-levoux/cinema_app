import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesSeen } from './movies-seen';

describe('MoviesSeen', () => {
  let component: MoviesSeen;
  let fixture: ComponentFixture<MoviesSeen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoviesSeen],
    }).compileComponents();

    fixture = TestBed.createComponent(MoviesSeen);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
