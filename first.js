 
//Calculator-Task1


 function function1(val) 
     {  
            document.getElementById("txt").value+=val
            return val;
  
        } 
        
        function equal_function()
            {
            let x = document.getElementById("txt").value
            if(x.includes('+'))
            {
                add();
            }
            if(x.includes('-'))
            {
                minus();
            }
             if(x.includes('/'))
            {
                div();
            }
            if(x.includes('*'))
            {
                mul();
            }
            
            if(x.includes('%'))
            {

                per();
            }
                
            }

        function add()
        {
          let x = document.getElementById("txt").value
          
          let arr= x.split('+')
          let y=Number(arr[0])+Number(arr[1]);  
          document.getElementById("txt").value = y
          return y;

        }
        function minus()
        {
          let x = document.getElementById("txt").value
          
          let arr= x.split('-')
          let y=Number(arr[0])-Number(arr[1]);  
          document.getElementById("txt").value = y
          return y;

        }
        function div()
        {
          let x = document.getElementById("txt").value
          
          let arr= x.split('/')
          let y=Number(arr[0])/Number(arr[1]);  
          document.getElementById("txt").value = y
          return y;

        }
        function mul()
        {
          let x = document.getElementById("txt").value
          
          let arr= x.split('*')
          let y=Number(arr[0])*Number(arr[1]);  
          document.getElementById("txt").value = y
           return y;

        }
      function per()
      {
        let x = document.getElementById("txt").value
          x = x.replace("%", "*");
                //alert("per  "+per+'/100')
          let arr= x.split('*')
          let y=(Number(arr[0])*Number(arr[1]))/100;
    
          document.getElementById("txt").value = y
                return y;
      }

function sqroot()

{
    var result=Math.sqrt(Number(document.getElementById("txt").value));
    if(result%1==0)
{
    document.getElementById("txt").value=result;
    return result;
}
else
{
    document.getElementById("txt").value=result.toFixed(3);
    return result.toFixed(3);


}
}
function abs()
{
   var x=Number( document.getElementById("txt").value);
   if(x<0)
   {
    document.getElementById("txt").value = document.getElementById("txt").value*(-1);
     return document.getElementById("txt").value*(-1);
   } 
   else
   {
     document.getElementById("txt").value= document.getElementById("txt").value;
     return document.getElementById("txt").value;
   }
}
function cleartxt()
{
     document.getElementById("txt").value= ""
     return true;
}




//Form Validation-Task2



function formValidation()
{
var uname = document.registration.username;
var num = document.registration.number;
var uemail = document.registration.email;
if(allLetter(uname))
{
if(allnumbers(num))
{
if (validateEmail(uemail))
{
}
}
}
return false;
}
function allLetter(uname)
{

var letters = /^[A-Za-z]\w+$/;
if(uname.value.match(letters))
{
return true;
}
else
{
alert('Username should have first character as alphabet');
uname.focus();
return false;
}
}
function allnumbers(num)
{

var numbers =/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
if(num.value.match(numbers))
{
return true;
}
else
{
alert('Must have numbers only with 10 digits');
num.focus();
return false;
}
}
function validateEmail(uemail)
{

var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(uemail.value.match(mailformat))
{
alert('Form Successfully Submitted');
window.location.reload();
return "Form Successfully Submitted";
}
else
{
alert("You have entered an invalid email address!");
uemail.focus();
return "Form is not Submitted";
}
}





//Check Palindrome-Task3



 function check_Palindrome(){
 var str_entry =document.getElementById('str').value
   var l_str = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
    var count = 0;
    if(l_str==="") {
        document.getElementById("demo1").innerHTML="Nothing found!";
        return "Nothing found!";
    }
    if ((l_str.length) % 2 === 0) {
        count = (l_str.length) / 2;
    } else {
        if (l_str.length === 1) {
            document.getElementById("demo1").innerHTML="Entry is a palindrome.";
            return "Entry is a palindrome.";
        } else {
            count = (l_str.length - 1) / 2;
        }
    }
    for (var x = 0; x < count; x++) {
        if (l_str[x] != l_str.slice(-1-x)[0]) {
           document.getElementById("demo1").innerHTML="Entry is not a palindrome.";
            return "Entry is not a palindrome.";
        }
    }
     document.getElementById("demo1").innerHTML="The entry is a palindrome.";
    return "The entry is a palindrome.";
}
 function check_Anagram() 
 {
        var stringA=document.getElementById("str1").value;
        var stringB=document.getElementById("str2").value;
        stringA = stringA.replace(/[^\w]/g, '').toLowerCase()
        stringB = stringB.replace(/[^\w]/g, '').toLowerCase()

        if( sortString(stringA) === sortString(stringB))
          {

            document.getElementById("demo2").innerHTML="It is an Anagram";
          return "It is an Anagram";
         }
        else
        {
            document.getElementById("demo2").innerHTML="It is not an Anagram";
            return "It is not an Anagram";
        }


    function sortString(string) 
    {
        return string.split('').sort().join('');
    }
}

 

   
//Who wins?-Task4


