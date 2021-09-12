urlParams = new URLSearchParams(window.location.search);
orderId = urlParams.get('order.orderId');
totalPrice = urlParams.get('totalPrice');

let apiProductListUrl = 'http://localhost:3000/api/teddies/order' + order.orderId + totalPrice;
fetch(apiProductListUrl)
    .then(response => response.json())
    .then(order => 
        {       
            renderIdentifiant(order);            
        }   
    )

/* Rendu prix total */
function renderTotalPrice(totalPrice)
{

    total.innerHTML += formatPrice(totalPrice);

    document.getElementById('total').appendChild(total);
};

/* Rendu identifiant */
function renderIdentifiant(order)
{
    identifiant.innerHTML += order.orderId;

    document.getElementById('identifiant').appendChild(identifiant);
};