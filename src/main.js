// main content
// <img id="banner-img" src="/images/bokeh.jpg" alt=""></img>

function main() {
    const content = document.getElementById('content');
    const main = document.createElement('main'); 
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
    hours.appendChild(hoursH2); 
    // locations sections 
    const location = document.createElement('div');
    location.classList.add('card-div');
    const locationH2 = document.createElement('h2');
    locationH2.classList.add('card-headings');
    locationH2.textContent = 'Find Us';
    location.appendChild(locationH2);



    const p = document.createElement('p'); 
    p.textContent = 'Korean Street makes the best korean street food in k-town, with a variety of options like tteok-bokki, gimbap, bibimbap, corn dogs, and delicious seafood pajeon, all delivered with a smile and fast service. '
    content.appendChild(main);
    main.appendChild(infoCard); 
    infoCard.append(about, hours, location);
}

export default main 