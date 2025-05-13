
type Person = {
    id: number;
    name: string;
    age: number;
    gender?: string;
    address?: {
        city: string;
        street: string;
    }
    education: string
}
type ReadOnlyType<T> = {
    readonly [K in keyof T]: T[K]
}
const person1: Person = {
    id: 123, age: 25, name: "Vasya", education: "Engineer"
}
const person2: ReadOnlyType<Person> = {
    id: 123, age: 25, name: "Vasya", education: "Doctor"
}
person1.age = 26;
// person2.age = 26;  readonly property - ERROR




// Write universal function "update" that updates (not returns new object but 
// updates an existing one) any fields of a given any object

function update<T extends object>(object: T, update: Partial<T>) {
(Object.keys(update) as (keyof T)[]).forEach(key => {
        object[key] = update[key]!;
    });
    
}
console.log("Before update:", person1);
update(person1, { age: 25, name: "Ivan", education: "Doctor" });
console.log("After 1st update:", person1);
update(person1, { age: 25, name: "Katya" });
console.log("After 2st update:", person1);

// update(person1, { age: "25", namee: "Ivan", education: "Doctor" }); - ERROR
