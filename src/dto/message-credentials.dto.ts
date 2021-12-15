import { IsEmail, IsNotEmpty, IsString,IsNumber} from 'class-validator';


export class MessageCredentialsDto {
    id:string;

  @IsString()
  @IsNotEmpty()
  firstName: string;

 @IsNumber()
  @IsNotEmpty()
  cellNumber: string;

  @IsString()
  @IsEmail()
  username: string;
  
  @IsString()
  @IsNotEmpty()
  message: string;
}