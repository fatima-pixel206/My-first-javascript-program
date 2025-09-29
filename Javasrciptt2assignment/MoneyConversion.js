 console.log(" conversion of currency  of Us dollar and Saudi riyal in PKR");

 let Us=282.46;
let saudiRiyal=75.03;
let Usd=+prompt(" Enter  US amount you want to convert in PKR");
let UStoPkr=Us*Usd;
let SaudiR=+prompt(" Enter your   amount in Saudi currency to convert into PKR: ");
let saudiRiyalToPkr=saudiRiyal*SaudiR;
console.log(" your amount in us dollar is "+Usd+" \n your Pakistani amount is "+UStoPkr);
console.log(" your saudi amount is "+SaudiR+"\n your Pakistani amount is "+saudiRiyalToPkr);
let totalPKR=UStoPkr+saudiRiyalToPkr;
console.log(" you have  total amount in Pakistani PKR is:" +totalPKR);
// conversion PKR in US dollar and Saudi riyal
let exchangeAmountINUs=+prompt(" enter your Pakistani amount to change in us dollars: ");
let PkRtoUS=exchangeAmountINUs/Us;
let exchangeAmountInSAr=+prompt(" enter your Pakistani amount to change in Saudi Riyal : ");
let PkRtoSAR=exchangeAmountInSAr/saudiRiyal;
console.log(" your Pakistani amount is "+exchangeAmountINUs+"\n you have "+PkRtoUS+"  Us Dollars");
console.log(" your Pakistani amount is "+exchangeAmountInSAr+"\n you have "+PkRtoSAR+" Saudi Riyal");

