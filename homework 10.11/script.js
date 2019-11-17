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
    let number=document.getElementById('sendNumbers').value;
    if(number>=0){
        // document.getElementById('sendNumbers').innerHTML=number
        if(number>max){
            max=number;
        }
    }
    else{
        console.log(max);
    }
}
//4. keep asking for numbers until i get a negative one.

function howMuchStInNd(firststring, secondstring){
    let counter1=0; //CR: Give it more intuitive name.
    let lengstr1=firststring.length;
    let lengstr2= secondstring.length;
    let l=0;
    if(lengstr1>lengstr2){ 
        for( let v =0; v < lengstr1; v++){
            if(secondstr[l]==firststr[v]){ //CR: No there is a problem of doing it. v is always going up but l not.
                l++;
                if(l==lengstr2){
                    counter1++;
                    l=0; //CR: Is this the only time you make it zero????
                }
            }
            
        }
    }
}
// 5. how much time the first in the second //CR: The second in the first. in your "if(lengstr1>lengstr2){" you check that the first is *longer*
function pushButton(butt){
document.form.screen.value=document.form.screen.value+butt;
}

function equal(){
    let equalButton= document.form.screen.value;
    if(equalButton){
    document.form.screen.value=eval(equalButton);
    }
}

function clean(){
    document.form.screen.value="";
}

