import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceholderComponentComponent } from './placeholder-component.component';

describe('PlaceholderComponentComponent', () => {
  let component: PlaceholderComponentComponent;
  let fixture: ComponentFixture<PlaceholderComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaceholderComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlaceholderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
