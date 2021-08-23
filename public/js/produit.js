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
            renduPersonalisation(data);                
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

        description = document.createElement('p');
        description.innerHTML += data.description

        document.getElementById('description').appendChild(description);
    }

    function renduPersonalisation(data)
    {
        for(let i=0; i < data.colors.length; i++)
        {
        console.log(data.colors[i]);

        pelage = document.createElement('li');
        pelage.innerHTML += '<a href="#" class="dropdown-item">' + data.colors[i] + '</a>';

        document.getElementById('couleurappel').appendChild(pelage);
        }
    }
