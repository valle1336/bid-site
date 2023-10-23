//Detta är ett classes exempel
//TUser kan implementeras 

interface Car {
    carModel: string
}

interface Car {
    makeYear: string
}

const car: Car = {
    carModel: "Audi",
    makeYear: "2010"
} //Mergar båda interfaces in till ett med hjälp av typeScript

type Age = {
    age: number
}

type Name = {
    name : string
}

type Person = Name & Age // Här kombinerar vi 2 types och skapar en person som ärver av båda

type TUser = {
    username: string
    password: string
    login: () => string
}

interface User {
    name: string
    password: string
    login: () => string
}

export default class user implements User {
    constructor(
        public name: string,
        public password: string) {}

        login(): string {
            return this.name + this.password
        }

}