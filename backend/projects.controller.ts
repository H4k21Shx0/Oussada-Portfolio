
// This is the NestJS Controller for retrieving projects
// Place this in your NestJS project, e.g., src/projects/projects.controller.ts

import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; // Assuming you have a Prisma module
// Fix: Import the Project interface from our shared types definition as it is not available in @prisma/client
import { Project } from '../types';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async findAll(): Promise<Project[]> {
    // Fix: Await the query and cast the result to our local Project interface
    const projects = await this.prisma.project.findMany({
      orderBy: {
        createdAt: 'desc', // Or custom order field
      },
    });
    return projects as unknown as Project[];
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Project> {
    const project = await this.prisma.project.findUnique({
      where: { id },
    });
    
    if (!project) {
      throw new NotFoundException(`Project with ID ${id} not found`);
    }

    // Fix: Explicitly cast the returned database model to our Project interface
    return project as unknown as Project;
  }
}
