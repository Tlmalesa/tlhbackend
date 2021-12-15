
import { Controller ,Post,Body, ValidationPipe} from '@nestjs/common';
import { MessageCredentialsDto } from 'src/dto/message-credentials.dto';
import { MessageInterface } from 'src/interfaces/message.interface';
import { ContactFormService } from './contact-us.service';
@Controller('contact-us')
export class ContactUsController {
    constructor(private contactUservice:ContactFormService){}
    @Post()
    create(@Body(ValidationPipe) messageDto: MessageCredentialsDto): Promise<MessageInterface> {
        return this.contactUservice.sendDetails(messageDto);
    }
}
