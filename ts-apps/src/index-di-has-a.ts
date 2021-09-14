//has-a - dependency injection

class Product {
    constructor(public productId: string = "P001", public productName: string = "pname") { }
}
class Order {
    //order has product
    constructor(public orderId: string = "0AA", public product?: Product) { }
}

let product = new Product();
let order = new Order('A001', product);

console.log(order.orderId, order.product.productName)

order = new Order();
console.log(order.orderId, order?.product?.productName ?? "default Product")
///////////////////////////////////////////////////////////////////////////////////////
// layerd app -  repository,service,controller

class OrderRepository {
    constructor() {

    }
    findAll() {
        return [{ id: 1, name: 'p1' }, { id: 2, name: 'p2' }];
    }
}
class OrderService {
    //dependency injection/has-a
    constructor(private orderRepo: OrderRepository) { }

    findAll() {
        return this.orderRepo.findAll();
    }
}
class OrderController {
    constructor(private orderService: OrderService) { }

    init() {
        return this.orderService.findAll();
    }
}
let orderRepo = new OrderRepository();
let orderService = new OrderService(orderRepo)
let orderController = new OrderController(orderService);
console.log(orderController.init())

orderController = new OrderController(new OrderService(new OrderRepository));
console.log(orderController.init())
















