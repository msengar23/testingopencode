
let a = 5; 
console.log(a++ + ++a - --a + a-- + ++a); 
console.log(a);


/*   OutPUT CONSOLE 

[Running] node "c:\Users\mamta\LearnPlaywrightBasics2X\Tasks_LiveClass_Code\18MAy_Task03_Incre_Decre.js"
18
6

[Done] exited with code=0 in 0.115 seconds

 ERT Table:

A = a++;
A = 5;
a = 6;

 B = ++a
 B = 7;
 a = 7;

 C= --a
 C = 6
 a = 6

 D = a--
 D = 6;
 a = 5;
  
E = ++a
E = 6;
a = 6;

5 + 7 = 12
12 -6 = 6
6 + 6 = 12
12 + 6 = 18

*/