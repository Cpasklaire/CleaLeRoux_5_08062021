/*formatage du prix*/
function formatPrice(price)
{
    return (price / 100.0 ).toString() + '€';
}

/* Initialisation localStorage*/
function getBasketItems()
{
    let basketItemsData = JSON.parse(localStorage.getItem('basketItems'));
    if (!basketItemsData) basketItemsData=[];
    return basketItemsData
}

function removeItem(id) {
    var basketItems = getBasketItems()
    for (var i = 0 ; i < basketItems.length; i++) {
        if (basketItems[i].id == id) {
            delete basketItems[i]
            console.log('id ' + basketItems[i].id + ' removed from basket')
            break;
        }
    }    
}

/* Items du localStorage*/
function addToBasket(id_num, color)
{
    let basketItems = getBasketItems();
    let found = false; /*trouver : faux*/
    for (var i = 0 ; i < basketItems.length; i++) {
        if (basketItems[i].id == id_num && basketItems[i].color == color) { /*si id=id &&et (||ou) color=color*/
            found = true;
            basketItems[i].qty += 1;
            console.log('id ' + basketItems[i].id + ' quantity changed to ' + basketItems[i].qty)
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
        basketItems.push(item);console.log('coucou');
    }

    // TODO @Clea, @Renaud, move the line below in a function
    // localStorage.setItem('basketItems', JSON.stringify(basketItemsData))
    storeBasketItems(basketItems);
     renduBasketBadge();
} 

function storeBasketItems(basketItems) {
    localStorage.setItem('basketItems', JSON.stringify(basketItems))
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

/*Badge*/
function renduBasketBadge()
{
    let basketItemsData = getBasketItems();
    document.getElementById('badge').innerHTML = basketItemsData.length;
}