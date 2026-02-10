import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "../entity/User.js"
import { Config } from "./index.js"
 

export const AppDataSource = new DataSource({
    type: "postgres",
    host: (Config.Db_HOST)||"",
    port: Number(Config.DB_PORT),
    username: String(Config.DB_USERNAME),
    password: String(Config.DB_PASSWORD),
    database: String(Config.DB_NAME),
    synchronize: false,  // ⚠️ NEVER true in production
    logging: true,
    entities: [User], 
    migrations: ["src/migrations/*.ts"],
    subscribers: [],
})
