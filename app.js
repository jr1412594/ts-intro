var person = {
    name: "jr",
    age: 34,
    hobbies: ["sports", 6, true]
};
var miso = {
    name: "miso",
    age: 9,
    favFoods: {
        dry: "purina",
        wet: "fancy feast"
    },
    toys: ["yarn", "ball", "hoodie"]
};
var randomArray;
randomArray = ["that", "any"];
for (var _i = 0, _a = miso.toys; _i < _a.length; _i++) {
    var toy = _a[_i];
    console.log(toy.toUpperCase() + " :mine");
}
// console.log(person.name)
// console.log(miso.toys.forEach(toy => console.log(toy)));