function mapnum()
        {
    var x = Math.floor(Math.random() * 1001);
    var y = Math.floor(Math.random() * 1001);
    document.getElementById("num1").value = x;
    document.getElementById("num2").value = y;
      }
  function objwin()
      {
        var x=document.getElementById("num1").value;
        var y=document.getElementById("num2").value;
        var u=x%3;
        var v=y%3;
        if(u == 0)
        {
            document.getElementById("obj1").value="human";
        }
        else if(u==1)
        {
            document.getElementById("obj1").value="cockroach";
        }
        else
        {
            document.getElementById("obj1").value="nuclearbomb";
        }
        if(v==0)
        {
            document.getElementById("obj2").value="human";
        }
        else if(v==1)
        {
            document.getElementById("obj2").value="cockroach";
        }
        else
        {
            document.getElementById("obj2").value="nuclearbomb";
        }
        var one=document.getElementById("obj1").value;
        var two=document.getElementById("obj2").value;
        if(one==two)
        {
             document.getElementById("demo").innerHTML="Tie";
            return "Tie!";
        }
        if(((one=="human")||(two=="human")) && ((one=="cockroach")||(two=="cockroach")))
        {
             document.getElementById("demo").innerHTML="Human wins";
             return "Human wins";
        }
        else if(((one=="cockroach")||(two=="cockroach")) && ((one=="nuclearbomb")||(two=="nuclearbomb")))
        {
             document.getElementById("demo").innerHTML="Cockroach wins";
             return "Cockroach wins";
        }
        else
        {    
            document.getElementById("demo").innerHTML="Nuclearbomb wins";
            return "Nuclearbomb wins";
        }
      }




