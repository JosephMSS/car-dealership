import { Controller, Get, Param } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
    constructor(
        private readonly carsService: CarsService
    ) { }
    @Get()
    findAll() {
        return this.carsService.find()
    }
    @Get(':id')
    findOne(@Param('id') id: string) {
        const index = +id
        const car = this.carsService.findOne(index) || 'not found'
        return car
    }
}
