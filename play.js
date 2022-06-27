const name  = 'Max';
const age = 29;
const hasHObbies =  true;

//age = 30;
/*
function summary(userName,userAge,UserHobby){
  return (
    'Name is ' + userName +
    ',Age is ' + userAge +
    ' and the user has hobboies : ' + UserHobby
  );  
}
console.log(summary(name,age,hasHObbies));
*/
/*
const user = function (userName,userAge,UserHobby){
    return (
      'Name is ' + userName +
      ',Age is ' + userAge +
      ' and the user has hobboies : ' + UserHobby
    );  
  }
console.log(user(name,age,hasHObbies));

*/
/*
const user = (userName,userAge,UserHobby) => {
    return (
      'Name is ' + userName +
      ',Age is ' + userAge +
      ' and the user has hobboies : ' + UserHobby
    );  
  }
console.log(user(name,age,hasHObbies));

const add = (a,b) => {
    return a + b;
};
console.log(add(1,2));*/

const Multiply = (a,b) => a * b;
console.log(Multiply(9,2));

const person = {
    name : 'Max',
    age : 29,
    greet() {
        console.log('Hi I am ' + this.name);
    }
};
console.log(person);
person.greet();