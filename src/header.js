import Instagram from '/src/svg/instagram.svg';
import Twitter from '/src/svg/twitter.svg'; 
import Facebook from '/src/svg/facebook.svg';
import Github from '/src/svg/github.svg'; 
import menuPage from './menu-page';

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
            home.style.borderBottom = '4px solid #2ECBE9';
            removeContent();
        } else if (e.target.id === 'menu-link') { 
            const menu = document.getElementById('menu-link');
            menu.style.borderBottom = '4px solid #2ECBE9';
            removeContent();
            menuPage(); 
        } else if (e.target.id === 'contact-link') {
            const contact = document.getElementById('contact-link');
            contact.style.borderBottom = '4px solid #2ECBE9';
            removeContent();
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
    main.remove();
}

export default header