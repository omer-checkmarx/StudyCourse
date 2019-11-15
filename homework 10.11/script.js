function holoCube(num){
    for(let i=0; i<num; i++){
        if(i==0 || i==num-1){
            let k='';
            for(let q=0; q<num;q++){
            k=k+'*';
            }
            console.log(k);
        }
        else{
            let k2= '';
            for(let w=0; w<num;w++){
                if(w==0 || w==num-1){
                    k2=k2+'*';
                }
                else{
                    k2=k2+' ';
                }                
            }
            console.log(k2);
            
        }
    }
}
holoCube(4);
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
//3. space befor capial letter

function bubbleSort(string){
    let len=string.length;
    for(let j = 0; j <len; j++){
    for(let i=0;i<len; i++){
        if(string[i]> string[i+1]){
            let temp= string[i+1];
            string[i+1]= string[i];
            string[i]=temp;
        }
    }
}
    console.log(string);
}
bubbleSort([10,245,2315,545]);
// 6. sort from  the smallest to the largest


let max =0;
function largestNumber(){
    let number= document.getElementById('viewNumbers').value;
    while(number>=0){
        if(number>max){
            max=number;
            document.getElementById('viewNumbers').innerHTML=number
        }
    }
    if(number<0){
        console.log(max);
    }
}

