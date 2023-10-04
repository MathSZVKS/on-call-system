import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './top-bar/topbar.component';
import { MatIconModule } from '@angular/material/icon';
import { NgChartsModule } from 'ng2-charts';
import { DataModule } from '../data/data.module';
import { SelectComponent } from './select/select.component';
import { FormsModule } from '@angular/forms';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { MatInputModule } from '@angular/material/input';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

@NgModule({
  declarations: [
    TopbarComponent,
    DatepickerComponent,
    SelectComponent,
  ],
  imports: [CommonModule, MatIconModule, DataModule, NgChartsModule, FormsModule,  MatInputModule],
  exports: [
    TopbarComponent,
    DatepickerComponent,
    SelectComponent
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}
  ]
})
export class ComponentsModule {}
