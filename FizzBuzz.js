

for (let numbers = 1; numbers < 101; numbers++) {
    if (numbers % 5 === 0 && numbers % 3 === 0) {
        console.log("FizzBuzz")
    }
    else if (numbers % 5 === 0){
        console.log("Buzz")
    }
    else if (numbers % 3 === 0){
        console.log("Fizz")
    }
    else 
    {console.log(numbers)}
}



for (let hash = "#"; hash.length <= 7; hash += "#"){
    console.log(hash)
}

