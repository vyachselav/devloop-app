import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let goods = [
      {id: 10, name: 'EGLO EG-82813', type: 'torchere', image: '../../assets/img/1.png',
        info: 'Sample text for id=10', price: 50, presence: 5},

      {id: 20, name: 'Brille TP-004', type: 'table lamp', image: '../../assets/img/2.png',
        info: 'Sample text for id=20', price: 20, presence: 10},

      {id: 30, name: 'Fenix LD02', type: 'flashlight', image: '../../assets/img/3.png',
        info: 'Sample text for id=30', price: 5, presence: 20}
    ];
    return {goods};
  }
};
