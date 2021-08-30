/*let apiProductListUrl = 'http://localhost:3000/api/teddies';
fetch(apiProductListUrl)
    .then(response => response.json())
    .then(data =>
        {
            console.log(data);

            panierDetails(data, basketItems);
        }
    )*/

let basketItems = getBasketItems();
console.log(basketItems);
for (let i = 0 ; i < basketItems.length; i++)
    {
        basketItems[i].id = i;
        const basketItem = basketItems[i]
        panierArticle(i);
        fetchProduct(basketItems[i].id).then(data => panierDetails(basketItem, data));
    }
    /*de localStorage à teddies*/
/*    for (var i = 0 ; i < basketItems.length; i++)
    {
        basketItems[i].idx = i;
        const basketItem = basketItems[i]
        panierArticle(i);
        fetchProduct(basketItems[i].id).then(data => panierDetails(basketItem, data));
        //panierResume(data, basketItems[i].qty, basketItems[i].color);
        //panierResume(i);
        //panierImage(data);
    }
    console.log('end boucle');
}

    /*Création de la ligne par article*/
    function panierArticle(i)
    {
        article = document.createElement('div');
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
    function panierDetails(basketItem, data)
    {
        console.log(basketItem)
        console.log(data)
        /*image*/
        image = document.createElement('div');
        image.classList.add('col');
        image.innerHTML += '<img class="img-thumbnail" alt="Ours en peluche' + data.name + '"src="'+data.imageUrl+'">';

        document.getElementById('image'+ basketItem.idx.toString()).appendChild(image);

        /*nom + couleur + quantité*/
        contenu = document.createElement('div');
        contenu.classList.add('col');
        contenu.innerHTML += '<h2>'+data.name+'</h2><span>'+basketItem.color+'</spam><spam>'+basketItem.qty+'</span>';

        document.getElementById('contenu'+ basketItem.idx.toString()).appendChild(contenu);

        /*prix*/
        prix = document.createElement('div');
        prix.classList.add('col');
        prix.innerHTML += '<div class="col">'+data.price+'</div>'

        console.log('prix' + basketItem.idx.toString())
        console.log(document.getElementById('prix' + basketItem.idx.toString()))
        document.getElementById('prix' + basketItem.idx.toString()).appendChild(prix);
    }
console.log('end script panier');



    /*function panierResume(data, qty, color)
    {
        console.log(data);

        resume = document.createElement('div');
        resume.innerHTML += '<h2>'+data.name+'</h2>';
        resume.innerHTML += '<spam>'+color+'</spam>';
        resume.innerHTML += '<spam>'+qty+'</spam>';

        document.getElementById('resume').appendChild(resume);
    }

    function panierImage(data)
    {
        let i=0
        console.log(data[i].imageUrl);

        image = document.createElement('img');
        image.classList.add('img-thumbnail');
        image.alt = 'Ours en peluche' + data[i].name;
        image.src = data[i].imageUrl;

        document.getElementById('panierimage').appendChild(image);
    }*/


// Init
renderBasketPage()