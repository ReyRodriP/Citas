//Consumo de api
let apiLink = "https://api.breakingbadquotes.xyz/v1/quotes";
const boton = document.getElementById('boton');

async function getQuotes() {
    try{
        const response = await fetch(apiLink);
        const data = await response.json();

        const quote = data[0];

    console.log(quote);
    showQuotes(quote);
    } catch (error) {
        console.log(error);
    }
}


//Visualizacion en la pagina

function showQuotes(quote) {
    const parrafo = document.getElementById('parrafo');
    const autor = document.getElementById('autor');

    parrafo.textContent = `"${quote.quote}"`;
    autor.textContent = quote.author;
}

getQuotes();
boton.addEventListener("click",getQuotes);
