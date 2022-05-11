const images = [
    { 'id': '1', 'url':'./imgs/applewatch.png', 'desc':'CONECTIVIDADE'},
    { 'id': '2', 'url':'./imgs/macbook.png', 'desc':'PARA AQUELES QUE OUSAM' },
    { 'id': '3', 'url':'./imgs/iphone.jpg', 'desc':'ELEGÂNCIA E TECNOLOGIA' },
]

const containerItems = document.querySelector('#container-items');

const loadImages = ( images, container) => {
    images.forEach ( image => {
        container.innerHTML += `
            <div class="item">
                <img src="${image.url}" alt="${image.desc}">
            </div>
        `;
    });
}

loadImages( images, containerItems );

let items = document.querySelectorAll('.item');

const next = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore( lastItem, items[0] );
    items = document.querySelectorAll('.item');
}

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}


document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);