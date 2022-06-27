
const person = {
    name : 'Max',
    age : 29,
    greet() {
        console.log('Hi I am ' + this.name);
    }
};

const name1 =  (personData) => {
    console.log(personData.name);
}

name1(person);

//destructuting:
const name12 =  ({name,age}) => {
    console.log(name,age);
}

name12(person);

const {name,age} = person;
console.log(name,age);

//Array:
const fruits =['apple', 'oranges' , 'mango', 'lemon'];
const [fruit1,fruit2] = fruits;
console.log(fruit1,fruit2)