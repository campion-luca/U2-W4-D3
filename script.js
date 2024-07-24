// creo la funzione per prendere i libri dal link
const getBook = function () {
    fetch("https://striveschool-api.herokuapp.com/books")
        // se il "caricamento" è stato positivo :
        .then((response) => {
            console.log("response", response)
            // potrebbe essere che però qualcosa vada storto nel raggiungimento, controlliamo
            if (response.ok) { //se true
                console.log("tutto bene il caricamento iniziale")
                // dunque tramutiamo i dati in qualcosa di lavorabile per noi
                return response.json()
            } else {
                throw new Error(" ERROR - risposta del server non corretta")
            }
        })
        // se supera questo ulteriore controllo allora prendo i dati
        .then((books) => {
            console.log("Ecco i data dei libri", books)
            // e c'attacco la funzione per manipolarli
            generateBooks(books)
        })
        // in caso di errore :
        .catch((error) => {
            console.log("errore", error)
        })
}

// creiamo la funzione per manipolare il DOM
const generateBooks = function (booksList) {
    console.log("controllo pre assegnazione JS")
    // punto le variabili nell'HTML

    // LIBRO 0
    const bookImg0 = document.getElementById("book-img-0")
    const bookTitle0 = document.getElementById("book-title-0")
    const bookPrice0 = document.getElementById("book-price-0")
    // punto i riferimenti dei data arrivati
    const bookImgCards0 = booksList[0].img
    const bookTitleCards0 = booksList[0].title
    const bookPriceCards0 = booksList[0].price
    // li inserisco nella cards HTML
    bookTitle0.innerText = bookTitleCards0
    bookPrice0.innerText = bookPriceCards0
    bookImg0.setAttribute("src", `${bookImgCards0}`)

    // LIBRO 1
    const bookImg1 = document.getElementById("book-img-1")
    const bookTitle1 = document.getElementById("book-title-1")
    const bookPrice1 = document.getElementById("book-price-1")
    // punto i riferimenti dei data arrivati
    const bookImgCards1 = booksList[1].img
    const bookTitleCards1 = booksList[1].title
    const bookPriceCards1 = booksList[1].price
    // li inserisco nella cards HTML
    bookTitle1.innerText = bookTitleCards1
    bookPrice1.innerText = bookPriceCards1
    bookImg1.setAttribute("src", `${bookImgCards1}`)

    // LIBRO 2
    const bookImg2 = document.getElementById("book-img-2")
    const bookTitle2 = document.getElementById("book-title-2")
    const bookPrice2 = document.getElementById("book-price-2")
    // punto i riferimenti dei data arrivati
    const bookImgCards2 = booksList[2].img
    const bookTitleCards2 = booksList[2].title
    const bookPriceCards2 = booksList[2].price
    // li inserisco nella cards HTML
    bookTitle2.innerText = bookTitleCards2
    bookPrice2.innerText = bookPriceCards2
    bookImg2.setAttribute("src", `${bookImgCards2}`)

    // LIBRO 3
    const bookImg3 = document.getElementById("book-img-3")
    const bookTitle3 = document.getElementById("book-title-3")
    const bookPrice3 = document.getElementById("book-price-3")
    // punto i riferimenti dei data arrivati
    const bookImgCards3 = booksList[3].img
    const bookTitleCards3 = booksList[3].title
    const bookPriceCards3 = booksList[3].price
    // li inserisco nella cards HTML
    bookTitle3.innerText = bookTitleCards3
    bookPrice3.innerText = bookPriceCards3
    bookImg3.setAttribute("src", `${bookImgCards3}`)
}


// invocare la funzione
getBook();


// btn che elimina il tutto
const btnDelete = document.getElementById("delete-0");
btnDelete.addEventListener("click", function (e) {
    e.preventDefault()
    console.log("work it")
    const deleteMe = document.getElementById("delete-me-0")
    deleteMe.classList.add("d-none");
})

const btnDelete1 = document.getElementById("delete-1");
btnDelete1.addEventListener("click", function (e) {
    e.preventDefault()
    console.log("work it")
    const deleteMe = document.getElementById("delete-me-1")
    deleteMe.classList.add("d-none");
})

const btnDelete2 = document.getElementById("delete-2");
btnDelete2.addEventListener("click", function (e) {
    e.preventDefault()
    console.log("work it")
    const deleteMe = document.getElementById("delete-me-2")
    deleteMe.classList.add("d-none");
})

const btnDelete3 = document.getElementById("delete-3");
btnDelete3.addEventListener("click", function (e) {
    e.preventDefault()
    console.log("work it")
    const deleteMe = document.getElementById("delete-me-3")
    deleteMe.classList.add("d-none");
})
