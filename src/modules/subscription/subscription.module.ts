import { Module } from '@nestjs/common';
import { SubscriptionController } from './subscription.controller';
import { SubscriptionService } from './subscription.service';
import { StripeModule } from '@golevelup/nestjs-stripe';
import {ConfigService,ConfigModule} from '@nestjs/config'
import { SubscriptionWebhook } from './subscription.webhook';

@Module({
  imports: [
    StripeModule.forRootAsync(StripeModule, {
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) =>

       configService.get("STRIPE_CONFIG")
      ,
      inject: [ConfigService],
    }),
  ],
  controllers: [SubscriptionController],
  providers: [SubscriptionService,SubscriptionWebhook],
})

export class SubscriptionModule {}


