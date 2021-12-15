import { BadRequestException, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { MessageCredentialsDto} from '../dto/message-credentials.dto';
import {MessageInterface} from '../interfaces/message.interface';
import { text } from 'stream/consumers';

//nodeMailer

const nodemailer = require("nodemailer");

@Injectable()
export class ContactFormService {
    constructor(@InjectModel('Message') private readonly messageModel:Model<MessageInterface>) {}
    
    // async create(messageCtedDto: MessageCredentialsDto):Promise <MessageInterface>{
  
    //     const {firstName,username,message} = messageCtedDto;
    //     const newMessage = new this.messageModel({firstName,username,message})
    //     return await newMessage.save()
    // }
    
    // send email

    async sendDetails (messageCtedDto: MessageCredentialsDto):Promise <MessageInterface>{

        try{

            const trasport = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 587,
                secure: false,
                auth: {
                    user:'blessingmalesa@gmail.com',
                    pass :'yemhlixlpqlhheyb'
                },
            });

            const send = await trasport.sendMail({

                from: `${messageCtedDto.username}`, 
                to:"blessingmalesa@gmail.com",
                subject : " TLH Technologies",
                text : " From " + `${messageCtedDto.firstName}`,
                html: `${messageCtedDto.message}` 

            })

            const {firstName,cellNumber,username,message} = messageCtedDto;
            const newMessage = new this.messageModel({firstName,cellNumber,username,message})
            return await newMessage.save()

        }catch (error){

            throw new BadRequestException('something went wrong');

        }
        
    }
}