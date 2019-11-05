// let num=7;
// if(num>0){
//     console.log('positive');   
// }
// if(num<0){
//     console.log('negative');   
// }
// let mail='doriel494@gmail.com';
// let len=mail.length;
// let n=mail.indexOf('@');
// if(len>4 && n!= -1){
//     console.log('true');
    
// }
// let num =9;
// if( num%2==0){
//     console.log('even');
// }
// else{console.log('odd');}
    // let num=8;
    // if(num>0 && num%2==0){
    //     console.log('posi, even');
    // }
    // else if(num<0 && num%2==0){
    //     console.log('negative, even');
    // }
    // else if(num>0 && num%2!=0){
    //     console.log('good');
    // }
    // else if(num<0 && num%2!=0){
    //     console.log('good');
    // }
//     let name= 'doriel';
//     if(name.length<6 && name.length>2){
//         console.log('pass');
//     }
//     else{
//         console.log('nevermind');
//     }

// function sum3nums(n1,n2,n3){
// let sum=n1+n2+n3;
// console.log(sum);
// }
// let x=12;
// let y=13;
// let z=14;
// sum3nums(x,y,z);
// function checkEvenOrOdd(num){
    
//     if(num%2==0){
//         return 'even';
//     }
//     else{
//         return 'odd';
//     }
// }
// let answer= checkEvenOrOdd(45);

// כתבו פונקציה שמקבלת שתי מחרוזות ומדפיסה את הארוכה מביניהן.
// כתבו פונקציה שמקבלת מחרוזת ומדפיסה האם האות הראשונה שלה היא אות קטנה או אות גדולה.
// כתבו פונקציה אשר מקבלת מחרוזת ומחליפה את הרווח הראשון בכוכבית ומחזיר אותה .
// function whichstrisbigger(string, string2){
// let string='doriel';
// let string2='aboya';
// let stringlen=string.length;
// let string2len=string2.length;
// if(stringlen>string2len){
//     console.log(string);
// }
// else if (stringlen<string2len){
//     console.log(string2);
// }
// else{
//     console.log(equal);
// }
// }
// whichstrisbigger('doriel', 'aboya');



// function lowerOrUpperletter(str){
    
//     if(str.slice(0,1)>='a' && str.slice(0,1)<='z'){
//         console.log('lowwer');
//     }
//     else{
//         console.log('upper');
//     }
// }
// lowerOrUpperletter('doriel');

// function replaceSpace(stringg){
//     let st=stringg.replace(' ', '*');
//     return st;
// }
// st= replaceSpace('say what');
// console.log(st);



// function al(){
//     let one=document.
// }



function activate(){
    debugger
    let username= document.getElementById('user').value;
    let password= document.getElementById('pass').value;
    let confirmation= document.getElementById('confirm').value;
    let email=document.getElementById('email').value;
    
    let isAllGood = true;

    if(username.length<2){
        isAllGood = false;
        document.getElementById('userHolder').innerHTML+="not enought chars"
        //SHOW USER BADDDD
    }
    if(password.length<6 || password.length>8){
        isAllGood = false;
        document.getElementById('passHolder').innerHTML+="too long or too short"
        //SHOW PASSWORD BADDD
    }
    
    if(confirmation!=password){
        isAllGood = false;
        document.getElementById('confirmHolder').innerHTML+="not match to the password"
        //SHOW PASSWORD CNMF BAD
    }

    if(email.indexOf('@')==-1 || email.length<=7){
        isAllGood = false;
        document.getElementById('emailHolder').innerHTML+="@ is missing or too short"
        //SHOW EMAIL BAD
    }

    if(isAllGood == true){
        window.alert('(:');
    }
}
