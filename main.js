const name = 'Karol';
const nick = 'Sk@lutki';
const age = 31

console.log(age);
console.log(name);

console.log(`Nazywam sie ${name} i mam ${age} lat.`);

const test = document.querySelector('.test__paragraph--js');

test.innerHTML = `Nazywam sie ${name} i mam ${age} lat.`;


function welcome(x, y, z) {
    const x = 'name';
    x.name = 'Tomek';
    const y = 'nick';
    y.nick = 'Andrzej';
    const z = 'age';
    z.age = 22;
    return;
}

console.log('witam Cię' (welcome())('na mojej stronie'));