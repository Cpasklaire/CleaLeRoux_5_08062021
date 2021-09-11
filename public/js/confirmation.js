urlParams = new URLSearchParams(window.location.search);
let apiProductListUrl = 'http://localhost:3000/api/teddies/order';

fetch(apiProductListUrl)
    .then(response => response.json())
    .then(order => 
        {       
            renderTotalPrice(totalPrice);  
            renderIdentifiant(order);           
        }   
    )

/* Rendu prix total */
function renderTotalPrice(totalPrice)
{
    total = document.createElement('span');
    total.innerHTML += formatPrice(totalPrice);

    document.getElementById('total').appendChild(total);
};

/* Rendu identifiant */
function renderIdentifiant(order)
{
    identifiant.innerHTML += order.orderId;

    document.getElementById('identifiant').appendChild(identifiant);
}