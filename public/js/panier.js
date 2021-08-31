
/*de localStorage à teddies*/
let basketItems = getBasketItems();
console.log(basketItems);
for (let i = 0 ; i < basketItems.length; i++)
    {
        basketItems[i].idx = i;
        const basketItem = basketItems[i]
        panierArticle(i);
        fetchProduct(basketItems[i].id).then(data => panierDetails(basketItem, data));
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
    /*Création de la ligne par article*/
/*    function panierArticle(i)
    {
        article = document.createElement('div');
        image = document.createElement('div');
        contenu = document.createElement('div');
        prix = document.createElement('div');
        article.classList.add('row');
        article.id = 'image'+ i.toString();
        contenu.id = 'contenu'+ i.toString();
        prix.id = 'prix'+ i.toString();
        document.getElementById('article').appendChild(article);
        document.getElementById('article').appendChild(contenu);
        document.getElementById('article').appendChild(prix);

    }

    /*Création de l'article*/
/*    function panierDetails(basketItem, data)
    {
        console.log(basketItem)
        console.log(data)
        /*image*/
/*        image = document.createElement('div');
        image.classList.add('col');
        image.innerHTML += '<img class="img-thumbnail" alt="Ours en peluche' + data.name + '"src="'+data.imageUrl+'">';

        document.getElementById('image'+ basketItem.idx.toString()).appendChild(image);

        /*nom + couleur + quantité*/
/*        contenu = document.createElement('div');
        contenu.classList.add('col');
        contenu.innerHTML += '<h2>'+data.name+'</h2><span>'+basketItem.color+'</spam><spam>'+basketItem.qty+'</span>';

        document.getElementById('contenu'+ basketItem.idx.toString()).appendChild(contenu);

        /*prix*/
//        prix = document.createElement('div');
//        prix.classList.add('col');
//        prix.innerHTML += '<div class="col">'+data.price+'</div>'

//        console.log('prix' + basketItem.idx.toString())
//        console.log(document.getElementById('prix' + basketItem.idx.toString()))
//        document.getElementById('prix' + basketItem.idx.toString()).appendChild(prix);
//    }