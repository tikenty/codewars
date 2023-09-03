/* ❓DESCRIPTION
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
 */

/* ✅SOLUTION */
function abbrevName(name){

    // code away
    return name.split(' ').map(x => x[0].toUpperCase()).join('.');
}