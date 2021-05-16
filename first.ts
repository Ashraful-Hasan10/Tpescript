let age: number;
let club: string = 'Real Madrid';
let isFamous: boolean;

function add ( num1: number, num2: number): number {
    return num1 + num2;
}

add(3, 76);

function fullName ( firstName: string, lastName: string): string{
    return firstName + '' + lastName;
}

fullName('Bill', 'Gates');


function schoolName ( district: string): string {
  return district + 'High' + '' + 'School';
}

schoolName('Chittagong');
schoolName('Dhaka');
schoolName('Delhi');
schoolName('Delhi');
schoolName('Delhi');
schoolName('Delhi');
schoolName('Delhi');
schoolName('Delhi');
schoolName('Delhi');
schoolName('Delhi');
schoolName('Delhi');
schoolName('Delhi');
schoolName('Delhi');
schoolName('Delhi');
schoolName('Delhi');
schoolName('Delhi');
schoolName('Delhi');
schoolName('Delhi');
schoolName('Delhi');
schoolName('Delhi');
schoolName('Delhi');
schoolName('Delhi');
schoolName('Delhi');
schoolName('Delhi');
schoolName('Delhi');
schoolName('Delhi');
schoolName('Delhi');
schoolName('Delhi');
schoolName('Delhi');
schoolName('Delhi');
schoolName('Delhi');
schoolName('Delhi');
schoolName('Delhi');
schoolName('Delhi');
schoolName('Delhi');
schoolName('Delhi');
schoolName('Delhi');
schoolName('Delhi');
schoolName('Delhi');
schoolName('Delhi');
schoolName('Delhi');
schoolName('Delhi');
schoolName('Delhi');
schoolName('Delhi');
schoolName('Delhi');
schoolName('Delhi');
schoolName('Delhi');
schoolName('Delhi');
schoolName('Delhi');


const multiply = (x: number, y: number): number => x*y ;
console.log(multiply(25, 25));

const numbers : number[] = [2, 5, 6, 10, 25, 36, 25, 20, 4, 55, 70];
numbers.push(5);
numbers.push(25);
numbers.push(50);
numbers.push(52);

const friends : string[] = ['james', 'fin', 'jeff', 'Gates', 'bill', 'bin' ];
let megaName : string = '';
for (let i = 0; i < friends.length; i++) {
    const friend : string = friends[i];
    if(friend.length > megaName.length){
        megaName = friend;
    }
}


console.log('Friend with the largest name', megaName);


const friend = {
    name : 'Samuel David',
    age : 61
}

let player : {
    club : string;
    salary : number
}

player = {
    club : 'FC Barcelona',
    salary: 50000
}

interface Player {

    club : string;
    name : string;
    salary : number,
    isPlaying : boolean,
    wife? : string,
    childName? : string,
    numberOfPlane? : number
}



const cooke : Player = {
    name : 'Messi',
    club : 'FC Barcelona',
    salary : 100000,
    isPlaying : true,
    wife : 'jumur'

}
const pedro : Player = {
    name : 'Messi',
    club : 'FC Barcelona',
    salary : 100000,
    isPlaying : true,

}
const john : Player = {
    name : 'Messi',
    club : 'FC Barcelona',
    salary : 100000,
    isPlaying : true,

}
const bill : Player = {
    name : 'Messi',
    club : 'FC Barcelona',
    salary : 100000,
    isPlaying : true,

}
const gates : Player = {
    name : 'Messi',
    club : 'FC Barcelona',
    salary : 100000,
    isPlaying : true,
    numberOfPlane : 2

}


function getBonus ( player : Player){
    return player.salary * 0.1;
}

getBonus(gates);
getBonus(gates);
getBonus(gates);
getBonus(gates);
getBonus(gates);
getBonus(gates);
getBonus(gates);
getBonus(gates);
getBonus(gates);
getBonus(gates);
getBonus(gates);
getBonus(gates);
getBonus(gates);
getBonus(gates);
getBonus(gates);
getBonus(gates);
getBonus(gates);
getBonus(gates);
getBonus(gates);
getBonus(gates);
getBonus(gates);
getBonus(gates);
getBonus(gates);
getBonus(gates);
getBonus(gates);
getBonus(gates);
getBonus(gates);
getBonus(gates);
getBonus(gates);
getBonus(gates);
getBonus(gates);
getBonus(gates);
getBonus(gates);
getBonus(gates);
getBonus(gates);

