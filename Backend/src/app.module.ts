import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
/* import { ConfigModule } from "@nestjs/config";
import { databaseProviders } from "./database/database.providers"; */
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConnexionModule } from "./connexion/connexion.module";
import { Employes } from "./connexion/entities/connexion.entity";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import { JwtStrategy } from "./connexion/jwtStrategy";

@Module({
  imports: [
    /* ConfigModule.forRoot({
      isGlobal: true,
    }), */
 
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "",
      database: "Pointage",
      entities: [Employes],
      synchronize: false,
    }),
    ConnexionModule,
  ],
  controllers: [AppController],
  providers: [AppService /* , ...databaseProviders */],
})
export class AppModule {}
