import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensagensServiceService {

  constructor() { }

  getMensages() {
    let mensages = [
      {
        photo: 'https://m.media-amazon.com/images/I/8140o4U7CXL._AC_UF1000,1000_QL80_.jpg',
        name: 'Matheus Sizervinks',
        date: '24/05 - 18:30',
        messageCount: 3,
        lastMessage: 'Fui eu quem fiz todo o Frontend do Oneplantão :D',
      },
      {
        photo: 'https://i.ytimg.com/vi/HjXAK4DqlTc/maxresdefault.jpg',
        name: 'Iuri de Oliveira',
        date: '24/06 - 07:00',
        messageCount: 1,
        lastMessage: 'Meu nome é Iuri e eu ajudei na prototipação do Frontend',
      },
      {
        photo: 'https://pm1.aminoapps.com/7263/10a3723f5a9a33ff4bbbe09ca8256f08ffc6664er1-1364-768v2_00.jpg',
        name: 'Nicolas Vieira',
        date: '12/07 - 17:40',
        messageCount: 1,
        lastMessage: 'Fui eu quem fiz todo o Backend :O',
      },
      {
        photo: 'https://i.ytimg.com/vi/KD6m6QaBGmg/maxresdefault.jpg',
        name: 'Wallace Servato',
        date: '22/05 - 18:30',
        messageCount: 1,
        lastMessage: 'Eu fiz a integração de Front e Back :O',
      },

    ]

    return mensages;
  }
}
