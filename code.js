// helloWorld function 
// function helloWorld() {
//     //green: the test identifies as a function
//     //red: should never return 'undefined' when called
//     // red:should return a string when called
//     // red: should return the string "Hello, World!" when executed
//     console.log("Hello, World!")
// }
function helloWorld() {
    return "Hello, World!";
}
// all green

function sayHello(input) {
//     if(input === 'Pat'){
//         return "Hello, Pat!";
//     }
//     if(input === 'Alex') {
//         return "Hello, Alex!";
//     }
//     return "Hello, Jane!";
// }

    return "Hello, " + input + "!";
}