
/*de localStorage à teddies*/
let basketItems = getBasketItems();
console.log(basketItems);
for (let i = 0 ; i < basketItems.length; i++)
    {
        basketItems[i].idx = i;
        const basketItem = basketItems[i];
        panierArticle(i);
        fetchProduct(basketItems[i].id)
            .then(data => 
                {
                    panierDetails(basketItem, data);
                    panierTotal(data);
                }
            );
    }

        /*Création de la ligne par article*/
        function panierArticle(i)
        {
            article = document.createElement('div');
            article.classList.add('row');
            article.id = 'details'+ i.toString();
            document.getElementById('article').appendChild(article);
        }
    
        /*Création de l'article*/
        function panierDetails(basketItem, data)
        {
            image = document.createElement('div');
            image.classList.add('col');
            image.innerHTML += '<img class="img-thumbnail" alt="Ours en peluche' + data.name + '"src="'+data.imageUrl+'">';
        
            document.getElementById('details'+ basketItem.idx.toString()).appendChild(image);

            contenu = document.createElement('div');
            contenu.classList.add('col');
            contenu.innerHTML += '<h2>'+data.name+'</h2><span>'+basketItem.color+'</spam></br><spam>Quantité : '+basketItem.qty+'</span>';

            document.getElementById('details'+ basketItem.idx.toString()).appendChild(contenu);

            prix = document.createElement('div');
            prix.classList.add('col');
            prix.innerHTML += '<div class="col">'+formatPrice(data.price)+'</div>';

            document.getElementById('details'+ basketItem.idx.toString()).appendChild(prix);
        }

        function panierTotal(data)
        {
            let total = 0;
            for (let i = 0 ; i < basketItems.length; i++)
            {
                const array = basketItems.length
            total += Number(data.price);
            console.log(reducer);
            }
        }