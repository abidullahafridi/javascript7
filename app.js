 function abc(a) {
   console.log(a);
 }
 abc("abcdefghijklmnopqrstuvwsyx");

 var count = 0;
 function addCount() {
   count = 1;
 }
 addCount();
 console.log(count);

 function abc() {
   var a = "saim";
   return a;
 }
 var c = abc();
 console.log(c);

 var day = "fri";
 switch (day) {
   case "sun":
     console.log("Holiday");
     break;
   case "mon":
     console.log("First day of week");
     break;
   case "tue":
     console.log("Second day of week");
     break;
   case "wed":
     console.log("Third day of week");
     break;
   case "thu":
     console.log("Forth day of week");
     break;
   case "fri":
     console.log("Fifth day of week");
     break;
   case "sat":
     console.log("Six day of week");
     break;
   default:
     console.log("no days found");
 }

 
 var i = 0;
 while (i < 10) {
   i++;
   console.log(i);
 }

 var i = 0;
 do {
   console.log(i);
   i++;
 } while (i < 1);

 function abc(a) {
   console.log(a);
}