class EmployeesCollection {
    #employees

    constructor() {
        this.#employees = []
    }

    addEmployee(...newEmp) {
        newEmp 
            ? newEmp.forEach(emp => this.#employees.push(emp) )
            : console.error('Add employee first')
    }

    showAll() {
        this.#employees 
            ? this.#employees.forEach(user => console.log(user))
            : console.error('No employees')
    }

    countAllSalaries() {
        return this.#employees 
            ? this.#employees.reduce((acc, i) => acc + i.salary, 0) +'$'
            : 'No employees'
    }    

    countAvgSalary() {
        return this.#employees 
            ? this.#employees.reduce((acc, i) => acc + i.salary, 0)/this.#employees.length + '$'
            : 'No employees'
    }
}

const user1 = {
    name: 'Den',
    salary: 1500,
    isWorking: true 
}

const user2 = {
    name: 'Villi',
    salary: 1200,
    isWorking: true 
}

const user3 = {
    name: 'Jake',
    salary: 1200,
    isWorking: true 
}

const user4 = {
    name: 'Zara',
    salary: 1800,
    isWorking: true 
}

const employees = new EmployeesCollection

employees.addEmployee(user1, user2, user3, user4)

employees.showAll()

console.log(employees.countAllSalaries()) 
console.log(employees.countAvgSalary()) 