import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../shared/shared.module';
import { CollectionRoutingModule } from './collection-routing.module';
import { CollectionComponent } from './collection.component';
import { CollectionEffects } from './collection.effects';
import * as fromCollection from './collection.reducer';
import { IndividualFormComponent } from './individual-form/individual-form.component';
import { IndividualListComponent } from './individual-list/individual-list.component';
import { IndividualViewComponent } from './individual-view/individual-view.component';

@NgModule({
  declarations: [
    CollectionComponent,
    IndividualFormComponent,
    IndividualListComponent,
    IndividualViewComponent,
  ],
  imports: [
    CollectionRoutingModule,
    EffectsModule.forFeature([CollectionEffects]),
    StoreModule.forFeature(fromCollection.featureKey, fromCollection.reducer),
    FormsModule,
    SharedModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
})
export class CollectionModule {}
