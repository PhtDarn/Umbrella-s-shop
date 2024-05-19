document.addEventListener('DOMContentLoaded', function() {
    const products = document.querySelectorAll('.product');
    const showFavoriteBtn = document.getElementById('show-favorites-btn');
    const ShowFiguraBtn = document.getElementById('show-women');
    const ShowotherBtn = document.getElementById('show-man');
    let ShowFavorite = false;
    let ShowFigura = false;
    let Showother = false;

    showFavoriteBtn.addEventListener('click', () => {
        ShowFavorite = !ShowFavorite;

        if(ShowFigura || Showother ){
            ShowFigura = false;
            Showother = false;
            updateButtonColor();
        }

        if (ShowFavorite) {
            showFavoriteBtn.textContent = "Показать все";

            products.forEach(product => {
                let isFavorite = JSON.parse(product.getAttribute('data-favorite'));
                if (!isFavorite) {
                    product.style.display = 'none';
                }
            });
        } else {
            showFavoriteBtn.textContent = "Показать избранное";

            products.forEach(product => {
                product.style.display = 'block';
            });
        }
    });

    ShowFiguraBtn.addEventListener('click', () => {
        ShowFigura = !ShowFigura;
            if (ShowFigura) {
                products.forEach(product => {
                        let isFigura = JSON.parse(product.getAttribute('data-women'));
                        if (!isFigura || (ShowFavorite && !JSON.parse(product.getAttribute('data-favorite'))) ) {
               product.style.display = 'none';
           }
       });
   } else {
       products.forEach(product => {
           if (!ShowFavorite || JSON.parse(product.getAttribute('data-favorite'))) {
               product.style.display = 'block';
           }
       });
   }
   updateButtonColor();
});


    ShowotherBtn.addEventListener('click', () => {
        Showother = !Showother;

            if (Showother) {
                products.forEach(product => {
                    let isOther = JSON.parse(product.getAttribute('data-man'));
                    if (!isOther || (ShowFavorite && !JSON.parse(product.getAttribute('data-favorite')))) {
                product.style.display = 'none';
            }
        });
    } else {
        products.forEach(product => {
            if (!ShowFavorite || JSON.parse(product.getAttribute('data-favorite'))) {
                product.style.display = 'block';
            }
        });
    }

    updateButtonColor();
});


    products.forEach(product => {
        const favoriteBtn = product.querySelector('.favorite-btn');
        let isFavorite = JSON.parse(product.getAttribute('data-favorite'));

        favoriteBtn.addEventListener('click', () => {
            if (isFavorite) {
                product.setAttribute('data-favorite', false);
                favoriteBtn.classList.remove('favorite');
                isFavorite = false;
            } else {
                product.setAttribute('data-favorite', true);
                favoriteBtn.classList.add('favorite');
                isFavorite = true;
            }
        });
    });

    function updateButtonColor() {
        if (ShowFigura) {
            ShowFiguraBtn.style.color = 'red';
        } else {
            ShowFiguraBtn.style.color = 'black';
        }
        if (Showother) {
            ShowotherBtn.style.color = 'red';
        } else {
            ShowotherBtn.style.color = 'black';
        }
    }
});
