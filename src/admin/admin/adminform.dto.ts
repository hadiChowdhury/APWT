import { IsNotEmpty, Length } from "class-validator";


export class AdminForm{
    @IsNotEmpty({message: 'This field can not be empty'})
    username: string;
    
    @IsNotEmpty()
    @Length(3)
    password: string;
}