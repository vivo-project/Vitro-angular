import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestApiResolver } from '../core/rest-api/rest-api.resolver';
import { CollectionComponent } from './collection/collection.component';
import { CollectionResolver } from './collection/collection.resolver';
import { CollectionsComponent } from './collections.component';
import { IndividualComponent } from './individual/individual.component';
import { IndividualResolver } from './individual/individual.resolver';

const routes: Routes = [
  {
    path: '',
    component: CollectionsComponent,
    children: [
      {
        path: ':collection',
        resolve: {
          api: RestApiResolver,
          collection: CollectionResolver,
        },
        component: CollectionComponent,
      },
      {
        path: ':collection/:resource',
        resolve: {
          api: RestApiResolver,
          individual: IndividualResolver,
        },
        component: IndividualComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CollectionsRoutingModule {}
