let apiProductListUrl = 'http://localhost:3000/api/teddies';
fetch(apiProductListUrl)
    .then(response => response.json())
    .then(data => 
        {
            console.log(data);
            renderList(data);
        }
    );
    
function renderList(data)
{
    let item = null;
    for(let i=0; i < data.length; i++)
    {
            
        console.log(data[i].name);

        //création container card//
        card = document.createElement('div');
        card.classList.add('card-body');
        card.innerHTML += '<h5 class="card-title">' + data[i].name + '</h5>';
        card.innerHTML += '<p class="card-text">' + data[i].description + '</p>';
            
        document.getElementById('carte').appendChild(card);
            
        //création lien container//
        item = document.createElement('a');
        item.classList.add('card');
        item.classList.add('mb-3');
        item.classList.add('text-decoration-none');
        item.id="item"+i.toString()
        item.href = 'produit.html';    
        item.innerHTML += '<img src="' + data[i].imageUrl + '" alt="Ours en peluche ' + data[i].name + '" class="card-img-top">';

        document.getElementById('list_teddy').appendChild(item);

        //création container colonne//
        col = document.createElement('div');
        col.classList.add('col');

        document.getElementById('colonne').appendChild(col);   
        
        if (i%2==0)  //si i/2 n'a pas reste: i paire
        {
            row = document.createElement('div');
            row.classList.add('row');

            document.getElementById('retour').appendChild(row);
        }

            //item.innerHTML += '<span class="price">' + convertPrice(data[i].price) +  '&euro;</s//
            
    }
}