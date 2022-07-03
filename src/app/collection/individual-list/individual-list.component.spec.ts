import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { getTranslocoModule } from '../../core/transloco-testing.module';
import { SharedModule } from '../../shared/shared.module';
import { IndividualListComponent } from './individual-list.component';

describe('IndividualListComponent', () => {
  let component: IndividualListComponent;
  let fixture: ComponentFixture<IndividualListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndividualListComponent],
      imports: [RouterTestingModule, SharedModule, getTranslocoModule()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
