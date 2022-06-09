import { HttpClientModule } from '@angular/common/http';
import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf,
} from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { metaReducers, reducers } from './reducers';
import { RestDocsEffects } from './rest-docs/rest-docs.effects';
import * as fromRestDocs from './rest-docs/rest-docs.reducer';
import { TranslocoRootModule } from './transloco-root.module';

const MODULES: any[] = [
  EffectsModule.forRoot([RestDocsEffects]),
  HttpClientModule,
  StoreModule.forRoot(reducers, {
    metaReducers,
  }),
  StoreModule.forFeature(fromRestDocs.restDocsFeatureKey, fromRestDocs.reducer),
  StoreRouterConnectingModule.forRoot(),
  StoreDevtoolsModule.instrument({
    maxAge: 25,
    logOnly: environment.production,
  }),
  TranslocoRootModule,
];

const COMPONENTS: any[] = [];

const PROVIDERS: any[] = [];

@NgModule({
  imports: [...MODULES],
  exports: [...COMPONENTS],
  declarations: [...COMPONENTS],
  providers: [...PROVIDERS],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [...PROVIDERS],
    };
  }

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only'
      );
    }
  }
}
