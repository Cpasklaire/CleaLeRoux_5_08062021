let basketItems = getBasketItems();

let urlParams;
let id_num;
urlParams = new URLSearchParams(window.location.search);
id_num = urlParams.get('id');

let apiProductListUrl = 'http://localhost:3000/api/teddies/' + id_num.toString();
fetch(apiProductListUrl)
    .then(response => response.json())
    .then(data => 
        {
            renduBasketBadge();
            renduTitre(data);
            renduImage(data);
            renduImageColor(data);
            renduDescription(data);  
            renduPersonalisationXL(data);
            renduPersonalisationSM(data);
            renduPrix(data);                
        }   
    )
   
    function renduTitre(data)
    {
        titre = document.createElement('h1');
        titre.innerHTML +=  data.name;

        document.getElementById('titre').appendChild(titre);
    }

    function renduImage(data)
    {   
        let i=0

        image = document.createElement('div');
        image.classList.add('carousel-item');
        image.classList.add('active');
        image.innerHTML += '<img src="../fontend/images/'+ data.name +'.'+data.colors[i]+'.jpg" class="d-block w-100" alt="Ours en peluche' + data.name +'">';

        document.getElementById('imagecolors').appendChild(image);
    }

    function renduImageColor(data)
    {
       
        for(let i=1; i < data.colors.length; i++)
        {        

        imageColor = document.createElement('div');
        imageColor.classList.add('carousel-item');
        imageColor.innerHTML += '<img src="../fontend/images/'+ data.name +'.'+data.colors[i]+'.jpg" class="d-block w-100" alt="Ours en peluche' + data.name +'">';

        document.getElementById('imagecolors').appendChild(imageColor);
        }
    }

    function renduDescription(data)
    {
        description = document.createElement('div');
        description.innerHTML += '<p class="description">' + data.description + '</p>';

        document.getElementById('description').appendChild(description);
    }

    function renduPersonalisationXL(data)
    {
        for(let i=0; i < data.colors.length; i++)
        {
        
        pelageXL = document.createElement('li');
        pelageXL.innerHTML += '<img src="../fontend/images/' + data.colors[i] + '.jpg" alt="Ours en peluche ' + data.colors[i] + '" class="card-img"></br>';
        pelageXL.innerHTML += '<a href="#">' + data.colors[i] + '</a>';

        document.getElementById('couleurappelxl').appendChild(pelageXL);
        }
    }
    function renduPersonalisationSM(data)
    {
        for(let i=0; i < data.colors.length; i++)
        {
        
        pelageSM = document.createElement('option');
        pelageSM.value += data.colors[i]
        pelageSM.innerHTML += data.colors[i];

        document.getElementById('couleurappelsm').appendChild(pelageSM);
        }
    }

    function renduPrix(data)
    {
        price = document.createElement('p');
        price.innerHTML += formatPrice(data.price);

        document.getElementById('prix').appendChild(price);
    }

    document.getElementById('ajouter').addEventListener('click', function(ajouter) { 
        //console.log(ajouter.target);
        addToBasket(id_num, 'vert');
    });