totalBill = document.querySelectorAll('.price-product1');
bill = document.querySelector('.bill-price-all');
var total = 0;
for (var i = 0; i < totalBill.length; i++) {
    a = totalBill[i].innerText.replace(/,/g, '.');
    total += parseFloat(a);
}
console.log(total);
bill.innerText = total + ' Triệu';

productItem = document.querySelectorAll('.html-cart-body-product');
clear = document.querySelectorAll('.clear-product1');
productNoItem = document.querySelector('.html-cart-body-no-product')
for (i = 0; i < clear.length; i++) {
    clear[i].addEventListener('click', function () {
        this.parentElement.parentElement.remove();
        totalBill = document.querySelectorAll('.price-product1');
        bill = document.querySelector('.bill-price-all');
        var total = 0;
        for (var i = 0; i < totalBill.length; i++) {
            a = totalBill[i].innerText.replace(/,/g, '.');
            total += parseFloat(a);
        }
        console.log(total);
        bill.innerText = total + ' Triệu';
        if (total == 0) {
            productNoItem.classList.add('openflex');
        }
        else {
            productNoItem.classList.remove('openflex');
        }
    });
}









