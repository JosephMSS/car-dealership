import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
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
    findOne(@Param('id', ParseIntPipe) id: number) {
        const car = this.carsService.findOne(id) || 'not found'
        return car
    }
}
