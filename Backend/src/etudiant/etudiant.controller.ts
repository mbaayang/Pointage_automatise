import { Controller, Get, Post, Body, Param, Put, UseInterceptors, UploadedFile } from '@nestjs/common';
import { EtudiantService } from './etudiant.service';
import { CreateEtudiantDto } from './dto/create-etudiant.dto';
import { UpdateEtudiantDto } from './dto/update-etudiant.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('etudiant')
export class EtudiantController {
  constructor(private readonly etudiantService: EtudiantService) {}

  @Post()
  create(@Body() createEtudiantDto: CreateEtudiantDto) {
    return this.etudiantService.create(createEtudiantDto)
  }

  @Get()
  findAll() {
    return this.etudiantService.findAll();
  }

/*   @Get(':id')
  findOne(@Param('id') id: number) {
    return this.etudiantService.findOne(id);
  } */

  @Put(':id')
  update(@Param('id') id: number, 
  @Body() updateEtudiantDto: UpdateEtudiantDto) {
    return this.etudiantService.update(id, updateEtudiantDto);
  }
}
