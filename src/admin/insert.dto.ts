
import {  IsInt, IsNotEmpty, IsString, IsStrongPassword, Length } from "class-validator";


export class Insert{
    @IsNotEmpty({message: 'Name can not be empty'})
    name: string;
    @IsInt({message:'Age must be an Integer value'})
    age: number;
    @IsString()
    address: string;
    @IsNotEmpty({message: 'Username can not be empty'})
    username: string;
    @IsNotEmpty()
    @Length(3,20, {message: 'Password must be in between 3 to 6 digits'})
    @IsStrongPassword()
     password: string;
    
    

   
}