import { Injectable } from '@nestjs/common';
import {InjectStripeClient} from '@golevelup/nestjs-stripe'
import Stripe from 'stripe';
import { CreateSubscriptionDto } from './dtos/create.subscription.dto';
@Injectable()
export class SubscriptionService {
constructor(@InjectStripeClient()private stripe:Stripe){}

    createSubscriptionSession(user:any,createSubscriptionDto:CreateSubscriptionDto)
    :Promise<Stripe.Response<Stripe.Checkout.Session>|undefined>{
        try {
            return this.stripe.checkout.sessions.create({
                success_url:"https://example.com",
                customer:user.customerId,
                line_items:[
                    {
                        price:createSubscriptionDto.priceId,
                        quantity:3
                    }
                ],
                mode:'subscription'

            })
        } catch (error) {
            console.error('Error from stripe',error)
        }

        
    }
    async getPortal(
        customerId: string,
      ): Promise<Stripe.Response<Stripe.BillingPortal.Session>> {
        return this.stripe.billingPortal.sessions.create({
          customer: customerId,
        });
      }
}
