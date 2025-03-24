//DOM element til js output
let productDiv = document.getElementById("product-div")

//Tekst streng med url
let url = window.location.href

//Konverter til object
url = new URL(url)
let productId = url.searchParams.get("product")

productDiv.innerHTML = generateProduct()

function generateProduct() {
    let htmlString = "<div>"
    htmlString += `<h1>${products[parseInt + (productId) - 1][1]}</h1>`

    htmlString += "</div>"

    return htmlString
}