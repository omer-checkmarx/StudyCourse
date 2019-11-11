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

// function primary(num){

// 