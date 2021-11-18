let number 

const getNumber = () => number;

const genNumber = () => {
    if (!number)
    {
        number = Math.floor(Math.random() * 100)
    }
    // console.log(number)
    return number
}

const clearNumber = () => {
    number = 0
}

export { getNumber, genNumber, clearNumber }