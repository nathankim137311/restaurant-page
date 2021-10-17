import Food from './src/jpg/street-food.jpg';
import Squid from './src/png/red-octopus.png'; 
import Street from './src/jpg/street.jpg';
// main content
function homePage() {
    const content = document.getElementById('content');
    const main = document.createElement('main'); 
    main.classList.add('home');
    // background image
    const backgroundImg = new Image(); 
    backgroundImg.src = Street; 
    backgroundImg.setAttribute('id', 'home-background-img');
    // main container 
    const mainContainer = document.createElement('div');
    mainContainer.setAttribute('id', 'main-container'); 
    // info card 
    const infoCard = document.createElement('div');
    infoCard.classList.add('info-card'); 
    // about section
    const about = document.createElement('div'); 
    about.setAttribute('id', 'about'); 
    about.classList.add('card-div');
    const aboutH2 = document.createElement('h2');
    aboutH2.classList.add('card-headings'); 
    aboutH2.textContent = 'About'; 
    const aboutP = document.createElement('p');
    aboutP.textContent = 'Korean Street makes the best korean street food in k-town, with a variety of options like tteok-bokki, gimbap, bibimbap, corn dogs, and delicious seafood pajeon.'
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
    // picture
    const foodPicture = new Image(); 
    foodPicture.src = Food; 
    // squid logo 
    const squidLogo = new Image();
    squidLogo.src = Squid; 
    squidLogo.setAttribute('id', 'squid-logo');
    // appending elements 
    content.appendChild(main);
    main.append(backgroundImg, mainContainer, squidLogo);
    mainContainer.append(infoCard, foodPicture); 
    infoCard.append(about, hours);
}
export default homePage 