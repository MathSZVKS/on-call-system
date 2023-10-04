import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScalesServiceService {
  constructor() {}

  getHoursPeriod() {
    let hoursPeriod = {
      MANHÃ: {
        0: '06:00 - 09:00',
        1: '09:00 - 12:00',
      },
      TARDE: {
        0: '12:00 - 15:00',
        1: '15:00 - 18:00',
      },
      NOITE: {
        0: '18:00 - 21:00',
        1: '21:00 - 00:00',
      },
    };

    return hoursPeriod;
  }

  getWeekDaysWithNumber() {
    let weekDaysWithNumber: string[] = [
      '23/ SEGUNDA',
      '24/ TERÇA',
      '25/ QUARTA',
      '26/ QUINTA',
      '27/ SEXTA',
      '28/ SÁBADO',
      '29/ DOMINGO',
    ];

    return weekDaysWithNumber;
  }

  getScales() {
    let scales = [
      {
        dia: 'SEGUNDA',
        horario: ['06:00'],
        periodo: ['06:00 - 09:00'],
        paciente: 'Helena Ferraz',
      },
      {
        dia: 'DOMINGO',
        horario: ['07:00'],
        periodo: ['06:00 - 09:00'],
        paciente: 'Wallace Bertolaccini',
      },
      {
        dia: 'TERÇA',
        horario: ['08:00'],
        periodo: ['06:00 - 09:00'],
        paciente: 'Matheus Sizervinks',
      },
      {
        dia: 'QUARTA',
        horario: ['09:00'],
        periodo: ['06:00 - 09:00'],
        paciente: 'Nicolas de Paula',
      },
      {
        dia: 'TERÇA',
        horario: ['09:00'],
        periodo: ['09:00 - 12:00'],
        paciente: 'Jonas William',
      },
      {
        dia: 'SEGUNDA',
        horario: ['10:00'],
        periodo: ['09:00 - 12:00'],
        paciente: 'Murilo Winchester',
      },
      {
        dia: 'QUINTA',
        horario: ['11:00'],
        periodo: ['09:00 - 12:00'],
        paciente: 'João Paulo',
      },
      {
        dia: 'DOMINGO',
        horario: ['12:00'],
        periodo: ['09:00 - 12:00'],
        paciente: 'Maria Surdina',
      },
      {
        dia: 'SEGUNDA',
        horario: ['12:00'],
        periodo: ['12:00 - 15:00'],
        paciente: 'Irineu',
      },
      {
        dia: 'SÁBADO',
        horario: ['09:00'],
        periodo: ['09:00 - 12:00'],
        paciente: 'Marcela Munis',
      },
    ];

    return scales;
  }
}
