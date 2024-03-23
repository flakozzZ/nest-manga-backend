import {NestFactory} from "@nestjs/core";
import {AppModule} from "@/app.module";
import * as process from "process";
import sequelize from "sequelize";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";


const start = async () => {
    const PORT = process.env.PORT;
    const app = await NestFactory.create(AppModule)

    const config = new DocumentBuilder()
        .setTitle("Nest Backend")
        .setDescription("Manga Backend")
        .setVersion('1.0.0')
        .addTag("Abay Kossayev")
        .build()

    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('/api/docs', app, document)


    await app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))
}


start()
