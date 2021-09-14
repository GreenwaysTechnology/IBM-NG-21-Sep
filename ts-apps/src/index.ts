import { firstName, lastName, status, salary, skills, address, calculate } from "./mylib";
import { OrderService } from './services/order.service';

console.log(firstName, lastName, status, salary, skills, address, calculate());

//order service
let orderService = new OrderService();
console.log(orderService.findAll())