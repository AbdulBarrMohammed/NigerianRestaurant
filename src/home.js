import "./style.css";
import rice from "./img/jollof.jpg";

export default function createHomePage() {
    const divContainer = document.createElement('div');
    divContainer.style.display = 'grid';
    divContainer.style.gridTemplateColumns = '1fr 1fr';
    divContainer.style.gap = '20px';


    const divLeft = document.createElement('div');
    divLeft.style.display = 'flex';
    divLeft.style.justifyContent = 'center';
    divLeft.style.alignContent = 'center';
    divLeft.style.flexDirection = 'column';
    divLeft.style.padding = '30px';


    const image = document.createElement('img');

    const divRight = document.createElement('div');
    const callToAction = document.createElement('p');
    const explanation = document.createElement('p');
    const discoverBtn = document.createElement('p');
    callToAction.textContent = 'COME EAT AT THE EKO';
    callToAction.style.fontWeight = 'bold';
    callToAction.style.fontSize = '2rem';
    explanation.textContent = 'Come and eat at the world famous and award winning Nigerian restuarant, The EKO and explore what we have to offer';
    discoverBtn.textContent = 'Discover EKO';
    discoverBtn.style.width = '20%';
    discoverBtn.style.backgroundColor = '#EEEBE4';
    discoverBtn.style.color = '#3A5942';
    discoverBtn.style.border = '3px solid #3A5942';
    discoverBtn.style.padding = '20px';
    discoverBtn.style.fontWeight = 'bold';
    discoverBtn.style.fontSize = '15px';
    discoverBtn.style.textAlign = 'center';


    divRight.style.display = 'flex';
    divRight.style.justifyContent = 'center';
    divRight.style.flexDirection = 'column';
    divRight.style.gap = '25px';
    divRight.style.padding = '30px';



    divRight.appendChild(callToAction);
    divRight.appendChild(explanation);
    divRight.appendChild(discoverBtn);



    image.src = rice;
    image.style.height = '400px';
    image.style.objectFit = 'cover';
    image.style.paddingTop = '100px';
    image.style.paddingLeft = '50px';
    divLeft.className = 'left-side';
    divLeft.style.display = 'flex';
    divLeft.style.justifyContent = 'center';
    divLeft.style.flexDirection = 'column';




    divLeft.appendChild(image);
    //divContent.appendChild(divLeft);
    //divContent.appendChild(divRight);
    divContainer.appendChild(divLeft);
    divContainer.appendChild(divRight);

    return divContainer;

}
