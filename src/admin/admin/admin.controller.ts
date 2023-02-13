import { Body, Controller, Get, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { Insert } from '../insert.dto';
import { AdminService } from './admin.service';
import { AdminForm } from './adminform.dto';

@Controller('admin')
export class AdminController {

    constructor(private adminService: AdminService){}
    
    @Get('/all')
    getAll(){
        return this.adminService.getAll();

    }
    @Post('/create')
    @UsePipes( new ValidationPipe())
    createUser(@Body() createUser:AdminForm ){
        return{data: createUser};

     }
 
    @Put('/insert')
    @UsePipes(new ValidationPipe())
    insertUser(@Body() insertUser:Insert){
        return{data: insertUser};
    }
}
