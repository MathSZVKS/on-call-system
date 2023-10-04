import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmailValidatorDirective } from '../core/commons/validators/email-validator.directive';
import { ComponentsModule } from '../components/components.module';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { DataModule } from '../data/data.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';
import { PeriodStopoversComponent } from './period-stopovers/period-stopovers.component';
import { scalesComponent } from './scales/scales.component';
import { NegotiationsComponent } from './negotiations/negotiations.component';
import { OnDutyComponent } from './on-duty/on-duty.component';
import { MatInputModule } from '@angular/material/input';
import { HistoricComponent } from './historic/historic.component';
import { CastComponent } from './cast/cast.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    ReactiveFormsModule,
    ComponentsModule,
    MatSelectModule,
    FormsModule,
    MatSlideToggleModule,
    MatIconModule,
    DataModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  declarations: [EmailValidatorDirective, scalesComponent, PeriodStopoversComponent, NegotiationsComponent, OnDutyComponent, HistoricComponent, CastComponent],
  exports: [],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}
  ]
})
export class PagesModule {}
