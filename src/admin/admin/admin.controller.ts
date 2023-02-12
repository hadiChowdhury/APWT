import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminForm } from './adminform.dto';

@Controller('admin')
export class AdminController {

    constructor(private adminService: AdminService){}
    
    @Get('/')
    getAll(){
        return this.adminService.getAll();
    }

    @Post('/create')

    @UsePipes( new ValidationPipe())
    createUser(@Body() createUser:AdminForm ){
        return{data: createUser};
    }
}
