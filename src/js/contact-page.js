import Street from '/src/jpg/street.jpg'
import Instagram from '/src/svg/instagram.svg'
import Twitter from '/src/svg/twitter.svg'
import Facebook from '/src/svg/facebook.svg'
import Github from '/src/svg/github.svg'
import Phone from '/src/png/phone.png'
import Mail from '/src/png/email.png'
import Place from '/src/png/place.png' 
// contact content 
function contactPage() {
    const content = document.getElementById('content');
    const main = document.createElement('main'); 
    main.classList.add('contact');
    const contactContainer = document.createElement('div'); 
    contactContainer.classList.add('contact-container'); 
    const listContainer = document.createElement('div');
    listContainer.classList.add('list-container'); 
    const contactUl = document.createElement('ul');
    const contactH2 = document.createElement('h2'); 
    contactH2.textContent = 'Contact Us'; 
    const contactArr = ['+ (1) 435-207-8679', 'korean-street@email.com', '12234 fake st SE'];
    const socialDiv = document.createElement('div');
    socialDiv.setAttribute('id', 'contact-social'); 
    contactUl.appendChild(contactH2); 
    // links 
    // phone icon
    const link1 = document.getElementById('link-0');
    const phone = new Image();
    phone.src = Phone;  
    // mail icon
    const link2 = document.getElementById('link-1');
    const mail = new Image();
    mail.src = Mail; 
    // location icon 
    const link3 = document.getElementById('link-2');
    const place = new Image();
    place.src = Place; 
    const iconsArr = [phone, mail, place];
    for(let i = 0; i < contactArr.length; i++) {
        const li = document.createElement('li'); 
        const a = document.createElement('a');
        a.setAttribute('href', '#'); 
        a.textContent = contactArr[i];
        li.append(iconsArr[i], a); 
        contactUl.appendChild(li); 
    }
    // instagram logo  
    const instagramLogo = new Image();
    instagramLogo.src = Instagram;
    instagramLogo.classList.add('contact-logo'); 
    // twitter logo 
    const twitterLogo = new Image(); 
    twitterLogo.src = Twitter; 
    twitterLogo.classList.add('contact-logo');
    // facebook logo    
    const facebookLogo = new Image(); 
    facebookLogo.src = Facebook;
    facebookLogo.classList.add('contact-logo');
    // github logo
    const githubLogo = new Image(); 
    githubLogo.src = Github; 
    githubLogo.classList.add('contact-logo'); 
    listContainer.append(contactUl, socialDiv);
    socialDiv.append(instagramLogo, twitterLogo, facebookLogo, githubLogo);
    // google maps 
    const googleMaps = document.createElement('div'); 
    googleMaps.setAttribute('id', 'map');   
    contactContainer.appendChild(googleMaps); 
    // background image
    const backgroundImg = new Image();
    backgroundImg.src = Street; 
    backgroundImg.setAttribute('id', 'contact-background-img'); 
    contactContainer.appendChild(listContainer);
    // appending elements to the DOM 
    content.appendChild(main);
    main.append(backgroundImg, contactContainer)
}
export default contactPage
