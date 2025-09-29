// let snack=prompt(" enter your favorite food");
//  let CurrentAge=+prompt("enter your age");
//  let maxAge=+prompt(" it is just a fun not a exact age \n enter number of age you think you will live" );
//  let snackPerDay=+prompt(" enter the quantity of your favorite food you eat daily");
//  let year=365;
//  let finalAge=maxAge*year;
//  let finalCh=finalAge*snackPerDay;
//  console.log(" you need  "+finalCh   +  " "+snack+" in your hole life");
// let snackperWeek=+prompt("enter your quantity of food you eat in a week");

// let week=52;
// let finalWeek=week*maxAge;

// let finalWeekly=maxAge*week;
// console.log(" you need " +finalWeekly+" "+snack+" in your hole life ");
 console.log(" it is just a fun! \n here we calculate how many your favorite  things you need in your hole life : ")
 let age=+prompt(" enter your age :");
 let fFood=prompt(" what is your favorite food :");
 let question=prompt(" you eat your favorite food  daily or weekly :\n NOte: just enter daily or weekly");

if(question.toLocaleLowerCase().trim()=="daily"){
    let maxAge=+prompt(" it is just a fun not a exact age \n enter number of age you think you will live ");
    if(maxAge>age){

    
    let perDay=+prompt("enter the quantity of your favorite food you eat daily");
    let remainLife=maxAge-age;
    let year=365;
  let remainDay=remainLife*year;
  let totalFood=remainDay*perDay;
  console.log(" you need  "+totalFood +  " "+fFood+" in your whole daily life until you will ripe on age of "+maxAge);
    }
    
    else{
        console.log(" if you think you will not longer live for example you will live just two coming years then add it in\n your age your life should be greater then your age")
    }
} 
else if(question.toLocaleLowerCase().trim()=="weekly"){
    let maxAge=+prompt(" it is just a fun not a exact age \n enter number of age you think you will live ");
    if(maxAge>age){
    let perWeek=+prompt("enter the quantity of your favorite food you eat weekly");
    let remainingLife=maxAge-age;
    let week=52;
    let remainingWeek=remainingLife*week;
    let totalFood=remainingWeek*perWeek;
     console.log(" you need  "+totalFood +  " "+fFood+" in your whole weekly life util you will ripe on age on"+maxAge);
    }
    else{
        console.log(" if you think you will not longer live for example you will live just two coming years then add it in\n your age your life should be greater then your age")
    }
}
else {
    console.log(" you entered a wrong choice  ");

}


