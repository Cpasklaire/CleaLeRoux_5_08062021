/*de localStorage à teddies*/
let allBasketItems = getBasketItems();
let totalPrice = 0;
renderBasketBadge(allBasketItems);

for (let i = 0 ; i < allBasketItems.length; i++)
    {
        allBasketItems[i].idx = i;
        
        const oneBasketItem = allBasketItems[i];
        renderArticle(i);
        fetchProduct(allBasketItems[i].id)
            .then(data => 
                {
                    totalPrice += data.price; 
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

        /*Boutton supprimer

        document.getElementById('supprimer').addEventListener('click', function(deleteArticle)
        {     console.log(deleteArticle.target);
                //localStorage.setItem('allBasketItems', allBasketItems[i].qty-1);
                
        }); revoir avec boucle*/

        function initPageEvents()
{
    document.getElementById('btn-order').addEventListener('click', async function(event) {
        // disable button to prevent multiple clicks by error
        event.target.disabled = true;
        event.stopPropagation();
        console.log("we test async/await syntax, here we are before the call to submit order")
        const order = await submitOrder();
        console.log("we test async/await syntax, here we are after the call to submit order")
        displayOder(order)
    })
}

initPageEvents();

const url = 'http://localhost:3000/api/teddies/order';
async function submitOrder() {
    console.log('submitorder starts')
    const data = {
        contact: {
            firstName: document.firstName,
            lastName: "Faw",
            address: "10A corniche des oliviers",
            city: "94235 Ivry sur Seine",
            email: "sam@testonorico.com"
        },
        products: [allBasketItems,'5beaa8bf1c9d440000a57d94']
    }
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    let order = null;
    if (response.status === 201) {
        order = await response.json()
        console.log("Commande passée avec succès")
        console.log("Order ID " + order.orderId)
        console.log(order)
    } else {
        console.log('ERROR')
        document.getElementById('btn-order').disabled = false;
    }
    console.log('submitorder ends')
    return order;
}