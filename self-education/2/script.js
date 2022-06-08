class User {
   #type
   #location

   set setLocation(location) {
      location ? this.#location = location : console.log('Write location to set')      
   } 

   get getUserType() {
      return this.#type
   }

   get getLocation() {
      return this.#location ? this.#location : 'No location added'
   }

   constructor(type, name, surname, age, salary, date = new Date) {
      this.#type = type
      this.name = this.upperFirstLetter(name)
      this.surname = this.upperFirstLetter(surname)
      this.age = age
      this.salary = salary
      this.date = date
   }

   upperFirstLetter(word) {
      return word.charAt(0).toUpperCase() + word.slice(1)
   }

   showFullInfo() {
      console.log(`
         Type: ${this.getUserType}
         User: ${this.name} ${this.surname}
         Age: ${this.age}
         Salary: ${this.salary}$
         Date creation: ${this.date}
      `)
   }

   increaseSalary(percent) {
      if (!percent) {
         console.error('You need to add percent before using that method')
         return
      } 

      this.salary += this.salary*percent/100
      console.log(`New user salary after increasing on ${percent}%: ${this.salary}$`)
   }
}

const student = new User('Student' ,'denis', 'holubchikov', 28, 3000)

student.showFullInfo()
student.increaseSalary()
student.increaseSalary(20)
console.log(student.getLocation)

student.setLocation = 'Pattaya'
console.log(student.getLocation)