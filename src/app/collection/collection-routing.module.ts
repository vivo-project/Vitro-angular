import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestApiResolver } from '../core/rest-api/rest-api.resolver';
import { CollectionComponent } from './collection.component';
import { CollectionResolver } from './collection.resolver';
import { IndividualFormComponent } from './individual-form/individual-form.component';
import { IndividualListComponent } from './individual-list/individual-list.component';
import { IndividualViewComponent } from './individual-view/individual-view.component';
import { ResourceResolver } from './resource.resolver';

const routes: Routes = [
  {
    path: '',
    component: CollectionComponent,
    children: [
      {
        path: ':collection',
        resolve: {
          api: RestApiResolver,
          resources: CollectionResolver,
        },
        component: IndividualListComponent,
      },
      {
        path: ':collection/create',
        resolve: {
          api: RestApiResolver,
        },
        component: IndividualFormComponent,
      },
      {
        path: ':collection/:resource',
        resolve: {
          api: RestApiResolver,
          resource: ResourceResolver,
        },
        component: IndividualViewComponent,
      },
      {
        path: ':collection/:resource/update',
        resolve: {
          api: RestApiResolver,
          resource: ResourceResolver,
        },
        component: IndividualFormComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CollectionRoutingModule {}
