// let student = {
//     name: 'doriel',
//     id: '123456789',
//     age: 24,
//     city:{
//         address: 'igal alon',
//         number: 92
//     }
// };
// console.log(student.name);
// student.age++;
// console.log(student.age);
// console.log(student);
// student.car='skoda';
// console.log(student);
// console.log(student.city.address);


let listOfStudents=[
    {name:'doriel', id: '1234'},
    {name:'timna', id: '4321'},
    {name:'liora', id: '2134'}];

    for( i = 0; i < listOfStudents.length; i++){
        console.log(listOfStudents[i].id);
        
    }

    // כתבו םונקציה שמקבלת מערך ל אנשים , הפונקציה תיצור מערך חדש עם כל האנשים שגרים בתל אביב ותחזיר אותוץ

    function telAvivCitizen(arr){
        let newarr=[];
        for(i = 0; i < arr.length; i++){
            if(arr[i].city =='tel aviv'){
               newarr.push(arr[i].name) ;
            // newarr=arr[i].name;
            }
        }
        console.log(newarr);
        
    }

    telAvivCitizen([{name: 'doriel', city: 'tel aviv'},{name: 'timna', city: 'tel aviv'},{name: 'omer', city: 'qiryat gat'}]);


    function randomNumber(){
        let num= Math.floor(Math.random()*10);
        document.getElementById('showme').innerHTML=num;
    }

