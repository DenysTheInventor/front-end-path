class CarService {

    static DefaultWorkingHours = {
        from: '9:00', 	
        till: '20:00',
    }

    constructor(name, workingHours = DefaultWorkingHours) {
        this.name = name
        this.workingHours = workingHours
    }

    checkWorkingHours() {
        let now = new Date().getHours()

        return now > Number(this.workingHours.till.split(':')[0]) || now < Number(this.workingHours.from.split(':')[0]) ? true : false
    } 

    repairCar(carName) {
        if (!carName) {
            console.error('Вам необходимо указать название машины, чтобы ее отремонтировать') 
        } else {
            this.checkWorkingHours() 
                ? alert ('К сожалению, мы сейчас закрыты. Приходите завтра') 
                : alert (`Сейчас отремонтируем вашу машину ${carName} ! Ожидайте пожалуйста`)  
        }
    }
}

const carService = new CarService("RepairCarNow", {
    from: "8:00",
    till: "20:00"
})

carService.repairCar();
carService.repairCar("BMW");