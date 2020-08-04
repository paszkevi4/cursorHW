import React from 'react'
import loggingResults from './console'
import {getMaxDigit, degreeCounter, namePrettier, salaryCount,
        getRandomNumber, countLetter, convertCurrency, createPassword,
        deleteLetters, isPalyndrom, deleteDuplicateLetter} from './functions'

loggingResults()



let Card = ( props ) => {
    const textId = 'card' + props.id
    const btnId = 'btn' + props.id
    return (
		<div class="col s4">
			<div className="card ">
				<div className="card-content">
					<span className="card-title">{props.title}</span>
					<p id={textId} >{props.text}</p>
				</div>
				<div className="card-action">
					<a id={btnId} className="waves-effect green btn">Змiнити</a>
				</div>
			</div>
		</div>
    )
}

export const HomeWork3 = () => {
    return (
        <div>
            <div className="row">
                <Card title='1. Виводить найбільшу цифру' text='123' id='1'/>
                <Card title='1. Виводить найбільшу цифру' text='123' id='2'/>
                <Card title='1. Виводить найбільшу цифру' text='123' id='3'/>
            </div>
            <div className="row">
                <Card title='4. ЗП після податків' text='123' id='4'/>
                <Card title='5. Число в діапазоні' text='123' id='5'/>
                <Card title='6. Повторення букви' text='123' id='6'/>
            </div>
            <div className="row">
                <Card title='7. Конвертор' text='123' id='7'/>
                <Card title='8. Випадковий пароль' text='123' id='8'/>
                <Card title='9. Видалення небхiдних букв' text='123' id='9'/>
            </div>
            <div className="row">
                <Card title='10. Паліндром чекер' text='123' id='10'/>
                <Card title='11. Видалення дублiкацiй' text='123' id='11'/>
            </div>
        </div>

/*        <div class="row">
            {Card('4. ЗП після податків', f[3], "4")}
            {Card('5. Число в діапазоні', f[4], "5")}
            {Card('6. Повторення букви', f[5], "6")}
        </div>
        <div class="row">
            {/!*${Card('7. Конвертор', `For ${varsForTesting.currency} dollars you can get ${willGet.getSum()}`, "7")}*!/}
            {Card('8. Випадковий пароль', f[7], "8")}
            {Card('9. Видалення небхiдних букв', f[8], "9")}
        </div>
        <div className="row">
            {Card('10. Паліндром чекер', f[9], "10")}
            {Card
        </div>*/
    )
}