import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import {ConfigService} from "@nestjs/config"


@Controller()
export class AppController {
  constructor(private readonly appService: AppService,private configService:ConfigService) {}

  @Get()
  getHello(): string {
   console.log(this.configService.get("STRIPE_CONFIG.webhookConfig"))
    return this.appService.getHello();
  }
  

}
