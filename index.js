
let totalPrice = 0;

const cards = document.querySelectorAll('.card')
let cardCoun = 1;
for (let card of cards) {
    card.addEventListener('click', function () {
        const cardHeding = card.querySelector('h3').innerText;
        const cardPrice = card.querySelector('span').innerText;


        let headingContainer = getElementByIdName('title-container');
        let BtnContainer = getElementByIdName('btn-container');
        let Para = document.createElement('p')
        let price= document.createElement('p');
        let btn = document.createElement('button')
        btn.classList.add('btnn')

        Para.classList.add('paraS')
        price.innerHTML=cardPrice;
        btn.innerText="Cencel Item"
        Para.innerText = cardCoun + " " + cardHeding;
        headingContainer.appendChild(Para);
        Para.appendChild(price);
        Para.appendChild(btn);
        
        cardCoun++;



        let itemPrices = cardPrice.substring(1)
        let itemPrice = parseFloat(itemPrices);
        console.log(itemPrice);

        let totalBox = document.getElementById('totalPrice')
        let totalPricesText = totalBox.innerText;
        let totalPriceNum = parseFloat(totalPricesText)

        totalPrice = totalPriceNum + itemPrice;
        totalBox.innerText = totalPrice

        let finalPrice = document.getElementById('total')
        finalPrice.innerText = totalPrice

    })


}

let cencelBtn = getElementByIdName('title-container')

 cencelBtn.addEventListener('click',function(e){
    let ee = e.target
 
  if(ee.innerText==='Cencel Item'){
    cancelItem(ee)
    
    //   console.log(cancelItem(e));
    ee.parentElement.remove()
  }
 });



let applyBtn = getElementByIdName('apply-btn')
applyBtn.addEventListener('click', function () {
    let promoCode = getElementByIdName('input-field').value;
    // let valueIs = promoCode.value

    let promoCodeIs = promoCode.split(" ").join("");
    let trim = promoCodeIs.toLowerCase();
    if (trim === "sell200") {

        if (totalPrice > 200) {

            let discout = getElementByIdName('discountPrice')
            discout.innerText = discount20()


            let finalPrice = document.getElementById('total')
            finalPrice.innerText = totalPrice - discount20();

            // reset error box 
            let errorContainer = getElementByIdName('errorMsg');
            errorContainer.innerText = ' ';

        }
        else {
            let errorContainer = getElementByIdName('errorMsg')
            errorContainer.innerText = 'Please Make a purchase of $ 200 or more For Discount ';
        }

    }
    else {

        let errorContainer = getElementByIdName('errorMsg')
        errorContainer.innerText = '! Wrong Code. make sure ur code and space or digit  ';
    }

})

function discount20() {
    let totalBox = document.getElementById('totalPrice')
    let totalPricesText = totalBox.innerText;
    let totalPriceNum = parseFloat(totalPricesText);
    let discountedPrice = (totalPriceNum / 100) * 20;
    return discountedPrice.toFixed(2);

}


function cancelItem(target ){
    
    let targetText = target.previousSibling.innerText;
    let targetNumber = targetText.substring(1)



let totalBox = document.getElementById('totalPrice')
let totalPricesText = totalBox.innerText;
let totalPriceNum = parseFloat(totalPricesText)

totalPrice = totalPriceNum -targetNumber;
totalBox.innerText = totalPrice

let finalPrice = document.getElementById('total')
        finalPrice.innerText = totalPrice



}
console.log(totalPrice);