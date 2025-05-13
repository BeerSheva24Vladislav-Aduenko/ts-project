
type Person = {
    id: number;
    name: string;
    age: number;
    gender?: string;
    address?: {
        city: string;
        street: string;
    }
}
type KeyValuePair<K, V> = {
    key: K;
    value: V;
}

const kvp: KeyValuePair<string, number> = {key: "abc", value: 10}; 
function findById<T extends {id: number}>(array: T[], id: number):T | undefined {
  return array.find(item => item.id === id);
}

//write universal function "findByField" - allows finding either one or several or none objects having
//a given value of a given field
function findByField<T>(array: T[], field: keyof T, value: unknown): T[] {
    return array.filter(item => item[field] === value);
}