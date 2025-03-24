//DOM element til js output

//Camel case format
let productDiv = document.getElementById("product-div")

productDiv.innerHTML = generateProducts(true)

function generateProducts(featured) {
    let htmlString = ""
    products.forEach(function (element, id) {
        if (element[11] == true && featured == true) {
            htmlString += `<a href="product.html?product=${element[0]}">`

            htmlString += `<h2>${element[1]}</h2>`
            htmlString += `<img src="${element[9]}">`
            htmlString += `<p class="price">${element[7] * 1.25} DKK</p>`

            htmlString += "</a>"
        }
    })
    return htmlString
} 