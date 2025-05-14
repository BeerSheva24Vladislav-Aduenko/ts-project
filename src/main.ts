type Person = {
  id: number;
  name: string;
  age: number;
  gender?: string;
  address?: {
    city: string;
    street: string;
  };
  education: string;
};
type ReadOnlyType<T> = {
  readonly [K in keyof T]: T[K];
};
const person1: Person = {
  id: 123,
  age: 25,
  name: "Vasya",
  education: "Engineer",
};
const person2: ReadOnlyType<Person> = {
  id: 123,
  age: 25,
  name: "Vasya",
  education: "Doctor",
};
person1.age = 26;
// person2.age = 26;  readonly property - ERROR

// Write universal function "update" that updates (not returns new object but
// updates an existing one) any fields of a given any object

function update<T>(object: T, update: Partial<T>) {
  for (let key in update) {
    object[key] = update[key]!;
  }
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


function getOccurrencesObj(array: (string|number)[]): Record<string|number, number>{
     return array.reduce((acc: Record<string|number, number>, cur) => ({...acc, [cur]:
         acc[cur] ? ++acc[cur] : 1}), {})
}
function isAnagram(str1: string, anagram: string): boolean {
    let res: boolean = false;
    str1 = str1.toLowerCase();
    anagram = anagram.toLowerCase();
    if (str1.length === anagram.length && str1 !== anagram) {
        const letterOccurences: Record<string, number> = getOccurrencesObj(Array.from(str1));
        res = Array.from(anagram).every(letter => --letterOccurences[letter] > -1)
    }
    return res;
}
console.log(isAnagram("hello", "olleh"))
console.log(isAnagram("hello", "olllh"))
console.log(getOccurrencesObj([1,2,3,1,1,1,2]));
console.log(getOccurrencesObj(["lmn", "lmn"]))