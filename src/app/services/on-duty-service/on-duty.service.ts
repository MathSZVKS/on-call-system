import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OnDutyService {

  constructor() { }

  getPersons() {
    let persons = [
      {
        status: 'Último plantão',
        photo:
          'https://static.wixstatic.com/media/c09d77_6b7d5cbf6b1b43b787eda62222a03216~mv2.jpg/v1/fill/w_640,h_426,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c09d77_6b7d5cbf6b1b43b787eda62222a03216~mv2.jpg',
        hour: ['Hoje, das 09:00 às 12:00'],
        name: 'Ronnie Radke',
      },
      {
        status: 'Último plantão',
        photo: 'https://uploads.metropoles.com/wp-content/uploads/2023/03/07134105/MC-Daniel.jpg',
        hour: ['Hoje, das 09:00 às 12:00'],
        name: 'MC Daniel',
      },
      {
        status: 'Último plantão',
        photo:
          'https://i.discogs.com/WrKaLfBcB4UK3FWDbtCdSkKNTKr7s0Pook_ruEW5-mY/rs:fit/g:sm/q:90/h:400/w:400/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTQ5NzI5/OS0xNDkzOTQ0MjQx/LTk3MjAuanBlZw.jpeg',
        hour: ['Hoje, das 09:00 às 12:00'],
        name: 'Adam Gontier',
      },
      {
        status: 'Último plantão',
        photo: 'https://clovisroman.files.wordpress.com/2021/04/tpr_dbrnr_taylor_capa.jpg',
        hour: ['Hoje, das 09:00 às 12:00'],
        name: 'Taylor Monsen',
      },
      {
        status: 'Último plantão',
        photo: 'https://difusora.thathi.com.br/wp-content/uploads/2018/12/01-Robert-Smith.png',
        hour: ['Hoje, das 09:00 às 12:00'],
        name: 'Robert Smith',
      },
      {
        status: 'Último plantão',
        photo: 'https://revistaforum.com.br/u/fotografias/m/2015/6/3/f1280x720-10871_142546_5050.png',
        hour: ['Hoje, das 09:00 às 12:00'],
        name: 'Hayley Williams',
      },
      {
        status: 'Último plantão',
        photo: 'https://roadiecrew.com/wp-content/uploads/avenged-sevenfold-2.jpg',
        hour: ['Hoje, das 09:00 às 12:00'],
        name: 'M. Shadows',
      },
      {
        status: 'Último plantão',
        photo:
          'https://uploads.spiritfanfiction.com/historias/capas/201503/fanfiction-avenged-sevenfold-i-hate-synyster-gates-my-daddy-3227702,040320152216.jpg',
        hour: ['Hoje, das 09:00 às 12:00'],
        name: 'Synyster Gates',
      },
      {
        status: 'Último plantão',
        photo: 'https://cdn.mos.cms.futurecdn.net/MoAJarTehLbzxAcBxLdjX3.jpg',
        hour: ['Hoje, das 09:00 às 12:00'],
        name: 'The Rev',
      },
      {
        status: 'Último plantão',
        photo: 'https://universoe.files.wordpress.com/2013/08/alex-band.jpg',
        hour: ['Hoje, das 09:00 às 12:00'],
        name: 'Alex Band',
      },
      {
        status: 'Último plantão',
        photo: 'https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2019/05/billie-joe-green-day-foto-2005.jpg',
        hour: ['Hoje, das 09:00 às 12:00'],
        name: 'Billie Joe',
      },
      {
        status: 'Último plantão',
        photo: 'https://i.uai.com.br/Hqz7DcAgHN85vY2CuhNYzpLKErQ=/1200x1200/smart/imgsapp2.uai.com.br/app/noticia_133890394703/2022/11/25/309114/elvis-presley-foto-reproducao_1_42872.jpg',
        hour: ['Hoje, das 09:00 às 12:00'],
        name: 'Elvis Presley',
      },
    ];

    return persons;
  }
}
