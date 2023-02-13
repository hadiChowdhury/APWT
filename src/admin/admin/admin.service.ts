import { Body, Injectable } from "@nestjs/common";
import { AdminForm } from "./adminform.dto";

@Injectable()

export class AdminService{

    getAll(){
        return [1, 2, 3,4,"this is from service"];
    }
    createUser(@Body() createUser:AdminForm ){
        return{data: createUser};
     }
 }