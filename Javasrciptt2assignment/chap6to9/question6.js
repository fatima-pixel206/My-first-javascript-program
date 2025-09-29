let sub1=prompt(" enter subject one:");
let sub2=prompt(" enter subject two:");
let sub3=prompt(" enter subject three:");
let totalMarksS1=100;
let totalMarksS2=100;
let totalMarksS3=100;
let obtainMarkS1=+prompt(" enter obtain marks of "+sub1);
let obtainMarkS2=+prompt(" enter obtain marks of "+sub2);
let obtainMarkS3=+prompt(" enter obtain marks of "+ sub3);
let totalMarks=totalMarksS1+totalMarksS2+totalMarksS3;
let totalObtain=obtainMarkS1+obtainMarkS2+obtainMarkS3;
let percentageS1=obtainMarkS1/totalMarksS1*100;
let percentageS2=obtainMarkS2/totalMarksS2*100;
let percentageS3=obtainMarkS3/totalMarksS3*100;
let percentage=totalObtain/totalMarks*100;
console.log(" subject  Total Marks Obtain Marks      Percentage ");
// console.log(`${sub1}+ "  "+${totalMarksS1}+"    "+ ${obtainMarkS1}+${percentageS1}`);
console.log("   "+sub1+"     "+totalMarksS1+"       "+obtainMarkS1+"        "+percentageS1+"%");
console.log("   "+sub2+"     "+totalMarksS2+"       "+obtainMarkS2+"        "+percentageS2+"%");
console.log("   "+sub3+"     "+totalMarksS3+"       "+obtainMarkS3+"        "+percentageS3+"%");
console.log("       "+ totalMarks+"     "+totalObtain+"         "+percentage)
// console.log(`${sub2} +${totalMarksS2}+ ${obtainMarkS2}+${percentageS2}`);

// console.log(`${sub3} +${totalMarksS3}+ ${obtainMarkS3}+${percentageS3}`);
// console.log(`"     " +${totalMarks}+  ${  totalObtain}+  ${percentage}`);




