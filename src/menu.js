
import rice from "./img/jollof.jpg";
import menuItemsList from "./menuItems";

function createMenuItem(name, type, price, picture) {
    const menuItem = document.createElement('div');
    menuItem.style.border = '2px solid #DEDEDE';
    //menuItem.style.padding = '20px';
    menuItem.style.display = 'flex';
    menuItem.style.justifyContent = 'space-between';

    const foodDescriptionContainer = document.createElement('div');
    //foodDescriptionContainer.style.display = 'flex';
    //foodDescriptionContainer.style.flexDirection = 'column';
    foodDescriptionContainer.style.padding = '20px';


    const foodItem = document.createElement('p');
    foodItem.textContent = name;
    foodItem.style.fontWeight = 'bold';
    foodItem.style.paddingBottom = '5px';
    foodItem.style.color = 'black';

    const foodType = document.createElement('p');
    foodType.textContent = type;
    foodType.style.paddingBottom = '5px';
    foodType.style.color = 'gray';

    const foodPrice = document.createElement('p');
    foodPrice.textContent = price;
    foodPrice.style.color = 'black';

    const foodPic = document.createElement('img');
    foodPic.src = picture;
    foodPic.style.height = '150px';
    foodPic.style.width = '150px';
    foodPic.style.objectFit = 'cover';
    foodPic.style.display = 'flex';
    foodPic.style.flexDirection = 'flex-end';

    foodDescriptionContainer.appendChild(foodItem);
    foodDescriptionContainer.appendChild(foodType);
    foodDescriptionContainer.appendChild(foodPrice);
    foodDescriptionContainer.style.paddingTop = '30px';

    menuItem.appendChild(foodDescriptionContainer);
    menuItem.appendChild(foodPic);



    return menuItem;
}

// Create two separate menu items
/*
const menuItem1 = createMenuItem();
const menuItem2 = createMenuItem();
const menuItem3 = createMenuItem();
const menuItem4 = createMenuItem();
const menuItem5 = createMenuItem();
const menuItem6 = createMenuItem();
const menuItem7 = createMenuItem();
const menuItem8 = createMenuItem(); */

export default function createMenuPage() {
    const divContainer = document.createElement('div');
    divContainer.style.paddingLeft = '100px';
    divContainer.style.paddingRight = '100px';
    divContainer.style.marginTop = '20px';


    const divMenuContainer = document.createElement('div');


    const firstLine = document.createElement('p');
    firstLine.textContent = 'Popular items';
    firstLine.style.color = 'black';
    firstLine.style.fontWeight = 'bold';
    firstLine.style.fontSize = '24px';
    firstLine.style.paddingTop = '40px';
    firstLine.style.paddingBottom = '2px';
    const secondLine = document.createElement('p');
    secondLine.textContent = 'The most commonly known and popular items provided in this restaurant';
    secondLine.style.paddingBottom = '20px';
    secondLine.style.color = 'black';

    divContainer.appendChild(firstLine);
    divContainer.appendChild(secondLine);


    //divMenuContainer.style.backgroundColor = '#EEEBE4';

    divMenuContainer.style.display = 'grid';
    divMenuContainer.style.gridTemplateColumns = '1fr 1fr';
    divMenuContainer.style.gridTemplateRows = '1fr 1fr';
    divMenuContainer.style.gap = '20px';

    //menu item



    for (let i = 0; i < menuItemsList.length; i++) {
        const item = menuItemsList[i];
        const menuItem = createMenuItem(item.name, item.type, item.price, item.picture);
        divMenuContainer.appendChild(menuItem);
    }

    /*
    divMenuContainer.appendChild(menuItem1);
    divMenuContainer.appendChild(menuItem2);
    divMenuContainer.appendChild(menuItem3);
    divMenuContainer.appendChild(menuItem4);
    divMenuContainer.appendChild(menuItem5);
    divMenuContainer.appendChild(menuItem6);
    divMenuContainer.appendChild(menuItem7);
    divMenuContainer.appendChild(menuItem8); */

    divContainer.style.backgroundColor = 'white';
    divContainer.style.paddingBottom = '20px';

    divContainer.appendChild(divMenuContainer);
   // divContainer.innerHTML ='text';

    return divContainer;

}
