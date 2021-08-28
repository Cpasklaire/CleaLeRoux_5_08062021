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
            console.log(data);
            renduTitre(data);
            renduImage(data);
            //renduImageColor(data);
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
        image = document.createElement('img');
        image.classList.add('d-block');
        image.classList.add('w-100');
        image.classList.add('active');
        image.alt = 'Ours en peluche' + data.name;
        image.src = data.imageUrl
        

        document.getElementById('image').appendChild(image);
    }
    /*function renduImageColor(data)
    {
        for(let i=0; i < data.colors.length; i++)
        {
        imageColor = document.createElement('div');
        imageColor.classList.add('carousel-item');
        imageColor.innerHTML += '<img src="../fontend/images/'+ data.name +'.'+data.colors[i]+'.jpg" class="d-block w-100" alt="Ours en peluche' + data.name +'">';

        document.getElementById('imagecolors').appendChild(imageColor);
        }
        if (i=0)
        {
            imageColor.classList.add('active');
        }      
    }*/

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
            console.log(data.colors[i]);
        
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
            console.log(data.colors[i]);
        
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

    document.getElementById('ajouter').addEventListener('click', function(ici) { 
        console.log('test');
        console.log(ici.target);
        addToBasket(id_num, 'pink');
    });