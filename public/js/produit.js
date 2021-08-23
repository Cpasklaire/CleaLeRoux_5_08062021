let apiProductListUrl = 'http://localhost:3000/api/teddies';
fetch(apiProductListUrl)
    .then(response => response.json())
    .then(data => 
        {
            console.log(data);
            loadTeddy();               
        }   
    )

    function loadTeddy()
    {
        let urlParams 
        urlParams = URLSearchParams(windows.location.search);
        console.log('test');

        let id_num;
        id_num = urlParams.get('id');
        let goodteddy=data.filter(teddy => {teddy._id===id_num});

        renduTitre(goodteddy);
        renduImage(goodteddy);
        renduDescription(goodteddy);  
        renduPersonalisation(goodteddy); 
    }   
     
    function renduTitre(data)
    {
        let i=0
        console.log(data[i].name);

        titre = document.createElement('h1');
        titre.innerHTML +=  data[i].name;

        document.getElementById('titre').appendChild(titre);
    }

    function renduImage(data)
    {
        let i=0
        console.log(data[i].imageUrl);

        image = document.createElement('img');
        image.classList.add('d-block');
        image.classList.add('w-100');
        image.alt = 'Ours en peluche' + data[i].name;
        image.src = data[i].imageUrl

        document.getElementById('image').appendChild(image);
    }

    function renduDescription(data)
    {
        let i=0
        console.log(data[i].description);

        description = document.createElement('p');
        description.innerHTML += data[i].description

        document.getElementById('description').appendChild(description);
    }

    function renduPersonalisation(data)
    {
        for(let i=0; i < data[0].colors.length; i++)
        {
        console.log(data[0].colors[i]);

        pelage = document.createElement('li');
        pelage.innerHTML += '<a href="#" class="dropdown-item">' + data._id[0].colors[i] + '</a>';

        document.getElementById('couleurappel').appendChild(pelage);

        }
    }
