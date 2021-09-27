function reverseIt(someString) {
    // console.log(str); 

    let splitInput = someString.split('');

    let reversedDate = splitInput.reverse();

    let joinReversed = reversedDate.join('');

    // console.log(joinReversed);

    return joinReversed;

}


function checkPalin(someString) {
    let backwards = reverseIt(someString);

    if (someString === backwards) {
        return true;
    } else {
        return false
    }
}

// console.log(checkPalin("101"));
// checkPalin("super");
// checkPalin("oppo"); 




// let date = {
//     day: 2,
//     month: 9,
//     year: 1999
// }

function convertDateToString(date) {

    var dateStr = {
        day: '',
        month: '',
        year: ''
    };

    if (date.day < 10) {
        dateStr.day = '0' + date.day;
    } else {
        dateStr.day = date.day.toString();
    }

    if (date.month < 10) {
        dateStr.month = '0' + date.month;
    } else {
        dateStr.month = date.month.toString();
    }


    dateStr.year = date.year.toString();
    return dateStr;


}

// console.log(convertDateToString(date)); 

function getAllDateFormats(date) {
    var dateStr = convertDateToString(date);

    let ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
    let mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
    let yyyymmdd = dateStr.year + dateStr.month + dateStr.day;
    let ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2);
    let mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2);
    let yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day;

    return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];

}

// let date = {
//     day: 28,
//     month: 02,
//     year: 2082
// }

// console.log(getAllDateFormats(date)); 

function checkPalindromForDateFormats(date) {
    let listOfPalindromes = getAllDateFormats(date);

    let yesPalindrome = false;

    for (let i = 0; i < listOfPalindromes.length; i++) {
        if (checkPalin(listOfPalindromes[i])) {
            yesPalindrome = true;
            break;
        }
    }
    return yesPalindrome;
}

// console.log(checkPalindromForDateFormats(date)); 

// check for leap year
function isLeapYear(year) {
    if (year % 400 === 0) {
        return true;
    } else if (year % 100 === 0) {
        return false;
    } else if (year % 4 === 0) {
        return true;
    } else {
        return false;
    }
}


// gets next date
function getNextDate(date) {
    let day = date.day + 1; // increment the day
    let month = date.month;
    let year = date.year;
    let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // check for february 
    if (month === 2) {
        // check for leap year
        if (isLeapYear(year)) {
            if (day > 29) {
                day = 1;
                month++; // increment the month 
            }
        } else {
            if (day > 28) {
                day = 1;
                month++;
            }
        } // check for other months 
    } else {
        // check if the day exceeds the max days in month
        if (day > daysInMonth[month - 1]) {
            day = 1;
            month++; // increment the month 
        }
    }

    // if month is greater than 12 than increment the year
    if (month > 12) {
        month = 1;
        year++;
    }
    return {
        day: day,
        month: month,
        year: year
    }
    // this returned is new date object 

}



// console.log("leap " + isLeapYear(2000));


// get next palindrome date 
function getNextPalindromdate(date) {
    let counter = 0;
    let nextDate = getNextDate(date);

    while (1) {
        counter++;
        let isPalindrome = checkPalindromForDateFormats(nextDate);
        if (isPalindrome) {
            break;
        } else {
            nextDate = getNextDate(nextDate);
        }
    }
    return [counter, nextDate];

}



let dob = document.querySelector("#dateInput");
let btnCheck = document.querySelector("#btn-check");
let showOutput = document.querySelector("#showOutput");

// btnCheck.style.display = 'none'; 

// btnCheck.disabled= true; 

function clickHandler(e) {     
    var bdayStr = dateInput.value;
    if (bdayStr !== '') {
        // btnCheck.disabled = false; 
        // btnCheck.style.display = 'block'; 

        var listOfDates = bdayStr.split('-');
        var date = {
            day: Number(listOfDates[2]),
            month: Number(listOfDates[1]),
            year: Number(listOfDates[0])
        }        
        console.log(date);    

        var seePalindrome = checkPalindromForDateFormats(date);
        // console.log(seePalindrome + " is see palindrome"); 
    
        if (seePalindrome) {
            showOutput.innerText = "Your Birthday is Palindrome! "
        } else {
            let [counter, nextDate] = getNextPalindromdate(date);
            showOutput.innerText = `The next palindrome date is ${nextDate.day} -${nextDate.month}-${nextDate.year}, you missed it by ${counter} days!`;
        }

        
        // if (date.day == "" || date.month == "" || date.year == "")
    } else {
        console.log("give some inpout");
        showOutput.innerText = "Please give some valid input!";
    }
    
    

   
}


btnCheck.addEventListener("click", clickHandler);