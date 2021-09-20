let dob = document.querySelector("#dob");
let btnCheck = document.querySelector("#btn-check");

// let givenInput = dob.value; 

function  reverseIt(givenInput) {
    console.log(givenInput); 
   
    let splitInput = givenInput.split('');

    let reversedDate = splitInput.reverse();

    let joinReversed = reversedDate.join(''); 

    console.log(joinReversed);

    return joinReversed; 

}


function checkPalin(someString) {
    let backwards = reverseIt(someString); 
    
    if (someString === backwards ) {
        return true;       
    } else { 
        return false}
}

// console.log(checkPalin("101"));
// checkPalin("super");
// checkPalin("oppo"); 


btnCheck.addEventListener("click", checkPalin); 

let date = {
    day: 2,
    month: 9,
    year: 1999
}

function convertDateToString(date) {

    var dateStr = {day: '' , month: '', year: ''};

    if (date.day < 10){
        dateStr.day = '0' + date.day;
    } else {
        dateStr.day = date.day.toString() ;
    }

    if (date.month < 10) {
        dateStr.month = '0' + date.month;
    } else {
        dateStr.month = date.month.toString() ; 
    }


    dateStr.year = date.year.toString(); 
    return dateStr; 


}

console.log(convertDateToString(date)); 

