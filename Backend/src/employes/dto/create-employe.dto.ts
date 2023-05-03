import { IsBoolean, IsString } from 'class-validator';

export class CreateEmployeDto {
    id_employe: number;

    @IsString()
    prenom: string;

    @IsString()
    nom: string;

    @IsString()
    email: string;

    @IsString()
    mot_de_passe: string;

    @IsString()
    matricule: string;

    @IsString()
    role: string;

    @IsBoolean()
    etat: boolean;
}
