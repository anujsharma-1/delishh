export class order_details{
    orderId : string;
    items : item_details[];
    constructor(orderId : string, item : item_details[]){
        this.orderId = orderId;
        this.items = item;
    }
};
export class item_details{
    itemId : string="";
    quantity : number = 0;
    constructor(itemId : string, quantity :number){
        this.itemId = itemId;
        this.quantity = quantity;
    }
}

export class allOrder{
    orderId : string;
    orderArray : item[];
    constructor(orderId : string, orderArray : item[]){
        this.orderId = orderId;
        this.orderArray = orderArray;
    }
}

export class item{
    name: string;   
    img: string;
    star: number;
    type: number;
    id: number;
    price: number;
    quantity: number;
    constructor(name : string, img : string, star : number, type : number, id : number, price : number, quantity : number){
        this.name = name;
        this.img = img;
        this.star = star;
        this.type = type;
        this.id  = id;
        this.price = price;
        this.quantity = quantity;
    }
}