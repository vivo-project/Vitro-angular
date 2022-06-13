import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { TranslocoModule } from '@ngneat/transloco';

const MODULES: any[] = [
  CommonModule,
  MatDividerModule,
  MatListModule,
  MatSidenavModule,
  TranslocoModule,
];

const PIPES: any[] = [];

const COMPONENTS: any[] = [];

const DIRECTIVES: any[] = [];

const ENTRY_COMPONENTS: any[] = [];

const PROVIDERS: any[] = [];

@NgModule({
  declarations: [...PIPES, ...COMPONENTS, ...DIRECTIVES, ...ENTRY_COMPONENTS],
  exports: [...MODULES, ...PIPES, ...COMPONENTS, ...DIRECTIVES],
  imports: [...MODULES],
  providers: [...PROVIDERS],
})
export class SharedModule {}
