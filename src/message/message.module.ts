import { Module } from '@nestjs/common';
import { MessageSchema } from 'src/schemas/message.schema';
import { ContactFormService } from 'src/contact-us/contact-us.service';
import { ContactUsController } from 'src/contact-us/contact-us.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Message', schema: MessageSchema }])],
  controllers: [ContactUsController],
  providers: [ContactFormService],
})
export class MessageModule {}