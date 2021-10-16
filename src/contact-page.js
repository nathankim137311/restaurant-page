import Street from '/src/jpg/street.jpg'
import Google from '/src/jpg/google-maps.jpg'
import Instagram from '/src/svg/instagram.svg'
import Twitter from '/src/svg/twitter.svg'
import Facebook from '/src/svg/facebook.svg'
import Github from '/src/svg/github.svg'
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
    const contactP = document.createElement('p'); 
    contactP.textContent = 'contact information below';
    const contactArr = ['+435-207-8679', 'korean-street@email.com', '12234 fake st SE'];
    const socialDiv = document.createElement('div');
    socialDiv.setAttribute('id', 'contact-social'); 
    contactUl.append(contactH2, contactP); 
    for(let i = 0; i < contactArr.length; i++) {
        const li = document.createElement('li'); 
        const a = document.createElement('a');
        a.textContent = contactArr[i];
        li.appendChild(a); 
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
    const googleImg = new Image(); 
    googleImg.src = Google; 
    googleImg.setAttribute('id', 'google-img'); 
    contactContainer.appendChild(googleImg); 
    // background image 
    const backgroundImg = new Image();
    backgroundImg.src = Street; 
    backgroundImg.setAttribute('id', 'contact-background-img'); 
    contactContainer.appendChild(listContainer);
    // appending elements to the DOM 
    content.appendChild(main);
    main.append(backgroundImg, contactContainer); 
}

export default contactPage
