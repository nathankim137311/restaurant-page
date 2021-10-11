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
    home.setAttribute('id', 'home');
    home.setAttribute('href', '#'); // link
    homeLi.appendChild(home); 
    const menuLi = document.createElement('li');
    const menu = document.createElement('a');
    menu.textContent = 'Menu';
    menu.setAttribute('id', 'menu');
    menu.setAttribute('href', '#'); // link
    menuLi.appendChild(menu); 
    const contactLi = document.createElement('li');
    const contact = document.createElement('a');
    contact.textContent = 'Contact';
    contact.setAttribute('id', 'contact');
    contact.setAttribute('href', '#'); // link 
    contactLi.appendChild(contact); 
    // navLinks array 
    const navLinks = [home, menu, contact];
    navLinks.forEach(link => link.addEventListener('click', (e) => {
        if (e.target.id === 'home') {
            const home = document.getElementById('home');
            home.style.borderBottom = '4px solid #2ECBE9';
        } else if (e.target.id === 'menu') {
            const menu = document.getElementById('menu');
            menu.style.borderBottom = '4px solid #2ECBE9';
        } else if (e.target.id === 'contact') {
            const contact = document.getElementById('contact');
            contact.style.borderBottom = '4px solid #2ECBE9';
        }
    }));
    // unordered list social-links
    const social = document.createElement('ul');
    social.setAttribute('id', 'social-links');
    // a tags with ids 
    const instagramLi = document.createElement('li');
    const instagramA = document.createElement('a')
    const instagramLogo = document.createElement('img');
    // img properties
    instagramLogo.setAttribute('src', './images/instagram.svg');
    instagramA.setAttribute('href', '#'); // link
    instagramLi.appendChild(instagramA); 
    instagramA.appendChild(instagramLogo);
    const twitterLi = document.createElement('li');
    const twitterA = document.createElement('a');
    const twitterLogo = document.createElement('img');
    // img properties
    twitterLogo.setAttribute('src', './images/twitter.svg');
    twitterA.setAttribute('href', '#'); // link
    twitterLi.appendChild(twitterA);
    twitterA.appendChild(twitterLogo);
    const facebookLi = document.createElement('li');
    const facebookA = document.createElement('a');
    const facebookLogo = document.createElement('img');
    // img properties
    facebookLogo.setAttribute('src', './images/facebook.svg');
    facebookA.setAttribute('href', '#'); // link
    facebookLi.appendChild(facebookA); 
    facebookA.appendChild(facebookLogo);
    const githubLi = document.createElement('li');
    const githubA = document.createElement('a');
    const githubLogo = document.createElement('img');
    // img properties
    githubLogo.setAttribute('src', './images/github.svg');
    githubA.setAttribute('href', '#'); // link
    githubLi.appendChild(githubA); 
    githubA.appendChild(githubLogo);
    // apending elements to DOM
    content.appendChild(header);
    header.append(h1, nav, social);
    nav.append(homeLi, menuLi, contactLi); 
    social.append(instagramLi, twitterLi, facebookLi, githubLi);
}

export default header