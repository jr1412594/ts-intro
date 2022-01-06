const person = {
    name: "jr",
    age: 34,
    hobbies: ["sports", 6, true],
};

const miso = {
    name: "miso",
    age: 9,
    favFoods: {
        dry: "purina",
        wet: "fancy feast",
    },
    toys: ["yarn", "ball", "hoodie"],
};

let randomArray: string[];

randomArray = ["that", "any"];

for (const toy of miso.toys) {
    console.log(toy.toUpperCase() + " :mine");
}

// console.log(person.name)

// console.log(miso.toys.forEach(toy => console.log(toy)));
