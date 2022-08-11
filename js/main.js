// 1. feladat 

'use strict';

const handleClick = () => {
    const buttons = document.querySelectorAll('.button');
    buttons.forEach( (btn) => btn.addEventListener('click', () => {
    console.log(btn.innerHTML);
})
);
};