import { Controller, Get } from '@nestjs/common';

@Controller('admin')
export class AdminController {
    
    @Get('/')
    getAll(){
        return [1, 2, 3,4];
    }
}
