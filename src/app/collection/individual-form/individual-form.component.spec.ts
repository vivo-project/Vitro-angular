import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { getTranslocoModule } from '../../core/transloco-testing.module';
import { SharedModule } from '../../shared/shared.module';
import { IndividualFormComponent } from './individual-form.component';

describe('IndividualFormComponent', () => {
  let component: IndividualFormComponent;
  let fixture: ComponentFixture<IndividualFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndividualFormComponent],
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule,
        RouterTestingModule,
        SharedModule,
        getTranslocoModule(),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
