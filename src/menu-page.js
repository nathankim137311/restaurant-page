// menu 
function menuPage() {
    const content = document.getElementById('content');
    const main = document.createElement('main'); 
    main.setAttribute('id', 'menu-container'); 
    // street food 
    const streetFood = document.createElement('div');
    const streetFoodH3 = document.createElement('h3');
    streetFoodH3.textContent = 'Street Food'; 
    streetFood.appendChild(streetFoodH3); 
    // drinks
    const cocktails = document.createElement('div');
    const cocktailsH3 = document.createElement('h3');
    cocktailsH3.textContent = 'Cocktails'; 
    cocktails.appendChild(cocktailsH3); 
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
    desserts.append(dessertsH3, dessertsUl);
    // appending elements to DOM
    content.appendChild(main); 
    main.append(streetFood, cocktails, desserts); 
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