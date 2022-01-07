// const person = {
//     name: "jr",
//     age: 34,
//     hobbies: ["sports", 6, true],
//     role: [2, 'dog dad']
// };

enum Role {
    ADMIN, READ_ONLY, AUTHOR
}

const person = {
    name: "jr",
    age: 34,
    hobbies: ["sports", 6, true],
    role: Role.ADMIN
};

if(person.role === Role.READ_ONLY) {
    console.log('admin');
}



console.log(person.role);
// console.log(person.name)

const miso = {
    name: "miso",
    age: 9,
    favFoods: {
        dry: "purina",
        wet: "fancy feast",
    },
    toys: ["yarn", "ball", "hoodie"],
};

// console.log(miso.toys.forEach(toy => console.log(toy)));

let randomArray: any[];//very flexible, takes away typescript advantages.

randomArray = ["that", "any", 9, true];

for (const toy of miso.toys) {
    console.log(toy.toUpperCase() + " :mine");
}

//Tuple
//an array that is fixed length and fixed type

let id = 1;
let personName = 'brick';

let tuple: [number, string];
tuple = [id, personName];
tuple.push('bettis');
// tuple[1] = 1; will not work. push is only exception.
console.log(tuple, " :this is my tuple");




