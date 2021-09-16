import { Injectable } from "@angular/core";
import { MessageService } from "../utils/message.service";

/**
 * To create service object we have different types of injector
 * -Component Injector
 * -Module Injector 
 * -Global Injector  - Recommended to create instance one time(singleton),reuse any where in the applicatoin
 */

//@Injectable tells to create object

@Injectable({
    providedIn: 'root'
})
export class GreeterService {
    constructor(private messageService: MessageService) { }

    public sayHello(): string {
        this.messageService.add('SayHello method  is called')
        return `Hello`;
    }
    public sayHai(): string {
        this.messageService.add('SayHai method is called')
        return `Hai`;
    }
}