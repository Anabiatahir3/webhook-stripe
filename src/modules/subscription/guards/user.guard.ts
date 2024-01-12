import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
@Injectable()
export class UserGuard implements CanActivate {
 async canActivate(context:ExecutionContext):Promise<boolean>{
const request=context.switchToHttp().getRequest()
const payload={
    customerId:'cus_PMLgQ2Mi6ltLNl'
}
request['user']=payload

    return true
   
}
}