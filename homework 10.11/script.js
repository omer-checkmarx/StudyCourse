function holoCube(){
    let numOfDig= document.getElementById('Id').value
    let n=numOfDig.length;
    if(n==9){
    for(let i=0; i<n; i++){
        if(!(numOfDig[i]>=0 && numOfDig[i]<=9)) {
         console.log('false');  
        }
    }
    console.log('true');
}
    else{
        console.log('false'); 
    }
}
// cheack if the id is ok

function primeNumber(num){
    for(let i=2; i<=(num-1); i++) {
        if(num%i==0){
            console.log('not prime');   
        }  
    }
    console.log('prime');  
}
let x=19;
primeNumber(x);
//cheack if the numer is primal or not

function spaceBefoUperCase(original){
    let len= original.length;
    let newStr=original;
    let str='';
    let finalForm= original;
    let currentindex= 0;
    for(let i=0; i<len; i++){
        if(original[i]>='A' && original[i]<='Z'){
            str+= original.slice(currentindex,i) + ' ';
            currentindex=i;
        }
    }
    console.log(str + original.slice(currentindex,len));
    
}
spaceBefoUperCase('doRieLaBoYa')
// space befor and capial letter

