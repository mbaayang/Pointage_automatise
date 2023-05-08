import { CreateEtudiantDto } from './dto/create-etudiant.dto';
import { UpdateEtudiantDto } from './dto/update-etudiant.dto';
import { Etudiant } from './entities/etudiant.entity';
import { Repository } from 'typeorm';
export declare class EtudiantService {
    private etudiantRepository;
    constructor(etudiantRepository: Repository<Etudiant>);
    checkEmailExists(email: string): Promise<boolean>;
    create(createEtudiantDto: CreateEtudiantDto): Promise<Etudiant>;
    findAll(): Promise<Etudiant[]>;
    findOne(id: number): Promise<Etudiant>;
    update(id: number, updateEtudiantDto: UpdateEtudiantDto): Promise<import("typeorm").UpdateResult>;
}
