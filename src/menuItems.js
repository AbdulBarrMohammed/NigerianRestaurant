import rice from "./img/jollof.jpg";
import gari from "./img/gari.jpg";
import goatMeat from "./img/goatMeat.jpg";
import meatPie from "./img/meatPie.jpg";
import pepperSoup from "./img/pepperSoup.jpg";
import puffPuff from "./img/puffPuff.jpg";
import riceAndStew from "./img/riceAndStew.jpg";
import egusi from "./img/egusi.jpg";


const menuItemsList = [
    {
        name: 'Jollof Rice',
        type: 'Dinner/Lunch',
        price: '$5.49',
        picture: rice,
    },
    {
        name: 'Gari',
        type: 'Dinner/Lunch/Breakfast',
        price: '$1.15',
        picture: gari
    },
    {
        name: 'Rice and Stew',
        type: 'Dinner/Lunch',
        price: '$7.49',
        picture: riceAndStew
    },{
        name: 'Pepper Soup',
        type: 'Dinner/Lunch',
        price: '$4.49',
        picture: pepperSoup
    },
    {
        name: 'Goat Meat',
        type: 'Dinner/Lunch',
        price: '$8.89',
        picture: goatMeat
    },
    {
        name: 'Puff Puff',
        type: 'Dinner/Lunch',
        price: '$2.10',
        picture: puffPuff
    },
    {
        name: 'Egusi Soup',
        type: 'Dinner/Lunch',
        price: '$11.49',
        picture: egusi,
    },
    {
        name: 'Meat Pie',
        type: 'Dinner/Lunch',
        price: '$8.49',
        picture: meatPie
    }
]


export default menuItemsList;
