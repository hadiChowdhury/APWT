import { Injectable } from "@nestjs/common";

@Injectable()

export class AdminService{


    getAll(){
        return [1, 2, 3,4,"this is from service"];
    }
 }