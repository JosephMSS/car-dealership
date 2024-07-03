import { Injectable } from '@nestjs/common';
export interface Car {
    id: number;
    brand: string;
    model: string
}
@Injectable()
export class CarsService {

    private cars: Car[] = [
        { "id": 1, "brand": "Toyota", "model": "Camry" },
        { "id": 2, "brand": "Honda", "model": "Civic" },
        { "id": 3, "brand": "Ford", "model": "Mustang" }
    ]

    find() {
        return this.cars
    }
    findOne(id: number) {
        const car = this.cars.find((car) => {

            return car.id === id
        })
        return car
    }
}
