// Необходимо создать классовую структуру
// 1. Создайте интерфейс IVehicle:
//   Методы:
//     - getDetails(): string — возвращает информацию о транспортном средстве.
//     - start(): string — возвращает строку "The vehicle is starting".


interface IVehicle {
    getDetails(): string;
    start(): string;
}


// 2. Создайте абстрактный класс Vehicle, который имплементирует IVehicle:
//   Реализуйте конструктор с полями:
//     - make (строка)
//     - model (строка)
//   Добавьте методы:
//     - start, возвращающего строку: "The vehicle {make} {model} is starting.".
//     - Абстрактный метод getDetails, который нужно реализовать в классах-наследниках.


abstract class Vehicle implements IVehicle {
    
constructor (public make: string, public model: string) {}

public start() {
    return `The vehicle ${this.make} ${this.model} is starting.`;
};

public abstract getDetails(): string;
}

// 3. Создайте класс Car, который наследует Vehicle:
//     - Добавляет поле year (число).
//     - Реализует метода getDetails, возвращающего строку: "{make} {model}, {year}".

class Car extends Vehicle {

    constructor (public make: string, public model: string, public year: number) {
        super(make, model);
    }

    public getDetails(): string {
        return `${this.make} ${this.model}, ${this.year}`;
    }
}


// 4. Создайте объект класса Car и проверьте работоспособность

const carBimer = new Car ("Bayerische", "BMW", 2025);
console.log(carBimer);
console.log(carBimer.start());
console.log(carBimer.getDetails());



const carMers = new Car ("Deutsch", "Mercedes", 2010);
console.log(carMers);
console.log(carMers.start());
console.log(carMers.getDetails());

