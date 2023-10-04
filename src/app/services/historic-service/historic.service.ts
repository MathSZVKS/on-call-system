import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoricService {

  constructor() { }

  getHistoric() {
    let historic = [
      {
        photo: 'https://static.wixstatic.com/media/c09d77_6b7d5cbf6b1b43b787eda62222a03216~mv2.jpg/v1/fill/w_640,h_426,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c09d77_6b7d5cbf6b1b43b787eda62222a03216~mv2.jpg',
        name: 'Ronnie Radke',
        startPeriod: '6h 00m',
        endPeriod: '9h 00m',
        enter: '9h 00m',
        exit: '6h 00m',
        founds: '0h 00m',
        resume: 'Hora extra',
        stats: 'CONCLUÍDO',
      },
      {
        photo: 'https://uploads.metropoles.com/wp-content/uploads/2023/03/07134105/MC-Daniel.jpg',
        name: 'MC Daniel',
        startPeriod: '6h 00m',
        endPeriod: '9h 00m',
        enter: '9h 00m',
        exit: '6h 00m',
        founds: '0h 00m',
        resume: 'Hora extra',
        stats: 'CHECADO',
      },
      {
        photo: 'https://i.discogs.com/WrKaLfBcB4UK3FWDbtCdSkKNTKr7s0Pook_ruEW5-mY/rs:fit/g:sm/q:90/h:400/w:400/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTQ5NzI5/OS0xNDkzOTQ0MjQx/LTk3MjAuanBlZw.jpeg',
        name: 'Adam Gontier',
        startPeriod: '6h 00m',
        endPeriod: '9h 00m',
        enter: '9h 00m',
        exit: '6h 00m',
        founds: '0h 00m',
        resume: 'Hora extra',
        stats: 'CHECADO',
      },
      {
        photo: 'https://clovisroman.files.wordpress.com/2021/04/tpr_dbrnr_taylor_capa.jpg',
        name: 'Taylor Monsen',
        startPeriod: '6h 00m',
        endPeriod: '9h 00m',
        enter: '9h 00m',
        exit: '6h 00m',
        founds: '0h 00m',
        resume: 'Hora extra',
        stats: 'AVISO',
      },
      {
        photo: 'https://difusora.thathi.com.br/wp-content/uploads/2018/12/01-Robert-Smith.png',
        name: 'Robert Smith',
        startPeriod: '6h 00m',
        endPeriod: '9h 00m',
        enter: '9h 00m',
        exit: '6h 00m',
        founds: '0h 00m',
        resume: 'Hora extra',
        stats: 'CONCLUÍDO',
      },
      {
        photo: 'https://revistaforum.com.br/u/fotografias/m/2015/6/3/f1280x720-10871_142546_5050.png',
        name: 'Hayley Williams',
        startPeriod: '6h 00m',
        endPeriod: '9h 00m',
        enter: '9h 00m',
        exit: '6h 00m',
        founds: '0h 00m',
        resume: 'Hora extra',
        stats: 'PENDENTE',
      },
      {
        photo: 'https://roadiecrew.com/wp-content/uploads/avenged-sevenfold-2.jpg',
        name: 'M. Shadows',
        startPeriod: '6h 00m',
        endPeriod: '9h 00m',
        enter: '9h 00m',
        exit: '6h 00m',
        founds: '0h 00m',
        resume: 'Hora extra',
        stats: 'CHECADO',
      },
      {
        photo: 'https://uploads.spiritfanfiction.com/historias/capas/201503/fanfiction-avenged-sevenfold-i-hate-synyster-gates-my-daddy-3227702,040320152216.jpg',
        name: 'Synyster Gates',
        startPeriod: '6h 00m',
        endPeriod: '9h 00m',
        enter: '9h 00m',
        exit: '6h 00m',
        founds: '0h 00m',
        resume: 'Hora extra',
        stats: 'CHECADO',
      },
      {
        photo: 'https://cdn.mos.cms.futurecdn.net/MoAJarTehLbzxAcBxLdjX3.jpg',
        name: 'The Rev',
        startPeriod: '6h 00m',
        endPeriod: '9h 00m',
        enter: '9h 00m',
        exit: '6h 00m',
        founds: '0h 00m',
        resume: 'Hora extra',
        stats: 'CONCLUÍDO',
      },
      {
        photo: 'https://universoe.files.wordpress.com/2013/08/alex-band.jpg',
        name: 'Alex Band',
        startPeriod: '6h 00m',
        endPeriod: '9h 00m',
        enter: '9h 00m',
        exit: '6h 00m',
        founds: '0h 00m',
        resume: 'Hora extra',
        stats: 'PENDENTE',
      }
    ]

    return historic;
  }
}
