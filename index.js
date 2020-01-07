const produceDrivingRange = function(range) {
    return function(block1, block2) {
        const firstBlock = parseInt(block1.slice(0, -2))
        console.log(`block 1: ${firstBlock}`)
        const secondBlock = parseInt(block2.slice(0, -2))
        console.log(`block 2: ${secondBlock}`)

        const distance = Math.abs(firstBlock - secondBlock)
        console.log(distance)

        if (distance <= range) {
            return `within range by ${range - distance}`
        } else {
            return `${distance - range} blocks out of range`
        }
    }
}

const produceTipCalculator = function(percent) {
    return function(payment) {
        return percent * payment
    }
}

const createDriver = function() {
    let driverId = 1

    const Driver = function(name) {
        this.name = name
        this.id = driverId;
        driverId += 1
    }

    return Driver
}