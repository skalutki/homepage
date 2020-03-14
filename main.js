const name = 'Karol';
const nick = 'Sk@lutki';
const age = 31

console.log(age);
console.log(name);

console.log(`Nazywam sie ${name} i mam ${age} lat.`);

const test = document.querySelector('.test__paragraph--js');

test.innerHTML = `Nazywam sie ${name} i mam ${age} lat.`;




const welcome = (Wname, Wage) => {
    console.log(`Na imię mam ${Wname} i mam ${Wage} lat`);
}

welcome('Tomek', 31);