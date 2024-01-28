let timerId = setTimeout(func|code, [delay], [arg1], [arg2],)


function sayHi(phrase= "Hello" , who="John") {
  alert( phrase + ', ' + who );
}

setTimeout(sayHi, 1000); // Hello, John