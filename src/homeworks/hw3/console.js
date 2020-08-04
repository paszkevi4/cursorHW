import {getMaxDigit, degreeCounter, namePrettier, salaryCount,
    getRandomNumber, countLetter, convertCurrency, createPassword,
    deleteLetters, isPalyndrom, deleteDuplicateLetter} from './functions'

const varsForTesting = {
    maxDigit: 567321,
    pow: {
        number: 2,
        power: 5,
    },
    name: 'вЛАД',
    salary: 10000,
    random: {
        min: 2,
        max: 5,
    },
    counter: {
        letter: 'а',
        word: 'Асталавiста',
    },
    currency: '$137',
    deleteing: {
        letter: 'a',
        word: 'ababagalamaga',
    },
    palyndrom: 'Аргентина манит негра',
    duplicates: 'aabcadefb'
}

const f = [
    `Max digit out of ${varsForTesting.maxDigit} is ${getMaxDigit(varsForTesting.maxDigit)}`,
    `${varsForTesting.pow.number} в ступенi ${varsForTesting.pow.power} дорiнює ${degreeCounter(varsForTesting.pow.number, varsForTesting.pow.power)}`,
    `Propper way to write ${varsForTesting.name} is ${namePrettier(varsForTesting.name)}`,
    `Маючи зп ${varsForTesting.salary} ти отримаєш тiльки ${salaryCount(varsForTesting.salary)}`,
    `Довiльне значення вiд ${varsForTesting.random.min} до ${varsForTesting.random.max} може бути, наприклад ${getRandomNumber(varsForTesting.random.min, varsForTesting.random.max)}`,
    `Буква ${varsForTesting.counter.letter} зустрiчається у рядку ${varsForTesting.counter.word} ${countLetter(varsForTesting.counter.letter, varsForTesting.counter.word)} рази`,
    `async func. will be shown at the bottom`,
    `Your new password is ${createPassword()}`,
    `${varsForTesting.deleteing.word} without all the ${varsForTesting.deleteing.letter}'s is just a ${deleteLetters(varsForTesting.deleteing.letter, varsForTesting.deleteing.word)}`,
    `${varsForTesting.palyndrom} - це${ isPalyndrom(varsForTesting.palyndrom) ? '' : ' не'} палiндром`,
    `${varsForTesting.duplicates} without duplicates is ${deleteDuplicateLetter(varsForTesting.duplicates)}`,
]

const loggingResults = () => {
    for ( let i = 0; i < f.length ; i++ ) {
        console.log(`${i+1}. ${f[i]}`)
    }
    convertCurrency(varsForTesting.currency)
}

export default loggingResults