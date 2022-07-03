import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  BrowserModule,
  BrowserTransferStateModule,
} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MenuComponent } from './menu/menu.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, MenuComponent],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserTransferStateModule,
    BrowserModule.withServerTransition({ appId: 'Vitro-angular' }),
    CoreModule,
    FlexLayoutModule.withConfig({
      ssrObserveBreakpoints: [],
    }),
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
