/*de localStorage à teddies*/
let allBasketItems = getBasketItems();
let totalPrice = 0;
const url = 'http://localhost:3000/api/teddies/order';

for (let i = 0 ; i < allBasketItems.length; i++)
    {
        allBasketItems[i].idx = i;
        
        const oneBasketItem = allBasketItems[i];
        renderArticle(i);
        fetchProduct(allBasketItems[i].id)
            .then(data => 
                {
                    totalPrice += data.price * oneBasketItem.qty; 
                    data.somme = totalPrice;  
                    renderDetailArticle(oneBasketItem, data);  
                }
            )
            .catch(error => console.warn(error));
    }  

/*Création de la ligne par article*/
function renderArticle(i)
{
    article = document.createElement('div');
    article.classList.add('row');
    article.id = 'details'+ i.toString();

    document.getElementById('article').appendChild(article);
}

/*Création de l'article*/
function renderDetailArticle(oneBasketItem, data)
{
    image = document.createElement('div');
    image.classList.add('col');
    image.classList.add('colimage');
    image.innerHTML += '<img class="img-thumbnail" alt="Ours en peluche' + data.name + '"src="'+data.imageUrl+'">';
        
    document.getElementById('details'+ oneBasketItem.idx.toString()).appendChild(image);

    contenu = document.createElement('div');
    contenu.classList.add('col');
    contenu.innerHTML += '<h2>'+data.name+'</h2><span>'+oneBasketItem.color+'</span></br><span>Quantité : '+oneBasketItem.qty+'</span>';

    document.getElementById('details'+ oneBasketItem.idx.toString()).appendChild(contenu);

    prix = document.createElement('div');
    prix.classList.add('col');
    prix.innerHTML += '<div class="col">'+formatPrice(data.price)+'</div>';

    document.getElementById('details'+ oneBasketItem.idx.toString()).appendChild(prix);
            
    if (allBasketItems.length-1 == oneBasketItem.idx)
    {
        renderTotalPrice(data.somme);
    }
}          
        
/* Rendu prix total */
function renderTotalPrice(totalPrice)
{
    total = document.createElement('span');
    total.innerHTML += formatPrice(totalPrice);

    document.getElementById('total').appendChild(total);
};

async function submitOrder() 
{

    console.log('début de soumission')
    const data = 
    {
        contact: 
        {
            firstName: document.getElementsByName('firstName')[0].value,
            lastName: document.getElementsByName('lastName')[0].value,
            address: document.getElementsByName('address')[0].value,
            city: document.getElementsByName('city')[0].value,
            email: document.getElementsByName('email')[0].value,
        },
        products: getBasketItemIds()
    }
    const response = await fetch(url, 
        {
        method: 'POST',
        headers: 
        {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    let order = null;
    if (response.status === 201) 
    {
        order = await response.json()
        console.log("Commande passée avec succès")
        console.log("Order ID " + order.orderId)
        console.log(order)
    } 
    else 
    {
        console.log('ERROR')
        document.getElementById('btn-order').disabled = false;
    }
    console.log('fin de soumission');
    return order;
}

function initPageEvents()
{
    /* Bouton pour vider le panier */
    document.getElementById('supprimer').addEventListener('click', function() 
    { 
        localStorage.setItem('allBasketItems', null);
        document.location.reload();
    });

    /*bouton commander*/
    document.getElementById('commande').addEventListener('submit', async function(event) 
    {
        // disable button pour prévenir les multi click par erreur
        event.target.disabled = true;
        event.stopPropagation();
        event.preventDefault();
        if(allBasketItems.length == 0)
        {
            document.getElementById('panier').innerHTML += '<h5>Votre panier est vide, adoptez d’abord un <a href="../../index.html">ourson<a><h5>';

            return
        }
        console.log("avant le submit order");
        const order = await submitOrder();
        console.log("après submit order");
        console.log(order.orderId);
        window.location.href="/public/page/confirmation.html?orderId="+order.orderId;
        localStorage.setItem('allBasketItems', null);
    })
}

initPageEvents();

