import { Component } from '@angular/core';
import { OnDutyService } from 'src/app/services/on-duty-service/on-duty.service';

@Component({
  selector: 'app-on-duty',
  templateUrl: './on-duty.component.html',
  styleUrls: ['./on-duty.component.scss'],
})
export class OnDutyComponent {
  constructor(private onDutyService: OnDutyService) {}

  onDutyAvailable: number  = 0;
  onDutyTotal: number  = 3;

  persons = this.onDutyService.getPersons();
}
