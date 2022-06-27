const fruit = ['apple', 'oranges' , '', 'mango', '' , 'lemon'];
/*
console.log(fruit.map(fruits => {
    return fruit;
}))
*/
console.log(fruit.map( fruits => ['apple', 'oranges' , 'mango', 'lemon']));


/*
//Ans 3:
The reason for that is that reference types only store an address pointing at the place in memory where
that array is stored and that pointer does address has not changed by us adding a new element.
So the things stored and as constant is just as Pointer just does address.
And this has not changed.Therefore, our constant value has not changed.*/

const copiesArray = fruit.slice();
console.log(copiesArray);

const copy = [fruit];
console.log(copy);
const spread = [...fruit];
console.log(spread);

//REst operator:merge multiple arguments into an array and you use it in the argument list of a

//function.Then it's the rest operator.


const toArray= (arg1 , arg2, arg3) => {
    return [arg1,arg2,arg3];
}
console.log(toArray(1,2,3));

const rest = (...args) => {
    return args;
}
console.log(rest(1,2,3,4,5,6));
