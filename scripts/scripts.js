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

console.log(checkPalin("101"));
checkPalin("super");
checkPalin("oppo"); 


btnCheck.addEventListener("click", checkPalin); 

// someString = "2002";
// someString = 'lol';
// someString= "101"; 
// someString = "hello"; 

// let y = checkPalin("someString"); 
// console.log(y) ; 