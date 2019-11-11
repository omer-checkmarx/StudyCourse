function holoCube(){
    let numOfDig= document.getElementById('Id').value
    let n=numOfDig.length;
    if(n==9){
        let n=1;
        while(numOfDig[n-1]>=0 && numOfDig[n-1]<=9){
            n++
        }
        
        return'true';  
    }
    else{
        return 'false';
    }  
}
// cheack if the id is ok

function primary(num){
if(num)
}
