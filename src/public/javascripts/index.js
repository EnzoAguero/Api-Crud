console.log('conected')

async function list() {
    try {
        let response = await fetch('/api/')
        let result = await response.json();

        result.data.forEach(libro => {
            let item = `
            <ul class="list-group">
             <li class="list-group-item">${libro.title}</li>
             <li class="list-group-item">${libro.price}</li>
             <li class="list-group-item">${libro.autores[0].name}</li>
             <br>
             </ul>             
           `


    document.getElementById('box-products').innerHTML += item

        })

    } catch (error) {
        console.log(error);

    }

}

window.addEventListener('load', () => {
    list();
})


