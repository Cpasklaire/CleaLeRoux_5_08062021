let allBasketItems = getBasketItems();

let urlParams;
let id_num;
urlParams = new URLSearchParams(window.location.search);
id_num = urlParams.get('id');

let apiProductListUrl = 'http://localhost:3000/api/teddies/' + id_num.toString();
fetch(apiProductListUrl)
    .then(response => response.json())
    .then(data => 
        {
            
            renderProduitTeddy(data);             
        }   
    )
   
    function renderProduitTeddy(data)
    {
        let i=0
        
        /* Titre */ 
        titre = document.createElement('h1');
        titre.innerHTML +=  data.name;

        document.getElementById('titre').appendChild(titre);

        /* Image active */
        image = document.createElement('div');
        image.classList.add('carousel-item');
        image.classList.add('active');
        image.innerHTML += '<img src="../fontend/images/'+ data.name +'.'+data.colors[i]+'.jpg" class="d-block w-100" alt="Ours en peluche' + data.name +'">';

        document.getElementById('imagecolors').appendChild(image);

        /* Description */
        description = document.createElement('div');
        description.innerHTML += '<p class="description">' + data.description + '</p>';

        document.getElementById('description').appendChild(description);

        /* Prix */
        price = document.createElement('p');
        price.innerHTML += formatPrice(data.price);

        document.getElementById('prix').appendChild(price);

        for(let i=1; i < data.colors.length; i++)
        {
            /* Image */
            imageColor = document.createElement('div');
            imageColor.classList.add('carousel-item');
            imageColor.innerHTML += '<img src="../fontend/images/'+ data.name +'.'+data.colors[i]+'.jpg" class="d-block w-100" alt="Ours en peluche' + data.name +'">';

            document.getElementById('imagecolors').appendChild(imageColor);

            /* Couleur desktop */
            pelageXL = document.createElement('li');
            pelageXL.innerHTML += '<img src="../fontend/images/' + data.colors[i] + '.jpg" alt="Ours en peluche ' + data.colors[i] + '" class="card-img"></br>';
            pelageXL.innerHTML += '<a href="#">' + data.colors[i] + '</a>';

            document.getElementById('couleurappelxl').appendChild(pelageXL);

            /* Couleur mobile */
            pelageSM = document.createElement('option');
            pelageSM.value += data.colors[i];
            pelageSM.innerHTML += data.colors[i];

            document.getElementById('couleurappelsm').appendChild(pelageSM);
        }
    };

    /* Bouton adopter */
    document.getElementById('ajouter').addEventListener('click', function(ajouter) 
    { 
        console.log(ajouter.target);
        addToBasket(id_num, 'rose');
    });