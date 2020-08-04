import React from 'react'

const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];
const themedPairs = [];

const getPairs = () => {
    const pairs = []
    let j = 0
    for ( let i = 0; i < students.length; i++) {
        if ( students[i] == 'Олександр' || students[i] == 'Ігор' || students[i] == 'Олексій' ) {
            pairs.push([students[i]])
        } else {
            pairs[j].push(students[i])
            j++
        }
    }
    return pairs
}

const combiner = (pairs, themes) => {
    for ( let i = 0; i < pairs.length ; i++) {
        const pairString = pairs[i].join(' та ')
        themedPairs.push([pairString, themes[i]])
    }
    return themedPairs
}

const markStudents = () => {
    const marked = []
    students.map( (el) => {marked.push([el, marks[students.indexOf(el)]])} )
    return marked
}


/*---------------------------------------переделать----------------------------------*/
const markPairs = () => {
    let finalResult = []
    themedPairs.map( el => { finalResult.push(el) })
    finalResult.map( el => {el.push(Math.ceil(Math.random() * 5)) })
    return finalResult
}
/*---------------------------------------переделать----------------------------------*/

console.log( 'newMade', getPairs(), combiner(getPairs(), themes), markStudents(), markPairs() )
console.log( 'beginning', students, themes, marks, themedPairs )



export const HomeWork4 = () => {
    return (
        <div>
            {/*{DER}*/}
        </div>
    )
}