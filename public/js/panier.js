/*de localStorage à teddies*/
let allBasketItems = getBasketItems();
let totalPrice = 0;
renderBasketBadge();

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
        
        function renderTotalPrice(totalPrice)
        {
            total = document.createElement('span');
            total.innerHTML += formatPrice(totalPrice);

            document.getElementById('total').appendChild(total);
        }