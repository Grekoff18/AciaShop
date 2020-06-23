"use strict"
var container = document.querySelector('.container');
var productItem = document.querySelectorAll('.product-item');
var row = document.querySelector('.row');
var currentProductCard = document.querySelector('.current_product-card');
var featuredImage = document.querySelector('.featured-image'); 
var featuredTitle = document.querySelector('.featured-product__title');
var featuredPrice = document.getElementById('price');
var returnBtn = document.querySelector('.come-back-animate');
var flexItemRow = document.querySelector('.flex-item_row')
var description = document.querySelector('.description p')
var imgLink;
var productCurrentTitle;
var productCurrentPrice;

for(var i = 0; i < productItem.length; i++) {
    productItem[i].addEventListener('click', function(event) {
        event.preventDefault();
        container.style.float = 'left';
        container.style.marginLeft = '10px';
        container.style.transition = '0.5s';
        if(container.classList.contains('slick')) {
            container.classList.remove('slick');
        }
        container.classList.add('slick');
        row.style.flexDirection = 'column';
        row.style.alignItems = 'center';
        currentProductCard.style.display = 'inline-block';
        currentProductCard.style.marginTop = '100px';
        currentProductCard.style.width = '70%';
        
        if(typeof(event) != 'undefined') {
            imgLink = this.children[0].getAttribute('src')
            productCurrentTitle = this.children[1].innerText
            productCurrentPrice = this.children[2].innerText
        }

        featuredImage.setAttribute('src', imgLink)
        featuredImage.setAttribute('alt', productCurrentTitle)
        featuredTitle.innerText = `${productCurrentTitle}`
        featuredPrice.innerText = `${productCurrentPrice}`

        setTimeout(function() {
            currentProductCard.style.marginLeft = '40px';
            currentProductCard.style.transition = '1.5s';
        }, 1000)

        setTimeout(function() {
            featuredImage.style.width = '500px';
            featuredImage.style.height = '630px';              
        }, 500)

        setTimeout(function() {
            flexItemRow.style.opacity = '1';
        }, 3500)
        
    })
    
}

returnBtn.addEventListener('click', function(event) {
    event.preventDefault();
    container.style.marginLeft = null;
    currentProductCard.style.display = 'none';
    container.style.float = null;
    container.classList.remove('slick');
    row.style.flexDirection = null;
    row.style.alignItems = null;
    
    featuredImage.removeAttribute('src')
    featuredImage.removeAttribute('alt')
    featuredTitle.innerText = ""
    featuredPrice.innerText = ""
    currentProductCard.style.marginLeft = null;
    featuredImage.style.width = null;
    featuredImage.style.height = null;
    flexItemRow.style.opacity = null;
})


