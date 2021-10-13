// main content
// <img id="banner-img" src="/images/bokeh.jpg" alt=""></img>
import Food from '/src/jpg/street-food.jpg';

function main() {
    const content = document.getElementById('content');
    const main = document.createElement('main'); 
    // background image
    const backgroundImage = document.createElement('div');
    backgroundImage.setAttribute('id', 'background-image');


    // main container 
    const mainContainer = document.createElement('div');
    mainContainer.setAttribute('id', 'main-container'); 
    // info card 
    const infoCard = document.createElement('div');
    infoCard.classList.add('info-card'); 
    // about section
    const about = document.createElement('div'); 
    about.classList.add('card-div');
    const aboutH2 = document.createElement('h2');
    aboutH2.classList.add('card-headings'); 
    aboutH2.textContent = 'About'; 
    const aboutP = document.createElement('p');
    aboutP.textContent = 'Korean Street makes the best korean street food in k-town, with a variety of options like tteok-bokki, gimbap, bibimbap, corn dogs, and delicious seafood pajeon, all delivered with a smile and fast service.'
    about.append(aboutH2, aboutP);
    // hours section
    const hours = document.createElement('div');
    hours.classList.add('card-div');
    const hoursH2 = document.createElement('h2');
    hoursH2.classList.add('card-headings');
    hoursH2.textContent = 'Hours';
    const hoursP = document.createElement('p');
    hoursP.textContent = 'M-F: 8pm to 3am';
    const hoursP2 = document.createElement('p');
    hoursP2.textContent = 'Sat: 6pm to 12am';
    const hoursP3 = document.createElement('p');
    hoursP3.textContent = 'Sunday: closed'; 
    hours.append(hoursH2, hoursP, hoursP2, hoursP3); 
    // locations sections 
    const location = document.createElement('div');
    location.classList.add('card-div');
    const locationH2 = document.createElement('h2');
    locationH2.classList.add('card-headings');
    locationH2.textContent = 'Find Us';
    const locationP = document.createElement('p');
    locationP.textContent = '1223 fake st SE, fake city, 54321, state, USA';
    location.append(locationH2, locationP);
    // picture
    const foodPicture = new Image(); 
    foodPicture.src = Food; 
    // appending elements 
    content.appendChild(main);
    main.append(backgroundImage, mainContainer);
    mainContainer.append(infoCard, foodPicture); 
    infoCard.append(about, hours, location);
}

export default main 