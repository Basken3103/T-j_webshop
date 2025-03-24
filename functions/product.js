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

    htmlString += `<img src="${products[parseInt(productId) - 1][9]}" >`

    htmlString += `<h3>${products[parseInt(productId) - 1][7] * 1.25} DKK</h3>`

    htmlString += "<select>"
    htmlString += `<option value="test1">test1</option>`
    htmlString += `<option value="test2">test2</option>`
    htmlString += `<option value="test3">test3</option>`


    htmlString += "</select>"

    htmlString += "</div>"

    return htmlString
}