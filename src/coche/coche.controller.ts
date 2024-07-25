import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CocheService } from './coche.service';
import { CreateCocheDto } from './dto/create-coche.dto';
import { UpdateCocheDto } from './dto/update-coche.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Coche')
@Controller('coche')
export class CocheController {
  constructor(private readonly cocheService: CocheService) {}

  @Post()
  create(@Body() createCocheDto: CreateCocheDto) {
    return this.cocheService.create(createCocheDto);
  }

  @Get()
  findAll() {
    return this.cocheService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cocheService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCocheDto: UpdateCocheDto) {
    return this.cocheService.update(+id, updateCocheDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cocheService.remove(+id);
  }
}
