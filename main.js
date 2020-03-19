const name = 'Karol';
const nick = 'Sk@lutki';
const age = 31

console.log(age);
console.log(name);

console.log(`Nazywam sie ${name} i mam ${age} lat.`);

const test = document.querySelector('.test__paragraph--js');






const welcome = (Wname, Wage) => {
    console.log(`Na imię mam ${Wname} i mam ${Wage} lat`);
}

welcome('Tomek', 31);

const navigationButton = document.querySelector('.navigation__button--js');

navigationButton.addEventListener('click', (e) => {

    const navigationList = document.querySelector('.navigation__list--js');

    navigationList.classList.toggle('navigation__list--visible');

});