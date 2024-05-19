document.addEventListener('DOMContentLoaded', function() {
const priceValue = document.getElementById('priceValue');
const priceSlider = document.getElementById('priceSlider');
const products = document.querySelectorAll('.product[data-price]');
let ShowFavorite = false;
let ShowFigura = false;
let Showother = false;
document.getElementById('show-favorites-btn').addEventListener('click', function() {
        ShowFavorite = !ShowFavorite;
        updateProducts();
    });

    document.getElementById('show-women').addEventListener('click', function() {
        ShowFigura = !ShowFigura;
        updateProducts();
    });

    document.getElementById('show-man').addEventListener('click', function() {
        Showother = !Showother;
        updateProducts();
    });

    priceSlider.addEventListener('input', function() {
        updateProducts();
    });
    
    function updateProducts() {
            products.forEach(product => {
                const productPrice = parseInt(product.getAttribute('data-price'));
                priceValue.textContent = priceSlider.value;

                if (productPrice >= parseInt(priceSlider.value)) {
                    let isFigura = JSON.parse(product.getAttribute('data-women'));
                    let isOther = JSON.parse(product.getAttribute('data-man'));
                    let isFavorite = JSON.parse(product.getAttribute('data-favorite'));

                    if ((ShowFigura && !isFigura) || (Showother && !isOther) || (ShowFavorite && !isFavorite)) {
                        product.style.display = 'none';
                    } else {
                        product.style.display = 'block';
                    }
                } else {
                    product.style.display = 'none';
                }
            });
        }
});
