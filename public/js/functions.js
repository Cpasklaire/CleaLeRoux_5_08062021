/*formatage du prix*/
function formatPrice(price)
{
    return (price / 100.0 ).toString() + '€';
}

/* Initialisation localStorage*/
function getBasketItems()
{
    let allBasketItems = JSON.parse(localStorage.getItem('allBasketItems'));
    if (!allBasketItems) allBasketItems=[];
    return allBasketItems
}

/* rajouter un quantité*/
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
    let totalQty = 0;
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

    /*calcul quantité total*/
    for (let i = 0 ; i < allBasketItems.length; i++)
    {
        totalQty += allBasketItems[i].qty; 
        allBasketItems.sommeTeddy = totalQty;
        console.log(allBasketItems.sommeTeddy);
    }
    
    storeBasketItems(allBasketItems);
    renderBasketBadge(allBasketItems);
} 

function storeBasketItems(allBasketItems) {
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

function renderBasketBadge(allBasketItems)
{

    badge = document.createElement('span');
    badge.innerHTML += allBasketItems.sommeTeddy;
    console.log(allBasketItems.sommeTeddy);
    document.getElementById('badge').appendChild(badge);
}