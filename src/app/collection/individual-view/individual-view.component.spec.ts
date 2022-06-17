import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { getTranslocoModule } from '../../core/transloco-testing.module';
import { SharedModule } from '../../shared/shared.module';
import { IndividualViewComponent } from './individual-view.component';

describe('IndividualViewComponent', () => {
  let component: IndividualViewComponent;
  let fixture: ComponentFixture<IndividualViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndividualViewComponent],
      imports: [RouterTestingModule, SharedModule, getTranslocoModule()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
