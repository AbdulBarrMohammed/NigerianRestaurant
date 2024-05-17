import puffPuff from "./img/puffPuff.jpg";

export function createAboutPage() {
    const divContainer = document.createElement('div');
    divContainer.style.display = 'flex';
    divContainer.style.flexDirection = 'column';
    divContainer.style.justifyContent = 'center';
    divContainer.style.alignItems = 'center';
    divContainer.style.padding = '70px';
    divContainer.style.paddingTop = '20px';
    divContainer.style.textAlign = 'center';

    const titleTag = document.createElement('p');
    titleTag.textContent = 'ABOUT US';

    // style title
    titleTag.style.fontFamily = 'Times New Roman';
    titleTag.style.fontSize = '48px';
    //titleTag.style.fontWeight = 'bold';
    titleTag.style.paddingBottom = '10px';

    const horizonatalLine = document.createElement('div');
    horizonatalLine.style.height = '1px';
    horizonatalLine.style.width = '60px';
    horizonatalLine.style.backgroundColor = 'gray';
    horizonatalLine.style.marginBottom = '30px';

    const secondTitleTag = document.createElement('p');
    secondTitleTag.textContent = 'OUR STORY FROM THE START';

    //style second tag
    secondTitleTag.style.color = 'black';
    secondTitleTag.style.fontWeight = 'bold';
    secondTitleTag.style.marginBottom = '10px';


    const shortStory = document.createElement('p');
    shortStory.textContent = 'Eko was born out of a deep love for Nigerian cuisine and a desire to share the rich culinary heritage of our homeland with the world. Our founders, have always been passionate about the bold, aromatic flavors that define Nigerian food';
    shortStory.style.color = 'gray';
    shortStory.style.width = '400px';

    const bottomContainer = document.createElement('div');
    bottomContainer.style.display = 'flex';
    bottomContainer.style.gap = '20px';
    bottomContainer.style.padding = '10px';
    bottomContainer.style.marginTop = '20px';

    const leftImage = document.createElement('img');
    const rightTextContainer = document.createElement('div');

    leftImage.src = puffPuff;
    leftImage.style.height = '300px';
    leftImage.style.width = '500px';
    leftImage.style.objectFit = 'cover';


    const mainStory = document.createElement('p');
    const subheading = document.createElement('p');

    subheading.textContent = 'OUR MISSION AND WHY WE DO WHAT WE DO';
    subheading.style.paddingTop = '30px';
    subheading.style.fontWeight = 'bold';
    subheading.style.color = 'black';

    mainStory.textContent = 'Our mission is to provide an unforgettable dining experience that celebrates the essence of Nigerian culture. We believe food is a universal language that connects people, and through our carefully curated menu, we aim to foster a sense of community and belonging. At Eko, every meal is a celebration, and we are dedicated to ensuring that each guest leaves with a taste of Nigeria and a smile.';
    mainStory.style.textAlign = 'start';
    mainStory.style.width = '400px';
    mainStory.style.paddingLeft = '50px';
    mainStory.style.paddingTop = '10px';
    mainStory.style.color = 'gray';


    rightTextContainer.appendChild(subheading);
    rightTextContainer.appendChild(mainStory);

    bottomContainer.appendChild(leftImage);
    bottomContainer.appendChild(rightTextContainer);





    divContainer.appendChild(titleTag);
    divContainer.appendChild(horizonatalLine);
    divContainer.appendChild(secondTitleTag);
    divContainer.appendChild(shortStory);
    divContainer.appendChild(bottomContainer);

    return divContainer;
}
