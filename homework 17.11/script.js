let sum=0;
let numofvalues=0;
function Targil1(mat){
    for( i = 0; i< mat.length; i++){
        for(j = 0; j < mat[i].length; j++){
            sum+=mat[i][j];
            numofvalues++
        }
    }
    console.log(sum / numofvalues ); 
}
Targil1([[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15]]);







function bubbleSort(array){
    let len=array.length;
    for(let j = 0; j <len; j++){
    for(let i=0;i<len; i++){
        if(array[i]< array[i+1]){
            let temp= array[i+1];
            array[i+1]= array[i];
            array[i]=temp;
        }
    }
}
    console.log(array);
}
bubbleSort([10,245,2315,545]);



// let a=0;
// let b=0;
function primeNumber(num){
    for(let i=2; i<=(num-1); i++) {
        if(num%i==0){
            console.log('not prime');   
            return false;
        }  
    }
    console.log('prime');  
    return true;
}
  

// primeNumber(10);



// debugger
let primal=0;
function   Targil4(rishoniMat){
    for(m = 0; m < rishoniMat.length; m++){
        for(n = 0;n < rishoniMat[m].length; n++){
            if(primeNumber(rishoniMat[m][n])){
                primal++;
            }
                

        }   
                
    }
    console.log(primal);
    
}

Targil4([[10,11,12,13,14],[20,21,22,23,24],[30,31,32,33,34]]);