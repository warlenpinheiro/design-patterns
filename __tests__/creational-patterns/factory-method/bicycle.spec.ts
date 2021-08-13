import { Bicycle } from '../../../src/creational-patterns/factory-method/vehicle/bicycle';
import { Vehicle } from '../../../src/creational-patterns/factory-method/vehicle/vehicle';

describe('Bike tests', () => {
  test('Should create a bicycle successfully', () => {
    const bike = new Bicycle('Caloi');
    expect(bike).toBeInstanceOf(Vehicle);
  });
});
