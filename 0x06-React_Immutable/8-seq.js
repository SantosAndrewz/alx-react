import { Seq } from 'immutable';

/**
 * Script for a function that filters students with a score >= 70, formats the names.
 * Prints results.
 * @param {Object} grades - Objects with students and their scores.
 */
export default function printBestStudents(grades) {
    const seq = Seq(grades);

    const filteredStud = seq
        .filter(student => student.score >= 70 )
        .map(student => ({
            ...student,
            firstName: student.firstName.charAt(0).toUpperCase() + student.firstName.slice(1),
            lastName: student.lastName.charAt(0).toUpperCase() + student.lastName.slice(1),
        }));
    console.log(filteredStud.toJS());
}