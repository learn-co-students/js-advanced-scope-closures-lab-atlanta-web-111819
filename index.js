function produceDrivingRange(number){
    return function(num1, num2){
        let n1 = parseInt(num1)
        let n2 = parseInt(num2)
        let range = n1 - n2
        range = Math.abs(range)
        if(range < number){
            return `within range by ${number - range}`
        }else {
            return `${range - number} blocks out of range`
        }
    }


}

function produceTipCalculator(number){
    return function(fare){
        return fare * number
    }
}

function createDriver(){
    let DriverId = 0;

    return class {
        constructor(name){
            this.name = name; 
            this.id = ++DriverId;
        }
    }
}
