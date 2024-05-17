import "./style.css";
import createHomePage from './home';
import createMenuPage from "./menu";
alert("this is an alert alert");
const divContent = document.querySelector('#content');



const homeBtn = document.querySelector('.homeBtn');
const menuBtn = document.querySelector('.menuBtn');

homeBtn.addEventListener('click', () => {

    divContent.innerHTML = '';
    divContent.appendChild(createHomePage());

})

menuBtn.addEventListener('click', () => {
    divContent.innerHTML = '';
    divContent.appendChild(createMenuPage());
})
