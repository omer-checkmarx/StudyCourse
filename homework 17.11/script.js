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




// debugger
// function singleNum(arr){
//     let temp=0;
//     for(i = 0; i < arr.length; i++){
//         for(j = i+1; j < arr.length; j++){
//             if(arr[i]==arr[j]){
//               temp=arr[j]  ;
//               arr[j]=arr[arr.length-1];
//               arr[arr.length-1]=temp;
//               arr.pop();
//             //   if(i>0){
//             //   i--;
//             //   }
//               break;
//             }
//         }
//     }
//     console.log(arr);
//     // return arr;
// }
// singleNum([2,2,5,7,5,7]);
// // debugger
// function useOfTargil3(arr2 , arr3){
//     let arr2new=singleNum(arr2);
//     let arr3new=singleNum(arr3);
//     let Narray=[0];
//     for(i = 0; i < arr2new.length; i++){
//         for(j = 0; i < arr3new.length; j++){
//             if(arr2new[i]==arr3new[j]){
//                 Narray.push(arr2new[i]);
//                 break;
//             }
//         }
//     }
//     console.log(Narray); 
//     // return Narray;  
// }
// useOfTargil3([3,5,7,1,3,9] , [2,2,5,7,5,7]);






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




let count =0;
function Targil5(mat){
    for(i = 0; i < mat.length;i++){
        for(j = 0; j < mat[i].length; j++){
            if(mat[i][j] >= 'A' && mat[i][j] <= 'Z'){
                count++
            }
        }
    }
    console.log(count);
    
}
Targil5([['d','b','R','n','u'],['S','X','a','w','y'], ['v','u','Q','p']]);




function islandAmount(mat){
    let counter = 0;
    for( i = 0; i <mat.length; i++){
        for(j = 0; j < mat[i].length; j++){
            if(mat[i][j]==1){
                if(isIsland(mat,i, j , mat.length)){
                    counter++;
                }
            }
        }
    }
    return counter;
}




function isIsland(mat, i ,j, lenghtOfMatrix){
    if( (j == 0 || mat[i][j-1]==0) &&
        ((i == 0 || j ==0) || mat[i-1][j-1]==0) &&
        (i==0 || mat[i-1][j]==0) &&
        ((i == 0 || j == lenghtOfMatrix-1) || mat[i-1][j+1]==0) &&
        (j == lenghtOfMatrix-1 || mat[i][j+1]==0) &&
        (( i == lenghtOfMatrix-1 || j == lenghtOfMatrix-1) || mat[i+1][j+1]==0) &&
        (i== lenghtOfMatrix-1 || mat[i+1][j]==0) &&
        ((i == lenghtOfMatrix-1 || j == 0) || mat[i+1][j-1]==0)){
            return true;
    }
    return false;
}

console.log(islandAmount([[0,0,0,1], 
            [0,1,0,1],
            [0,0,0,0],
            [0,0,1,0]]));



// debugger
function check(array){
    for(i = 1; i <= 9; i++){
        if(array.indexOf(i) == -1)
        {
            return false;
        }
    }
    return true;
}

debugger
function allOfNums(mat){
    let contain1=0;
    for(i = 0; i < 9; i++){
     if(check(mat[i])){
        contain1++;
     }
    }
    console.log(contain1);
    
}
allOfNums([[1,2,3,4,5,6,7,8,9],
    [9,8,8,7,6,5,4,3,2],
    [1,2,3,4,5,6,7,8,4],
    [2,1,3,4,5,5,6,7,8],
    [1,1,1,1,1,1,1,1,1],
    [9,8,7,6,5,4,3,2,1],
    [5,4,3,2,1,6,7,8,9],
    [2,2,3,3,4,4,5,5,6],
    [3,2,1,4,5,6,7,8,3]]);
// פונקציה שבודקת אם יש במערך כפל מספרים מ 1 עד 9 ואם כן היא מחזירה "לא טוב" ואם לא אז מחזירה "טוב".ו
// היא חוזרת לתוך משתנה בטנקציה העיקריצ שתפקידה לבדוק  אם חזרו 9 פעמים "טוב" 
// ואם באמת חזרו  פעמים 9 "טוב" אז ההמטריצה תקינה ואם לא אז היא לא תקינה


