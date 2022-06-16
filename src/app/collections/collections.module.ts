import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from '../shared/shared.module';
import { CollectionComponent } from './collection/collection.component';
import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsComponent } from './collections.component';
import { IndividualFormComponent } from './individual-form/individual-form.component';
import { IndividualComponent } from './individual/individual.component';

@NgModule({
  declarations: [
    CollectionsComponent,
    CollectionComponent,
    IndividualComponent,
    IndividualFormComponent,
  ],
  imports: [
    CollectionsRoutingModule,
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
export class CollectionsModule {}
