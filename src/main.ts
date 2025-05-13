
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



// Write the function isAnagram taking two strings and returning true 
// if the second string is an anagram of the first one
// Anagram of an string is another string with the same letters and their occurrences as in the first one

function isAnagram(str1: string, str2: string): boolean {
    let result = true;

    if (str1.length !== str2.length) {
        result = false;
    } 
    const counter: { [key: string]: number } = {};
    for(const char of str1.toLowerCase()) {
        counter[char] = (counter[char] || 0) + 1;
    }
    for(const char of str2.toLowerCase()) {
        if (!counter[char]) {
            result = false;
        } 
        counter[char]--;
        if (counter[char] === 0) {
            delete counter[char];
        }
    }
    return result
}
console.log(isAnagram("Кот", "кот")); 
console.log(isAnagram("кот", "ток")); 
console.log(isAnagram("Кот", "ток")); 
console.log(isAnagram("кот", "кот")); 
