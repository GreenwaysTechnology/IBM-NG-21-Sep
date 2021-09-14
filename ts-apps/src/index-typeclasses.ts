
//class as type

// class Order {
//     id: number;
//     value: number;
//     name: string;
// }

// interface Order {
//     id: number
//     value: number;
//     name: string;
// }
type Order = {
    id: number
    value: number;
    name: string;
}

let order: Order = {
    id: 1,
    value: 1000,
    name: 'books'
};
/////////////////////////////////////////////////////////////////////////////////////
//type classes are used to verify the not only type but also property existency.

type User = {
    id:number;
    name:string;
    password:string;
    //optional property
    city?:string;
}

let user:User = {
    id: 1,
    name: 'foo',
    password: 'bar',
    city:'fff'  
}











