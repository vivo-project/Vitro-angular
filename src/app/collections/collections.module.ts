import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { SharedModule } from '../shared/shared.module';
import { CollectionComponent } from './collection/collection.component';
import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsComponent } from './collections.component';

@NgModule({
  declarations: [CollectionsComponent, CollectionComponent],
  imports: [CollectionsRoutingModule, SharedModule, MatExpansionModule],
})
export class CollectionsModule {}
