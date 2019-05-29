// function remove (array, index) {
//     return array.slice(0, index)
//     .concat(array.slice(index + 1));    
// }

// console.log(remove(['a', 'b', 'c','d','e'], 2));

/* 3 dot notation*/

// let words = ['is', 'my'];
// console.log ('Kali', ...words, 'husband');
// console.log ('But coding', ...words, 'life');

/* Math.random*/

function randomNum() {
    let x = Math.round(Math.random() * 100);
    
    console.log(x);
}
randomNum();