class Employee {
  #salary; 

  constructor(firstName, lastName, profession, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.profession = profession;
    this.salary = salary;
  }

  
  get firstName() {
    return this._firstName;
  }
  set firstName(value) {
    if (/^[A-Za-z]{2,50}$/.test(value)) {
      this._firstName = value;
    } else {
      throw new Error("Error: First name must be 2–50 latin letters");
    }
  }

  get lastName() {
    return this._lastName;
  }
  set lastName(value) {
    if (/^[A-Za-z]{2,50}$/.test(value)) {
      this._lastName = value;
    } else {
      throw new Error("Error: Last name must be 2–50 latin letters");
    }
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  get profession() {
    return this._profession;
  }
  set profession(value) {
    if (/^[A-Za-z ]+$/.test(value) && value.trim().length > 0) {
      this._profession = value;
    } else {
      throw new Error("Error: Profession must contain only latin letters and spaces, and not be empty");
    }
  }

  get salary() {
    return this.#salary;
  }
  set salary(value) {
    if (typeof value === "number" && value > 0 && value < 10000) {
      this.#salary = value;
    } else {
      throw new Error("Error: Salary must be a number > 0 and < 10000");
    }
  }

}

class Company {
  #employees;

  constructor(title, phone, address) {
    this.title = title;
    this.phone = phone;
    this.address = address;
    this.#employees = [];
  }

  
  get title() {
    return this._title;
  }
  set title(value) {
    this._title = value;
  }

  get phone() {
    return this._phone;
  }
  set phone(value) {
    this._phone = value;
  }

  get address() {
    return this._address;
  }
  set address(value) {
    this._address = value;
  }

  
  addEmployee(employee) {
    if (employee instanceof Employee) {
      this.#employees.push(employee);
    } else {
      throw new Error("Error: Only instances of Employee can be added");
    }
  }

  getEmployees() {
    return this.#employees;
  }

  getInfo() {
    return `Компания: ${this.title}\nАдрес: ${this.address}\nКоличество сотрудников: ${this.#employees.length}`;
  }

  
  findEmployeeByName(firstName) {
    const emp = this.#employees.find(e => e.firstName === firstName);
    if (!emp) {
      throw new Error(`Employee with name "${firstName}" not found`);
    }
    return emp;
  }

  #getEmployeeIndex(firstName) {
    return this.#employees.findIndex(e => e.firstName === firstName);
  }

  
  removeEmployee(firstName) {
    const index = this.#getEmployeeIndex(firstName);
    if (index === -1) {
      throw new Error(`Employee with name "${firstName}" not found`);
    }
    this.#employees.splice(index, 1);
  }

  
  getTotalSalary() {
    return this.#employees.reduce((sum, e) => sum + e.salary, 0);
  }
}



//-------------------------------------------------------------//
const emp1 = new Employee('John', 'Doe', 'Developer', 3300);
const emp2 = new Employee('Jane', 'Smith', 'Manager', 5500);
const emp3 = new Employee('Mark', 'Brown', 'Designer', 4400);

const company = new Company('Codax-SoftWare', '20/1', 'Prosta street');
company.addEmployee(emp1);
company.addEmployee(emp2);
company.addEmployee(emp3);

console.log(company.getTotalSalary()); 
console.log(company.findEmployeeByName('Jane')); 
company.removeEmployee('John');
console.log(company.getEmployees());


export { Employee, Company };

