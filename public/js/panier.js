let apiProductListUrl = 'http://localhost:3000/api/teddies';
fetch(apiProductListUrl)
    .then(response => response.json())
    .then(data => 
        {
            console.log(data);
            panierResume(data);
            panierImage(data);     
        }   
    )
    
    function panierImage(data)
    {
        let i=0
        console.log(data[i].imageUrl);

        image = document.createElement('img');
        image.classList.add('img-thumbnail');
        image.alt = 'Ours en peluche' + data[i].name;
        image.src = data[i].imageUrl;

        document.getElementById('panierimage').appendChild(image);
    }

    function panierResume(data)
    {
        let i=0
        console.log(data[i].name);

        resume = document.createElement('div');
        resume.innerHTML += '<h2>'+data[i].name+'</h2>';
        resume.innerHTML += '<spam>'+data[0].colors[i]+'</spam>';

        document.getElementById('resume').appendChild(resume);
    }

