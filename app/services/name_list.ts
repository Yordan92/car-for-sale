export class NameList {
  cars = [
    {
      make: 'Audi',
      models: ['q3', 'q5', 'q7']
    }, {
      make: 'Ford',
      models: ['Fiesta', 'Focus']
    }
  ];

  get() {
    return this.cars;
  }

  getCarByMake(make) {
    let models = []
    this.cars.forEach((car) => {
      if (car.make === make) {
        models = car.models;
      }
    });
    return models;
  }

  add(value) {
    this.cars.push(value);
  }
}
