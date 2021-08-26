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
            renduDescription(data);  
            renduPersonalisationXL(data);
            renduPersonalisationSM(data);
            renduPrix(data);                
        }   
    )
   
    function renduTitre(data)
    {
        let i=0
        console.log(data.name);

        titre = document.createElement('h1');
        titre.innerHTML +=  data.name;

        document.getElementById('titre').appendChild(titre);
    }

    function renduImage(data)
    {
        let i=0
        console.log(data.imageUrl);

        image = document.createElement('img');
        image.classList.add('d-block');
        image.classList.add('w-100');
        image.alt = 'Ours en peluche' + data.name;
        image.src = data.imageUrl

        document.getElementById('image').appendChild(image);
    }

    function renduDescription(data)
    {
        let i=0
        console.log(data.description);

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
        let i=0
        console.log(formatPrice(data.price));

        price = document.createElement('p');
        price.innerHTML += formatPrice(data.price);

        document.getElementById('prix').appendChild(price);
    }
