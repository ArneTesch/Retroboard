import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {KeyValuePipe} from './pipes/key-value.pipe';

const angularModules = [
  CommonModule,
];

const components = [];

const pipes = [
];


@NgModule({
  imports: [
    ...angularModules,
  ],
  declarations: [
    ...pipes,
  ],
  exports: [
    ...pipes,
  ],
})
export class SharedModule {
  static forRoot() {
    return {
      ngModule: SharedModule,
      providers: [],
    };
  }
}
