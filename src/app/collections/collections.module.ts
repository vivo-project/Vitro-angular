import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from '../shared/shared.module';
import { CollectionComponent } from './collection/collection.component';
import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsComponent } from './collections.component';
import { IndividualComponent } from './individual/individual.component';

@NgModule({
  declarations: [
    CollectionsComponent,
    CollectionComponent,
    IndividualComponent,
  ],
  imports: [
    CollectionsRoutingModule,
    SharedModule,
    MatTableModule,
    MatCardModule,
  ],
})
export class CollectionsModule {}
