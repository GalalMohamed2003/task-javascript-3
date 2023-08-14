let num = 10
function outer() {
    function inner() {
        let num = 20;
    }
    console.log(num);
}
outer();

let person = {
    name: "john",
    getName: function () {
        return this.name;
    }
}
console.log(person.getName());


// const i=1 ;
// for( i<5 ; i++){}
// console.log(i);


const arr = [ 1 , 2 , 3 , 4 ,5],
NewArr=[];
for(let val in arr){
NewArr.push(val);
console.log(NewArr);
}



const arry = [ 1 , 2 , 3 , 4 ,5],
[foo , bar , ...baz ]=arry;

console.log(foo);
console.log(bar);
console.log(baz);