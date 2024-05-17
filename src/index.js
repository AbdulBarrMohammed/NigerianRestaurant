import "./style.css";
import createHomePage from './home';
import createMenuPage from "./menu";
import { createAboutPage } from "./about";

const divContent = document.querySelector('#content');
divContent.appendChild(createHomePage());



const homeBtn = document.querySelector('.homeBtn');
const menuBtn = document.querySelector('.menuBtn');
const aboutBtn = document.querySelector('.aboutBtn');

homeBtn.addEventListener('click', () => {

    divContent.innerHTML = '';
    divContent.appendChild(createHomePage());

})

menuBtn.addEventListener('click', () => {
    divContent.innerHTML = '';
    divContent.appendChild(createMenuPage());
})

aboutBtn.addEventListener('click', () => {
    divContent.innerHTML = '';
    divContent.appendChild(createAboutPage());
})
