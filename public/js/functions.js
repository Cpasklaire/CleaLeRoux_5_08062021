/*formatage du prix*/
function formatPrice(price)
{
    return Math.round(price / 100.0 ).toFixed(2) + '€';
}

/* Initialisation localStorage*/
function getBasketItems()
{
    let allBasketItems = JSON.parse(localStorage.getItem('allBasketItems'));
    if (!allBasketItems) allBasketItems=[];
    return allBasketItems
}

/* tableau ID panier */
function getBasketItemIds()
{
    let basketItems = getBasketItems();
    let basketItemIds = [];
        for (var i = 0 ; i < basketItems.length; i++)
        {
            basketItemIds.push(basketItems[i].id);
        }
    return basketItemIds;
}

/* rajouter une quantité*/
function removeItem(id) {
    var allBasketItems = getBasketItems()
    for (var i = 0 ; i < allBasketItems.length; i++) {
        if (allBasketItems[i].id == id) {
            delete allBasketItems[i]
            console.log('id ' + allBasketItems[i].id + ' removed from basket')
            break;
        }
    }    
}

/* Items du localStorage*/
function addToBasket(id_num, color)
{
    let allBasketItems = getBasketItems();
    let found = false; /*trouver : faux*/
    for (var i = 0 ; i < allBasketItems.length; i++) 
    {
        if (allBasketItems[i].id == id_num && allBasketItems[i].color == color) { /*si id=id &&et (||ou) color=color*/
            found = true;
            allBasketItems[i].qty += 1;
            console.log('id ' + allBasketItems[i].id + ' quantity changed to ' + allBasketItems[i].qty)
            break;
        }
    }

    if (!found) { /*! not : valeur inverse d'un boolean*/
        let item =
        {
            id:id_num,
            qty:1,
            color: color,
        }        
        allBasketItems.push(item);
    }

    storeBasketItems(allBasketItems);
    renderBasketBadge();
} 

function storeBasketItems(allBasketItems) 
{
    localStorage.setItem('allBasketItems', JSON.stringify(allBasketItems))
}

/* passer du localStorage au dataTeddies par l'id*/
/* promise function */
function fetchProduct(id)
{
    let apiProductListUrl = 'http://localhost:3000/api/teddies/' + id.toString();
    return fetch(apiProductListUrl)
    .then(response => response.json())
    .then(data =>
        {
            return data
        }
    )
    .catch(error => console.warn(error));
}

/* Rendu Badge */

function renderBasketBadge()
{
    let allBasketItems = getBasketItems();
    let totalTemp=0;
    for (let i = 0 ; i < allBasketItems.length; i++) 
    {
        totalTemp += allBasketItems[i].qty;
    }
    document.getElementById('badge').innerHTML = totalTemp;  
    document.getElementById('badgemobile').innerHTML = totalTemp; 
}

/*a chaque lancement de page*/
renderBasketBadge();