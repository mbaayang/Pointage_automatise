<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> c26bb86238b2ac777b068efb6ddef89d33c5e28d
import { Repository } from "typeorm";
import { CreateEmployeDto } from "./dto/create-employe.dto";
import { UpdateEmployeDto } from "./dto/update-employe.dto";
import { UpdatePasswordDto } from "./dto/updatePassword.dto";
import { Employes } from "./entities/employe.entity";
<<<<<<< HEAD
=======
/// <reference types="node" />
import { Repository } from 'typeorm';
import { CreateEmployeDto } from './dto/create-employe.dto';
import { UpdateEmployeDto } from './dto/update-employe.dto';
import { Employes } from './entities/employe.entity';
>>>>>>> eb8de19c1d32c16f0a83ffb344613fdd68d931ac
=======
>>>>>>> c26bb86238b2ac777b068efb6ddef89d33c5e28d
export declare class EmployesService {
    private employesRepository;
    constructor(employesRepository: Repository<Employes>);
    create(createEmployeDto: CreateEmployeDto): Promise<{
        prenom: string;
        nom: string;
        email: string;
        mot_de_passe: any;
        matricule: string;
        role: string;
        etat: boolean;
    } & Employes>;
    findAll(): Promise<Employes[]>;
    findOne(id: number): Promise<Employes>;
    update(id: number, updateEmployeDto: UpdateEmployeDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<void>;
    updatePassword(email: string, updatePassword: UpdatePasswordDto): Promise<any>;
}
