function renderList(data)
{
    let item = null;
    for(let i=0; i < data.length; i++)
        {
            console.log(data[i].name);
            
            //création lien container//
            item = document.createElement('a');
            item.classList.add('card');
            item.classList.add('mb-3');
            item.classList.add('text-decoration-none');
            item.href='produit.html';

            //création image//
            item.innerHTML += '<img src="' + data[i].imageUrl + '" alt="Ours en peluche ' + data[i].name + '" class="card-img-top">';
            
            //création container card//
            item.innerHTML += '<div class="card-body">'

            item.innerHTML += '<h5 class="card-title">' + data[i].name + '</h5>';

            item.innerHTML += '</div>'
         
            //item.innerHTML += '<span class="price">' + convertPrice(data[i].price) +  '&euro;</s//
            document.getElementById('list_teddy').appendChild(item);
        }
}

let apiProductListUrl = 'http://localhost:3000/api/teddies';
fetch(apiProductListUrl)
    .then(response => response.json())
    .then(data => 
        {
            console.log(data);
            renderList(data);
        }
    );


