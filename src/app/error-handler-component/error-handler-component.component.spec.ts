import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorHandlerComponentComponent } from './error-handler-component.component';

describe('ErrorHandlerComponentComponent', () => {
  let component: ErrorHandlerComponentComponent;
  let fixture: ComponentFixture<ErrorHandlerComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorHandlerComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ErrorHandlerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
