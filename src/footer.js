// footer 
function footer() {
    const content = document.getElementById('content');
    const footer = document.createElement('footer');
    // footer-info div
    const footerDiv = document.createElement('div');
    footerDiv.setAttribute('id', 'footer-info');
    // explore list
    const exploreUl = document.createElement('ul');
    const exploreLi = document.createElement('li');
    const exploreH3 = document.createElement('h3');
    exploreUl.setAttribute('id', 'explore');
    exploreH3.textContent = 'Explore'
    exploreH3.classList.add('footer-headings');
    exploreUl.appendChild(exploreLi);
    exploreLi.appendChild(exploreH3); 
    let exploreLinks = ['Home', 'About', 'Careers', 'Menu'];
    for(let i = 0; i < exploreLinks.length; i++) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = exploreLinks[i]; 
        a.setAttribute('href', '#'); 
        li.appendChild(a); 
        exploreUl.appendChild(li); 
    }
    // visit list
    const visitUl = document.createElement('ul');
    const visitLi1 = document.createElement('li');
    const visitH3 = document.createElement('h3');
    const visitLi2 = document.createElement('li');
    const visitP = document.createElement('p');
    visitH3.textContent = 'Visit';
    visitH3.classList.add('footer-headings');
    visitP.textContent = '1223 fake st SE, fake city, 54321, state, USA'; 
    visitLi1.appendChild(visitH3); 
    visitLi2.appendChild(visitP);
    visitUl.append(visitLi1, visitLi2);
    // follow list 
    const followUl = document.createElement('ul');
    const followLi = document.createElement('li');
    const followH3 = document.createElement('h3');
    followUl.setAttribute('id', 'follow');
    followH3.classList.add('footer-headings');
    followH3.textContent = 'Follow';
    let followLinks = ['Instagram', 'Twitter', 'Yelp']; 
    for(let i = 0; i < followLinks.length; i++) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = followLinks[i];
        a.setAttribute('href', '#');
        li.appendChild(a);
    }
    followUl.appendChild(followLi);
    followLi.appendChild(followH3);
    // contact list
    const contactUl = document.createElement('ul'); 
    const contactLi1 = document.createElement('li');
    const contactH3 = document.createElement('h3');
    const contactLi2 = document.createElement('li');
    const contactA = document.createElement('a');
    const contactLi3 = document.createElement('li');
    contactUl.setAttribute('id', 'contact');
    contactH3.classList.add('footer-headings');
    contactH3.textContent = 'Contact / hours'; 
    contactLi2.textContent = 'Phone:'; 
    contactA.textContent = '435-207-8679';
    contactLi3.textContent = 'Dine-in/take-out/delivery 2-6 AM friday-saturday'
    contactLi2.appendChild(contactA); 
    contactUl.append(contactLi1, contactLi2, contactLi3);
    contactLi1.appendChild(contactH3);
    // copyright-info div
    const copyDiv = document.createElement('div');
    const copyP = document.createElement('p');
    copyDiv.setAttribute('id', 'copyright-info');
    copyDiv.appendChild(copyP);
    copyP.textContent = '2021 Korean Street. All Rights Reserved.'; 
    // appending elements to the DOM
    content.appendChild(footer);
    footer.append(footerDiv, copyDiv);
    footerDiv.appendChild(exploreUl, visitUl, followUl, contactUl);
}

export default footer