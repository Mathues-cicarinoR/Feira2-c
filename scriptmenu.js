const action = [...document.querySelectorAll('.Menu')]

const openClose = document.querySelector('.menu2');

action.map((el)=> {
    el.addEventListener('click', actions);
});


function actions() {
    openClose.classList.toggle('invisible');
}