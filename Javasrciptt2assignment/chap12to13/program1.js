let ch=prompt(" enter a single english character");
let code=ch.charCodeAt(0);
if(code>=48 &&code<=57){
    console.log(" enter a character");

} else if(code>=65 && code <=90){
      console.log(" Upper case");
      console.log(code);


}
else if(code>=90 && code <=122){
      console.log(" Lower case");
      console.log(code.charCodeAt);
}
else {
    console.log(" please enter a character");
}