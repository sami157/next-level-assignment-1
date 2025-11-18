const formatValue = (value: string | number | boolean): string | number | boolean => {
    if (typeof value === 'string') {
        return value.toUpperCase();
    }

    if (typeof value === 'number') {
        return value * 10;
    }

    else return !value
}

const getLength = (value: string|any[]):number => {
    if (typeof value === "string") {
        return value.length;
    }

    if (Array.isArray(value)) {
        return value.length;
    }

    return 0
}



class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getDetails(): string {
        return `'Name: ${this.name}, Age: ${this.age}'`;
    }
}

interface Boi {
    title: string,
    rating: number
}

const filterByRating = (books: Boi[]):Boi[] => {
    return books.filter((book) => book.rating>=4)
}

interface User {
    id: number, 
    name: string, 
    email: string, 
    isActive: boolean
}

const filterActiveUsers = (users: User[]):User[] => {
    return users.filter((user) => user.isActive)
}

const users = [
    { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
    { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
    { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];

interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

function printBookDetails(book: Book) {
    
    console.log(
        `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable ? "Yes" : "No"}`
    );
}

type StrOrNumberArray = (number|string)[]

const getUniqueValues = (array1: StrOrNumberArray, array2: StrOrNumberArray): StrOrNumberArray => {
    return [...new Set([...array1, ...array2])]
}

interface Product {
    name: string,
    price: number,
    quantity: number,
    discount?:number
}

const calculateTotalPrice = (products: Product[]):number => {
    let sum:number = 0
    products.map((product) => sum = sum + (product.discount ? product.quantity * product.price * (1 - (product.discount / 100)) : product.quantity * product.price))
    return sum
}
