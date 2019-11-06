
//CR: What if they both the same? no console log would be writen.
//CR: You dont need another if statement after the first one. Because of course if num1 is not bigger than num2 so its smaller (or equal)
function whichNumIsBigger(num1,num2){
    if(num1>num2){
        console.log(num1);
    }
    else if(num2>num1){ 	
        console.log(num2);
    }
}
    let y= 6;
    let z= 9;
    whichNumIsBigger(z,y);
// which num is bigger


function biggerThan3Chars(str1,str2,str3,str4){
    let x=0;
    if(str1.length>3){
        x++;
    }
    if(str2.length>3){
        x++;
    }
    if(str3.length>3){
        x++;
    }
    if(str4>3){
        x++
    }
    console.log(x);
}
let name= 'doriel';
let id= '206087298';
let surename= 'aboya';
let = nickname= 'princeOfBellAir';
biggerThan3Chars(name,id,surename,nickname);
//if the string is bigger than 3 chars


function thereIsAnA(){
    let unknown= document.getElementById('name').value;
    let n=unknown.indexOf('A');
if(n!=-1){
    console.log(unknown.replace(unknown[n] , 'a'));
}
}
//change A to a

function evenOrNONegOrPos(n1){
if(n1>0 && n1%2!=0){
    console.log('even,odd');
}
if(n1>0 && n1%2==0){
    console.log('even, double');
}
if(n1<0 && n1%2!=0){
    console.log('negative, odd');
}
if(n1<0 && n1%2==0){//CR: Again -> There is no need for the last check because its the only option left
    console.log('negative, double');
    
}

}
evenOrNONegOrPos(15);
// check if the number is even odd double or negative
function compareLastAndFirstLetter(str){
    let n= str.length;
    if(n[0]==n[n-1]){ //CR: n is a number (its a length), So how do you treat it like an array (with n[0])?
        let newStr=str.slice(1,n-1);
        console.log(newStr);
        
    }

}
compareLastAndFirstLetter('dorield');
// compare between the first and the last letter of the char
function symbolsChecks(str1){
    let position= str1.indexOf('*');
    if(str1.indexOf('*')!=-1){ //CR: You already calculated the value in the last line and put the value in "position". dont calculate it again. use the variable
        console.log(str1.slice(0,position) + str1.slice(position+1));
        
    }
    let shtrudel=str1.indexOf('@');
    if(shtrudel!=-1){
        console.log('*'+ str1 +'*');
    }
    if(str1.indexOf('₪')!=0){
        console.log('new shekels');
        
    }
}
symbolsChecks('d₪o@rie*l');
//remove the * from the string
//add * at the beginning and end if their is a @
//pring new shekels if teir is ₪ 