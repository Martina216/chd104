/*日期選擇，並紀錄至cookie*/
const today = new Date();
const dayAfterTomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 2);

const days = document.querySelectorAll('.days div');

days.forEach(day => {
    day.addEventListener('click', function() {
        
        const selectedDate = new Date(currentYear, currentMonth, parseInt(this.textContent));
        
        
        if (selectedDate < dayAfterTomorrow) {
            alert('請選擇其他日期');
            return;
        }

        const selected = document.querySelector('.select');
        if (selected) {
            selected.classList.remove('select');
        }
        this.classList.add('select');

        document.cookie = `selectedDate=${selectedDate}; expires=Wed, 20 Dec 2023 00:00:00 UTC; path=/`;

        console.log('Chosen date:', selectedDate);
        console.log('CookieTest3:', document.cookie);


        const addToCartBtn = document.getElementById('cartBtn');
        const cartDiv = document.getElementById('Cart');
        const cartContentDiv = document.getElementById('cartContent');


        
        addToCartBtn.style.display = 'block';
        

        cartBtn.addEventListener('click', function() {
            if (cartDiv.style.display === 'none' || cartDiv.style.display === '') {
                cartDiv.style.display = 'block';
            } else {
                cartDiv.style.display = 'block';
            }
        });




        addToCartBtn.addEventListener('click', function() {
            if (selectedDate) {
                const cartItem = document.createElement('div');
                const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
                const dateString = selectedDate.toLocaleDateString('zh-tw', options);
                cartItem.textContent = `您的預定時間為： ${dateString}`;
        
                const shoppingCart = document.getElementById('cartContent');
                shoppingCart.appendChild(cartItem);
        
                addToCartBtn.disabled = true;
            }
        });
        
        
    });
});