//Optional Calculator


        var secondnumber;  
        var result;  
        var operations;  
  
        function numone() {  
            if (document.calform.dispaly2.value == "0" || document.calform.dispaly2.value == result) {  
  
                document.calform.dispaly2.value = "1";  
  
            } else //if(document.calform.dispaly2.value != "0")    
            {  
                document.calform.dispaly2.value = document.calform.dispaly2.value + "1";  
            }  
  
        }  
  
        function numtwo() {  
  
            if (document.calform.dispaly2.value == "0" || document.calform.dispaly2.value == result) {  
  
                document.calform.dispaly2.value = "2";  
  
            } else //if(document.calform.dispaly2.value != "0")    
            {  
                document.calform.dispaly2.value = document.calform.dispaly2.value + "2";  
            }  
  
        }  
  
        function numthree() {  
  
            if (document.calform.dispaly2.value == "0" || document.calform.dispaly2.value == result) {  
  
                document.calform.dispaly2.value = "3";  
  
            } else //if(document.calform.dispaly2.value != "0")    
            {  
                document.calform.dispaly2.value = document.calform.dispaly2.value + "3";  
            }  
  
        }  
  
        function numfour() {  
  
            if (document.calform.dispaly2.value == "0" || document.calform.dispaly2.value == result) {  
  
                document.calform.dispaly2.value = "4";  
  
            } else //if(document.calform.dispaly2.value != "0")    
            {  
                document.calform.dispaly2.value = document.calform.dispaly2.value + "4";  
            }  
  
        }  
  
        function numfive() {  
  
            if (document.calform.dispaly2.value == "0" || document.calform.dispaly2.value == result) {  
  
                document.calform.dispaly2.value = "5";  
  
            } else //if(document.calform.dispaly2.value != "0")    
            {  
                document.calform.dispaly2.value = document.calform.dispaly2.value + "5";  
            }  
  
        }  
  
        function numsix() {  
  
            if (document.calform.dispaly2.value == "0" || document.calform.dispaly2.value == result)
             {  
  
                document.calform.dispaly2.value = "6";  
  
            }
             else //if(document.calform.dispaly2.value != "0")    
            {  
                document.calform.dispaly2.value = document.calform.dispaly2.value + "6";  
            }  
  
        }  
  
        function numseven() {  
  
            if (document.calform.dispaly2.value == "0" || document.calform.dispaly2.value == result) 
            {  
  
                document.calform.dispaly2.value = "7";  
  
            } else //if(document.calform.dispaly2.value != "0")    
            {  
                document.calform.dispaly2.value = document.calform.dispaly2.value + "7";  
            }  
        }  
  
        function numeight() {  
  
            if (document.calform.dispaly2.value == "0") {  
  
                document.calform.dispaly2.value = "8";  
  
            } else if (document.calform.dispaly2.value == result) {  
                document.calform.dispaly2.value = "8";  
            } else //if(document.calform.dispaly2.value != "0")    
            {  
                document.calform.dispaly2.value = document.calform.dispaly2.value + "8";  
            }  
  
        }  
  
        function numnine() {  
  
            if (document.calform.dispaly2.value == "0" || document.calform.dispaly2.value == result) {  
  
                document.calform.dispaly2.value = "9";  
  
            } else //if(document.calform.dispaly2.value != "0")    
            {  
                document.calform.dispaly2.value = document.calform.dispaly2.value + "9";  
            }  
  
        }  
  
        function numzero() {  
  
            if (document.calform.dispaly2.value == "0") {  
  
                document.calform.dispaly2.value = "0";  
  
            } else if (document.calform.dispaly2.value == result) {  
                document.calform.dispaly2.value = "0";  
            } else //if(document.calform.dispaly2.value != "0")    
            {  
                document.calform.dispaly2.value = document.calform.dispaly2.value + "0";  
            }  
  
        }  
  
        function numdobuzero() {  
  
            if (document.calform.dispaly2.value == "0" || document.calform.dispaly2.value == result) {  
  
                return;  
  
            } else //if(document.calform.dispaly2.value != "0")    
            {  
                document.calform.dispaly2.value = document.calform.dispaly2.value + "00";  
            }  
  
        }  
  
        function clr() {  
            document.calform.dispaly2.value = "0";  
            document.calform.display1.value = "";  
            return;  
        }  
  
        function operationplus() {  
  
            operation = "+";  
            firstnumber = parseInt(document.calform.dispaly2.value);  
            document.calform.dispaly2.value = "0";  
            document.calform.display1.value = firstnumber + operation;  
            //alert(firstnumber);    
  
        }  
  
        function operationmult() {  
  
            operation = "*";  
            firstnumber = parseInt(document.calform.dispaly2.value);  
            document.calform.dispaly2.value = "0";  
            document.calform.display1.value = firstnumber + operation;  
  
        }  
  
        function operationminus() {  
  
            operation = "-";  
            firstnumber = parseInt(document.calform.dispaly2.value);  
            document.calform.dispaly2.value = "0";  
            document.calform.display1.value = firstnumber + operation;  
  
        }  
  
        function operationdivid() {  
  
            operation = "/";  
            firstnumber = parseInt(document.calform.dispaly2.value);  
            document.calform.dispaly2.value = "0";  
            document.calform.display1.value = firstnumber + operation;  
  
        }  
  
        function operationperc() {  
  
            operation = "%";  
            firstnumber = parseInt(document.calform.dispaly2.value);  
            document.calform.dispaly2.value = "0";  
            document.calform.display1.value = firstnumber + operation;  
  
        }  
  
        function equalsto() {  
  
            secondnumber = parseInt(document.calform.dispaly2.value);  
  
            if (operation == "+") {  
                result = firstnumber + secondnumber;  
            } else if (operation == "*") {  
  
                result = firstnumber * secondnumber;  
  
            } else if (operation == "-") {  
  
                result = firstnumber - secondnumber;  
  
            } else if (operation == "/") {  
  
                result = firstnumber / secondnumber;  
  
            } else if (operation == "%") {  
  
                if (document.calform.dispaly2.value == "0") {  
  
                    result = firstnumber / 100;  
                    document.calform.display1.value = firstnumber + operation + "100";  
                } else if (document.calform.dispaly2.value != "0") {  
                    result = firstnumber * secondnumber / 100;  
                    document.calform.display1.value = firstnumber + operation + secondnumber + "/100 = " + result;  
                }  
            } else if (operation == "^") {  
  
                for (var i = 0; i < secondnumber; i++) {  
  
                    result = firstnumber * i;  
                }  
  
  
            }  
            document.calform.dispaly2.value = "";  
            document.calform.dispaly2.value = result.toString();  
            document.calform.display1.value = firstnumber + operation + secondnumber + " = " + result.toString();  
            return firstnumber + operation + secondnumber + " = " + result.toString();  
  
        }  
  
        function sqrots() {  
            firstnumber = document.calform.dispaly2.value;  
            result = (Math.sqrt(parseInt(document.calform.dispaly2.value)));  
            if((result%1)!=0)
            {
                result = result.toFixed(3);
            
            }
            document.calform.dispaly2.value = result;  
            document.calform.display1.value = "sqrt(" + firstnumber + ") = " + result;  
             return "sqrt(" + firstnumber + ") = " + result;
  
        }  
  
        function operationmodulus() {  
  
            operation = "||";  
            firstnumber = document.calform.dispaly2.value;
            if(firstnumber<0)
            {
              result= -1*document.calform.dispaly2.value;
            }
            else
            {
                result= 1*document.calform.dispaly2.value;
            }
            document.calform.dispaly2.value = result;  
            document.calform.display1.value = "modulus(" + firstnumber + ") = " + result;
            return "modulus(" + firstnumber + ") = " + result; 
  
        }  
