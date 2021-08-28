function formatPrice(price)
{
    return (price / 100 ).toString() + '€';
}

function getBasketItems() 
{
    let basketItemsData = JSON.parse(localStorage.getItem('basketItems'));
    if (!basketItemsData) basketItemsData=[];
    return basketItemsData    
}

function addToBasket(id_num, colors)
{
    let item = 
    {
        id:id_num,
        qty:1,
        color: colors
    }
        let basketItemsData = getBasketItems();
        basketItemsData.push(item);
        localStorage.setItem('basketItems', JSON.stringify(basketItemsData))
}

function renduBasketBadge()
{
    //appeler getBasketItems et afficher dans le badge getBasketItems.Lenght
}

//si même ours +1
//colors choisi