import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { metaReducers, reducers } from '../../core/reducers';
import { getTranslocoModule } from '../../core/transloco-testing.module';
import { SharedModule } from '../../shared/shared.module';
import * as fromCollection from '../collection.reducer';
import { IndividualFormComponent } from './individual-form.component';

describe('IndividualFormComponent', () => {
  let component: IndividualFormComponent;
  let fixture: ComponentFixture<IndividualFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndividualFormComponent],
      imports: [
        ReactiveFormsModule,
        RouterTestingModule,
        SharedModule,
        StoreModule.forRoot(reducers, { metaReducers }),
        StoreModule.forFeature(
          fromCollection.featureKey,
          fromCollection.reducer,
        ),
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
