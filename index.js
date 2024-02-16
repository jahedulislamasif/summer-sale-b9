let titleCount = 1;
let totalPrize = 0;
const cards = document.querySelectorAll('.card');

for (let index = 0; index < cards.length; index++) {
    const card = cards[index];
    
    card.addEventListener('click', function(){
        // console.log('clicked');

        // get the value
        const tittle = card.querySelector('h3').innerText;
        const prize = parseFloat(card.querySelector('span').innerText.split(" ")[1]);
        // console.log(prize)

        const tittleContainer = document.getElementById('title-container');
        const p = document.createElement('p');
        p.innerText = titleCount + '. ' + tittle;
        tittleContainer.appendChild(p);
        titleCount++;

        // calculate prize 

        // totalPrize = totalPrize + prize;
        totalPrize += prize;
        
        document.getElementById('totalPrice').innerText = totalPrize.toFixed(2);
    })
}

const btn = document.getElementById('apply-btn');
btn.addEventListener('click', function(){
    // console.log('clicked')

    // get value from input field
    const couponElement = document.getElementById('input-field').value;
    const couponCode = couponElement.split(" ").join("").toUpperCase();
    // console.log(couponCode)
    
    if(totalPrize >= 200){
        if(couponCode === 'SELL200'){
            // discount calculation
            const discountElement = document.getElementById('discountPrice');
            const discountAmount = totalPrize * 0.2;
            discountElement.innerText = discountAmount.toFixed(2);

            // rest calculation

            const restTotal = document.getElementById('total');
            restTotal.innerText = totalPrize - discountAmount.toFixed(2);
            document.getElementById('input-field').value = " ";

        }
        else{
            alert('Invalid Coupon Code')
            document.getElementById('input-field').value = " ";
        }
    }
    else{
        alert('You need spend minimum $200')
        document.getElementById('input-field').value = " ";
    }

})