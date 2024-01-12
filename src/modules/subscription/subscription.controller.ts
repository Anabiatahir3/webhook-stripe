import { Controller, Post, Req,Body ,UseGuards} from '@nestjs/common';
import { Request } from 'express';
import Stripe from 'stripe';
import { CreateSubscriptionDto } from './dtos/create.subscription.dto';
import { SubscriptionService } from './subscription.service';
import { UserGuard } from './guards/user.guard';

@Controller('subscription')
export class SubscriptionController {
    constructor(private subscriptionService:SubscriptionService){}

    @Post()
    @UseGuards(UserGuard)
    createSubscriptionSession(
        @Req() request,
        @Body()createSubscription:CreateSubscriptionDto,
    ):Promise<Stripe.Response<Stripe.Checkout.Session>|undefined>{
return this.subscriptionService.createSubscriptionSession(
    request.user,
    createSubscription
)
    }

    @Post('portal-session')
    @UseGuards(UserGuard)
    updatePortal(
        @Req() request
    ): Promise<Stripe.Response<Stripe.BillingPortal.Session>> {
        return this.subscriptionService.getPortal(request.user.customerId);
      }
}
