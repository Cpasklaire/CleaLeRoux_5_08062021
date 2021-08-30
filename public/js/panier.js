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
    /*de localStorage à teddies*/
    for (var i = 0 ; i < basketItems.length; i++) 
    {
console.log('start boucle');
        data = fetchProduct(basketItems[i].id);
console.log(data);
        renduBasketBadge();
        panierArticle(i);
        panierDetails(data, basketItems[i].qty, basketItems[i].color);
        //panierResume(data, basketItems[i].qty, basketItems[i].color);
        //panierResume(i);
        //panierImage(data);
    }
console.log('end boucle');

    /*Création de la ligne par article*/
    function panierArticle(i)
    {
        article = document.createElement('div');
        article.classList.add('row');
        article.id = 'image'+ i.toString();
        article.id = 'contenu'+ i.toString();
        article.id = 'prix'+ i.toString();
        document.getElementById('article').appendChild(article);
        
    }

    /*Création de l'article*/
    function panierDetails(data, qty, color)
    {
        /*image*/
        image = document.createElement('div');
        image.classList.add('col');
        image.innerHTML += '<img class="img-thumbnail" alt="Ours en peluche'+data.name+'"src="'+data.imageUrl+'">';
        
        document.getElementById('image'+ i.toString()).appendChild(image);

        /*nom + couleur + quantité*/
        contenu = document.createElement('div');
        contenu.classList.add('col');
        contenu.innerHTML += '<h2>'+data.name+'</h2><spam>'+color+'</spam><spam>'+qty+'</spam>';
    
        document.getElementById('contenu'+ i.toString()).appendChild(contenu);

        /*prix*/
        prix = document.createElement('div');
        prix.classList.add('col');
        prix.innerHTML += '<div class="col">'+data.price+'</div>'

        document.getElementById('prix'+ i.toString()).appendChild(prix);
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