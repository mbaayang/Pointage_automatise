import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";
import { EmployesModule } from './employes/employes.module';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConnexionModule } from "./connexion/connexion.module";
import { Employes } from "./employes/entities/employe.entity";
import { EtudiantModule } from './etudiant/etudiant.module';
import { Etudiant } from './typeorm/entities/Etudiant';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "",
      database: "Pointage",
      entities: [Employes, Etudiant],
      synchronize: false,
    }),
    EmployesModule,
    EtudiantModule,
    ConnexionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
