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
const navigationButtonX = document.querySelector('.navigation__button__X--js');

navigationButton.addEventListener('click', (e) => {

    const navigationList = document.querySelector('.navigation__list--js');

    navigationList.classList.add('navigation__list--visible');
    navigationButton.classList.add('navigation__button--notVisible');
    //Powyzej - dodanie do przycisku hamburger menu akcji pokaz nawikacje, zmien widocznosc przycisku z hamburger menu na X
    navigationButtonX.addEventListener('click', (e) => {

        navigationButton.classList.remove('navigation__button--notVisible');
        navigationList.classList.remove('navigation__list--visible');
        //Powyzej - dodanie do przycisku X akcji po klikniecie zdjecie widocznosci nawigacji oraz zamiana widocznosci ikony na hamburger menu
    });
});