import Bbq from '/src/jpg/bbq.jpg'
import Soju from '/src/jpg/soju.jpg'
import Jeon from '/src/jpg/jeon.jpg'
import Street from '/src/jpg/street.jpg'
// menu 
function menuPage() {
    const content = document.getElementById('content');
    const main = document.createElement('main'); 
    main.setAttribute('id', 'main-menu'); 
    const menu = document.createElement('div');
    menu.setAttribute('id', 'menu-container'); 
    // background image
    const backgroundImg = new Image(); 
    backgroundImg.src = Street; 
    backgroundImg.setAttribute('id', 'background-img');
    // heading 
    const menuH3 = document.createElement('h2'); 
    menuH3.textContent = 'Menu'; 
    // street food 
    const streetFood = document.createElement('div');
    streetFood.classList.add('menu-divs'); 
    streetFood.setAttribute('id', 'street-food'); 
    const streetFoodH3 = document.createElement('h3');
    streetFoodH3.textContent = 'Street Food';
    const streetFoodUl = document.createElement('ul');
    const streetFoodImage = new Image();
    streetFoodImage.src = Bbq; 
    streetFoodImage.classList.add('food-img');
    const streetFoodItems = ['Tteokbokki', 'Odeng', 'Corn dog', 'Pajeon', 'Yangnyeom tongdak', 'Gimbap'];
    const streetFoodPrice = ['$5.99', '$4.99', '$4.99', '$6.99', '$9.99', '$4.99'];
    streetFoodUl.appendChild(streetFoodH3); 
    for(let i = 0; i < streetFoodItems.length; i++) {
        const li = document.createElement('li'); 
        const p = document.createElement('p');
        p.textContent = streetFoodItems[i] + '...' + streetFoodPrice[i];
        li.appendChild(p); 
        streetFoodUl.appendChild(li); 
    }
    streetFood.append(streetFoodUl, streetFoodImage); 
    // drinks
    const cocktails = document.createElement('div');
    cocktails.classList.add('menu-divs'); 
    cocktails.setAttribute('id', 'cocktails'); 
    const cocktailsH3 = document.createElement('h3');
    cocktailsH3.textContent = 'Cocktails'; 
    const cocktailsUl = document.createElement('ul');
    const cocktailsImage = new Image();
    cocktailsImage.src = Soju;
    cocktailsImage.classList.add('food-img');
    const cocktailsItems = ['The Seoul Mule', 'Korean Yogurt Soju', 'Soju Caipirinha', 'Hongchobulmak', 'Makgeolli', 'Subak Soju']; 
    const cocktailsPrice = ['$12.99', '$10.99', '$11.99', '$10.99', '$10.99', '$14.99']
    cocktailsUl.appendChild(cocktailsH3); 
    for(let i = 0; i < cocktailsItems.length; i++) {
        const li = document.createElement('li'); 
        const p = document.createElement('p');
        p.textContent = cocktailsItems[i] + '...' + cocktailsPrice[i];
        li.appendChild(p); 
        cocktailsUl.appendChild(li); 
    }
    cocktails.append(cocktailsUl, cocktailsImage); 
    // desserts 
    const desserts = document.createElement('div');
    desserts.classList.add('menu-divs'); 
    desserts.setAttribute('id', 'desserts'); // delete later if not needed  
    const dessertsH3 = document.createElement('h3');
    dessertsH3.textContent = 'Deserts'; 
    const dessertsUl = document.createElement('ul');
    const dessertImage = new Image(); 
    dessertImage.src = Jeon; 
    dessertImage.classList.add('food-img'); 
    const dessertItems = ['Patbingsu', 'Bungeoppang', 'Hotteok', 'Songpyeon', 'Dalgona', 'Kkwabaegi']; 
    const dessertPrice = ['$9.99', '$7.99', '$4.99', '$4.99', '$2.99', '$4.99']; 
    dessertsUl.appendChild(dessertsH3);
    for(let i = 0; i < dessertItems.length; i++) {
        const li = document.createElement('li'); 
        const p = document.createElement('p');
        p.textContent = dessertItems[i] + '...' + dessertPrice[i];
        li.appendChild(p); 
        dessertsUl.appendChild(li); 
    }
    desserts.append(dessertsUl, dessertImage);
    // appending elements to DOM
    content.appendChild(main); 
    main.append(backgroundImg, menu);
    menu.append(menuH3, streetFood, cocktails, desserts); 
    /*
    const main = document.getElementsByTagName('main'); 
    const menu = document.createElement('div');
    menu.setAttribute('id', 'menu-container'); 
    // street food 
    const streetFood = document.createElement('div');
    const streetFoodH3 = document.createElement('h3');
    streetFoodH3.textContent = 'Street Food'; 
    // drinks
    const cocktails = document.createElement('div');
    const cocktailsH3 = document.createElement('h3');
    cocktailsH3.textContent = 'Cocktails'; 
    // desserts 
    const desserts = document.createElement('div'); 
    const dessertsH3 = document.createElement('h3');
    dessertsH3.textContent = 'Deserts'; 
    const dessertsUl = document.createElement('ul');
    const dessertItems = ['Patbingsu', 'Bungeoppang', 'Hotteok', 'Songpyeon', 'Dalgona', 'Kkwabaegi']; 
    const dessertPrice = ['$9.99', '$7.99', '$4.99', '$4.99', '$2.99', '$4.99']; 
    for(let i = 0; i < dessertItems.length; i++) {
        const li = document.createElement('li'); 
        const p = document.createElement('p');
        p.textContent = dessertItems[i] + '...' + dessertPrice[i];
        li.appendChild(p); 
        dessertsUl.appendChild(li); 
    } 
    // appending elements to DOM
    main.appendChild(menu);
    menu.append(streetFood, cocktails, desserts); 
    */
}

export default menuPage