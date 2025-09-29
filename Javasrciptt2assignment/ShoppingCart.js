let PriceItem1=650;
let priceItem2=100;
let orderItem1=+prompt(" Enter the quantity of item one you purchased ");
let orderItem2=+prompt(" Enter the quantity of item two you purchased ");
let shippingCharges=100;
let priceOfItem1=PriceItem1*orderItem1;
let priceOfItem2=priceItem2*orderItem2;
let totalPrice=priceOfItem1+priceOfItem2+shippingCharges;

console.log( " price of item one is :"+PriceItem1 +"\n price of item two is :"+priceItem2+"\n your oder of item one is : "
    +orderItem1+" \n your order of item two is :"+orderItem2+"\n your total bill is "+totalPrice+"\n with 100 shipping charges on each item");
