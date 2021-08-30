let apiProductListUrl = 'http://localhost:3000/api/teddies';
fetch(apiProductListUrl)
    .then(response => response.json())
    .then(data => 
        {
            console.log(data);
            renderList(data);
            renduBasketBadge();
        }
    );

function renderList(data)
{
    let teddy = null;
    for(let i=0; i < data.length; i++)
    {
        //création container d'appel//

        appel = document.createElement('div');
        appel.id = 'retour'+i.toString();

        document.getElementById('home').appendChild(appel);   
              
        //création retour ligne//
        if (i%2==0)  //si i/2 n'a pas reste: i paire
        {
            row = document.createElement('div');
            row.classList.add('row');
            row.id = 'colonne'+i.toString();

            document.getElementById('retour'+i.toString()).appendChild(row);
        }  
        else
        {
            norow = document.createElement('div');
            row.id = 'colonne'+i.toString();

            document.getElementById('retour'+i.toString()).appendChild(row);
        }

        //création container colonne//
        col = document.createElement('div');
        col.classList.add('col');
        col.classList.add('card-group');
        col.id = 'ours'+i.toString();

        document.getElementById('colonne'+i.toString()).appendChild(col);  

        //création lien container//
        teddy = document.createElement('a');
        teddy.classList.add('card');
        teddy.classList.add('mb-3');
        teddy.classList.add('text-decoration-none');
        teddy.id = 'carte'+i.toString();
        teddy.href = 'public/page/produit.html?id='+ data[i]._id;    
        teddy.innerHTML += '<img src="' + data[i].imageUrl + '" alt="Ours en peluche ' + data[i].name + '" class="card-img">';

        document.getElementById('ours'+i.toString()).appendChild(teddy);

        //création container card//
        card = document.createElement('div');
        card.classList.add('card-body');
        card.innerHTML += '<div class="container card-title"><div class="row"><div class="col"><h5 class="text-start" >' + data[i].name + '</h5></div>' + '<div class="col text-end"><spam class="prix fw-bold">' + formatPrice(data[i].price) + '</spam></div></div></div>';
        card.innerHTML += '<p class="card-text">' + data[i].description + '</p>';
            
        document.getElementById('carte'+i.toString()).appendChild(card);
    }
}

