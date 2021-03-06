import Instagram from '/src/svg/instagram.svg';
import Twitter from '/src/svg/twitter.svg'; 
import Facebook from '/src/svg/facebook.svg';
import Github from '/src/svg/github.svg'; 
import homePage from './home-page';
import menuPage from './menu-page';
import contactPage from './contact-page';
import footer from './footer.js'
// header element
function header() {
    const content = document.getElementById('content');
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    h1.textContent = 'Korean Street';
    // unordered list nav-menu
    const nav = document.createElement('ul');
    nav.setAttribute('id', 'nav-menu');
     // a tags with ids and links
    const homeLi = document.createElement('li');
    const home = document.createElement('a'); 
    home.textContent = 'Home';
    home.setAttribute('id', 'home-link');
    home.setAttribute('href', '#'); // link
    homeLi.appendChild(home); 
    const menuLi = document.createElement('li');
    const menu = document.createElement('a');
    menu.textContent = 'Menu';
    menu.setAttribute('id', 'menu-link');
    menu.setAttribute('href', '#'); // link
    menuLi.appendChild(menu); 
    const contactLi = document.createElement('li');
    const contact = document.createElement('a');
    contact.textContent = 'Contact';
    contact.setAttribute('id', 'contact-link');
    contact.setAttribute('href', '#'); // link 
    contactLi.appendChild(contact); 
    // navLinks array 
    const navLinks = [home, menu, contact];
    navLinks.forEach(link => link.addEventListener('click', (e) => {
        if (e.target.id === 'home-link') { // deletes child nodes of tag main and adds new content 
            const home = document.getElementById('home-link');
            console.log(home); 
            removeContent();
            homePage();
            footer(); 
        } else if (e.target.id === 'menu-link') { 
            const menu = document.getElementById('menu-link');
            console.log(menu); 
            removeContent();
            menuPage();
            footer(); 
        } else if (e.target.id === 'contact-link') {
            const contact = document.getElementById('contact-link');
            console.log(contact); 
            removeContent();
            contactPage(); 
            initMap(); 
            footer(); 
        }
    }));
    // unordered list social-links
    const social = document.createElement('ul');
    social.setAttribute('id', 'social-links');
    // a tags with ids 
    const instagramLi = document.createElement('li');
    const instagramA = document.createElement('a')
    const instagramLogo = new Image();
    instagramLogo.src = Instagram;
    // img properties
    instagramA.setAttribute('href', '#'); // link
    instagramLi.appendChild(instagramA); 
    instagramA.appendChild(instagramLogo);
    const twitterLi = document.createElement('li');
    const twitterA = document.createElement('a');
    const twitterLogo = new Image();
    twitterLogo.src = Twitter;
    // img properties
    twitterA.setAttribute('href', '#'); // link
    twitterLi.appendChild(twitterA);
    twitterA.appendChild(twitterLogo);
    const facebookLi = document.createElement('li');
    const facebookA = document.createElement('a');
    const facebookLogo = new Image();
    facebookLogo.src = Facebook;
    // img properties
    facebookA.setAttribute('href', '#'); // link
    facebookLi.appendChild(facebookA); 
    facebookA.appendChild(facebookLogo);
    const githubLi = document.createElement('li');
    const githubA = document.createElement('a');
    const githubLogo = new Image();
    githubLogo.src = Github; 
    // img properties
    githubA.setAttribute('href', '#'); // link
    githubLi.appendChild(githubA); 
    githubA.appendChild(githubLogo);
    // apending elements to DOM
    content.appendChild(header);
    header.append(h1, nav, social);
    nav.append(homeLi, menuLi, contactLi); 
    social.append(instagramLi, twitterLi, facebookLi, githubLi);
}
function removeContent() {
    const main = document.querySelector('main');
    const footer = document.querySelector('footer');
    main.remove();
    footer.remove(); 
}
function initMap() {   
    // location of dmz
    const dmz = { lat: 37.916461145505295, lng: 126.69780649205406 };
    // the map, centered at dmz
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 6, 
        center: dmz,
    });
    // the marker, positioned at dmz
    const marker = new google.maps.Marker({
        position: dmz,
        map: map, 
    }); 
}
export default header