/*
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example:

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.

Don’t forget the space after the closing parentheses!
*/

function createPhoneNumber(arr) {
    // Brandon Hunsaker's idea
    
    //shift opening parenthesis to arr[0] position
    //push closing parenthesis && _ to arr[2] position (splice)
    //push '-' to the arr[9] position (splice)
    
    arr.unshift('(') 
    arr.splice(4, 0, ') ')
    arr.splice(8, 0, '-')
    
    return arr.join('')
}

function createPhoneNumber2(arr) {
    // My first idea
    if (arr.length < 10) {
        return 'Cannot make a phone number'
    }
    const str = arr.join('')
    return `(${str.substring(0,3)}) ${str.substring(3,6)}-${str.substring(6,10)}`
}

function createPhoneNumber3(arr) {
    // My first concept that I considered in my mind before deciding createPhoneNumber2 was better
    return `(${arr.slice(0,3).join('')}) ${arr.slice(3,6).join('')}-${arr.slice(6,10).join('')}`
}

function createPhoneNumber4(arr) {
    // Joint third approach that needs a lot of code
    let phone = ''
    for (let i in arr) {
        switch (+i) {
            case 0:
                phone += '('
                break
            case 3:
                phone += ') '
                break
            case 6:
                phone += '-'
        }
        phone += String(arr[i])
    }
    return phone
}

function testCreatePhoneNumber(inp, exp) {
    const res = createPhoneNumber2(inp)
    const passed = res == exp
    console.log("passed:", passed, ` inp: ${inp}  res: '${res}'  exp: '${exp}'`)
}

testCreatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0],'(123) 456-7890')

// let str = '1234567890'
// console.log(str.substring(0,3))
// console.log(str.substring(3,6))
// console.log(str.substring(6,10))