import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieInfoPage } from './movie-info-page';

describe('MovieInfoPage', () => {
  let component: MovieInfoPage;
  let fixture: ComponentFixture<MovieInfoPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieInfoPage],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieInfoPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
