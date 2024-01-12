import {Injectable} from '@nestjs/common'
import {InjectStripeClient,StripeWebhookHandler} from "@golevelup/nestjs-stripe"
import Stripe from 'stripe'
@Injectable()
export class SubscriptionWebhook{
    constructor(@InjectStripeClient()private stripe:Stripe){}
   

@StripeWebhookHandler('customer.subscription.created')
async handleSubscriptionUpdate(event:Stripe.Event):Promise<void>{
const dataObject=event.data.object as Stripe.Subscription
//now we can add in our db
console.log("customer subscription created",dataObject)
}
@StripeWebhookHandler('customer.subscription.deleted')
async handleSubscriptionDelete(event:Stripe.Event):Promise<void>{
    const dataObject=event.data.object as Stripe.Subscription
    //now we can delete in our db
    console.log("customer deleted",dataObject)
}
@StripeWebhookHandler('invoice.payment_succeeded')
async handlePayment(event:Stripe.Event):Promise<void>{
    const dataObject=event.data.object as Stripe.Subscription
    //now we can delete in our db
    console.log("customer paid",dataObject)
}
}