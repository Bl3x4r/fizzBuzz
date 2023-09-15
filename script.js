
for (let index = 1; index < 100; index++) {
    let a =''
if(index % 3 === 0){
    a+="Fizz"
}
if(index % 5 === 0){
    a+="Buzz"
}
if(a === ""){
    a=index
}
console.log(a)
}