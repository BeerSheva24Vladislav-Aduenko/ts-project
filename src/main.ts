
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
// person2.age = 26;  readonly property -ERROR