/*formatage du prix*/
function formatPrice(price)
{
    return (price / 100 ).toString() + '€';
}

/* Initialisation localStorage*/
function getBasketItems()
{
    let basketItemsData = JSON.parse(localStorage.getItem('basketItems'));
    if (!basketItemsData) basketItemsData=[];
    return basketItemsData
}

/* Items du localStorage*/
function addToBasket(id_num, color)
{
    let item =
    {
        id:id_num,
        qty:1,
        color: color,
    }
        let basketItemsData = getBasketItems();
        basketItemsData.push(item);
        localStorage.setItem('basketItems', JSON.stringify(basketItemsData))
        renduBasketBadge();
}

/* passer du localStorage au dataTeddies par l'id*/
/* promise function */
function fetchProduct(id)
{
    console.log('start fetchProduct');
    let apiProductListUrl = 'http://localhost:3000/api/teddies/' + id.toString();
    console.log('let fetchProduct');
    return fetch(apiProductListUrl)
    .then(response => response.json())
    .then(data =>
        {
            console.log(data);
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