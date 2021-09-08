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
        allBasketItems.push(item);console.log('coucou');
    }
    storeBasketItems(allBasketItems);
    renderBasketBadge(totalQty);
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

/* Badge */
function calculQtyItems()
{
    let totalQty = 0;
    let allBasketItems = getBasketItems();
    
    for (let i = 0 ; i < allBasketItems.length; i++)
    {              
        fetchProduct(allBasketItems[i].id)
            .then(data => 
                {
                    totalQty += data.qty; 
                    data.sommeTeddy = totalQty; 
                    renderBasketBadge(sommeTeddy)
                }
            )
            .catch(error => console.warn(error));
    }
}


function renderBasketBadge(sommeTeddy)
{
    badge = document.createElement('span');
    badge.innerHTML += sommeTeddy;
    console.log(sommeTeddy);
    document.getElementById('badge').appendChild(badge);
}