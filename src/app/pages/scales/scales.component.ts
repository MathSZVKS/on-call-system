import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ScalesServiceService } from 'src/app/services/scales-service/scales-service.service';

@Component({
  selector: 'scales',
  templateUrl: './scales.component.html',
  styleUrls: ['./scales.component.scss'],
})
export class scalesComponent {
  constructor(private router: Router, private scalesServiceService: ScalesServiceService) {}

  periods: string[] = ['MANHÃ', 'TARDE', 'NOITE'];
  weekDays: string[] = ['SEGUNDA', 'TERÇA', 'QUARTA', 'QUINTA', 'SEXTA', 'SÁBADO', 'DOMINGO'];
  month = 'JANEIRO';
  clinic = 'Hospital Unimed - P.A';

  hoursPeriod = this.scalesServiceService.getHoursPeriod();
  weekDaysWithNumber = this.scalesServiceService.getWeekDaysWithNumber();
  scales = this.scalesServiceService.getScales();

  ngOnInit() {}

  redirect(page: string) {
    this.router.navigate([`/${page}`]);
  }
}
