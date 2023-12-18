/*加加減減*/

const plusButton= Array.from(document.getElementsByClassName('plus'));
const minusButton= Array.from(document.getElementsByClassName('minus'));


minusButton.forEach(i => {
    i.addEventListener('click',function(){
        const parent = this.parentElement;
        const quanityInput = parent.querySelector('.quantity');
        let value = parseInt(quanityInput.value);

        if(value>0){
            value--;
            quanityInput.value = value;
        }
    })
});

plusButton.forEach(i => {
    i.addEventListener('click',function(){
        const parent = this.parentElement;
        const quanityInput = parent.querySelector('.quantity');
        let value = parseInt(quanityInput.value);

        if(value<10){
            value++;
            quanityInput.value = value;
        }else{
            alert('如果您需要團體票券，請聯絡我們');
        }
    })
});

/*最大值10*/
const quantityInputs = Array.from(document.getElementsByClassName('quantity'));

quantityInputs.forEach(input => {
    input.addEventListener('input', function() {
        const min = parseInt(this.min);
        const max = parseInt(this.max);
        let value = parseInt(this.value);

        if (value < min || isNaN(value)) {
            value = min;
        } else if (value > max) {
            value = max;
        }

        this.value = value;
    });
});
