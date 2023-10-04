import { Component } from '@angular/core';
import { HistoricService } from 'src/app/services/historic-service/historic.service';

@Component({
  selector: 'app-historic',
  templateUrl: './historic.component.html',
  styleUrls: ['./historic.component.scss']
})
export class HistoricComponent {

  constructor(private historicService: HistoricService) {}

  historics = this.historicService.getHistoric();

}
