/* 1. Функція, яка отримує будь-яке число та виводить найбільшу цифру в цьому числі. */
export const getMaxDigit = ( number = prompt('Введiть значення, у якому треба знайти найбiльшу цифру') ) => {
    number = number.toString();
    let currentMax = number[0];
    for (let i = 1; i < number.length; i++) {
        if (number[i] > currentMax) currentMax = number[i]
    };
    return currentMax;
}

/* 2. Створити функцію, яка визначає ступінь числа. */
export const degreeCounter = ( number = prompt('Значення, яке треба множити'), degree = prompt('Степiнь') ) => {
    if ( degree === 0 ) return 1
    let answer = number;
    for ( let i = 1; i < degree; i++ ) {
        answer *= number;
    }
    return answer
}

/* 3. Функція, яка форматує ім'я, роблячи першу букву великою. */
export const namePrettier = ( name = prompt('Введiть ваше iм\'я') ) => {
    let newName = name[0].toUpperCase() + name.slice(1).toLowerCase();
    return newName;
}

/* 4. Функція, яка вираховує суму, що залишається після оплати податку від зарабітньої плати. */
export const salaryCount = ( sal = prompt('Розрахункова ЗП') ) => {
    const incomeTax = 18;
    const militaryTax = 1.5;
    const incomeFee = sal * ( incomeTax / 100 );
    const militaryFee = sal * ( militaryTax / 100 );
    return sal - (incomeFee + militaryFee);
}

/* 5. Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M. */
export const getRandomNumber = ( lower = +prompt('Шукаємо у промiжку з:'), higher = +prompt('та до якого значення:') ) => {
    const temp = Math.random() * (higher - lower) + lower;
    return Math.ceil(temp);
}

/* 6. Функція, яка рахує скільки разів певна буква повторюється в слові. */
export const countLetter = ( letter = prompt('Шукати букву:'), word = prompt('У якому рядку?') ) => {
    let counter = 0;
    for ( let i = 0; i < word.length; i++ ) {
        if ( word[i].toLowerCase() === letter.toLowerCase()) counter++
    };
    return counter;
}

/*7. Функція, яка конвертує долари в гривні та навпаки*/
const willGet = (function () {
    let sum = null;
    return {
        getSum: function() {
            return this.sum
        },
        setSum: function(value) {
            this.sum = value
        },
    }
})()

const usdExchange = (function () {
    let usd = null;
    return {
        setUSD: function(value) {
            this.usd = value
        },
    }
})()

const requestURL = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5'

let sendRequest = (method, url) => {
    return fetch(url).then( response => {
        return response.json()
    })
}

export const convertCurrency = async ( ownedMoney = prompt('How much do you have? I need $xxx or xxxUAH format')  ) => {
    await sendRequest('GET', requestURL)
        .then(function (data) {
            usdExchange.setUSD(data[0])
        });
    let tempCurr = null
    if (ownedMoney[0] === '$') {
        let usd = ownedMoney.slice(1)
        tempCurr = (usd * usdExchange.usd.buy).toFixed(2)
        willGet.setSum(tempCurr + ' hryvnas')
        console.log(`7. For ${ownedMoney} dollars you can get ${tempCurr} hryvnas`)
    } else if (ownedMoney.slice(-3) === 'UAH') {
        let uah = ownedMoney.slice(0, -3)
        tempCurr = (uah / usdExchange.usd.sale).toFixed(2)
        willGet.setSum('$' + tempCurr)
        console.log(`7. For ${ownedMoney} hryvnas you can get ${tempCurr} dollars`)
    } else {
        console.log(`Unknown currency`)
    }
}

/* 8. Функція генерації випадкового паролю Довжина встановлюється користувачем або по замовчуванню = 8 символам. */
export const createPassword = ( symbolNumber = 8 ) => {
    if ( !symbolNumber ) symbolNumber = 8
    let pass = []
    for ( let i = 0; i < symbolNumber; i++) {
        pass.push(Math.ceil( (Math.random() * 9) ))
    }
    return pass.join('')
}

/* 9. Функція, яка видаляє небхiднi букви з речення. */
export const deleteLetters = ( letter = prompt('Яку букву небхiдно видалити:'), word = prompt('У якому рядку?') ) => {
    let result = word.toLowerCase().split('');
    for ( let i = 0; i < result.length; i++ ) {
        if (result[i] === letter.toLowerCase()) result.splice(i, 1)
    };
    result = result.join('')
    return result;
}

/* 10. Функція, яка перевіряє, чи є слово паліндромом. */
export const isPalyndrom = ( str = prompt('Яку фразу треба перевiрити?') ) => {
    let spacelesString = deleteLetters (' ', str)
    let reversedString = spacelesString.split('').reverse().join('')
    const isP = spacelesString === reversedString
    return isP
}

/*11. Функція, яка видаляє з речення букви, які зустрічаються більше 1 разу.*/
export const deleteDuplicateLetter = (string = prompt('У якому рядку необхiдно видалити повторення?')) => {
    let newString = string
    let needToDelete = []
    for ( let i = 0; i < string.length; i++ ) {
        for ( let j = 0; j < string.length; j++) {
            if (string[i] === string[j] && i !== j) {
                needToDelete.push(string[i])
            }
        }
    }
    for ( let i = 0; i < string.length; i++ ) {
        for ( let j = 0; j < needToDelete.length; j++ ) {
            if ( needToDelete[j] === newString[i]) {
                newString = deleteLetters( needToDelete[j], newString )
            }
        }
    }
    return newString
}