
var plusButtons = document.querySelectorAll('.cart-item #case-plus');
var minusButtons = document.querySelectorAll('.cart-item #case-minus');


plusButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        var quantityInput = button.parentNode.querySelector('input[type="number"]');
        var priceElement = button.closest('.cart-item').querySelector('#case-total');
        var price = parseFloat(priceElement.textContent);
        
        quantityInput.value = parseInt(quantityInput.value) + 1;
        
        var totalPrice = price * parseInt(quantityInput.value);
        priceElement.textContent = totalPrice.toFixed(2);
        
        updateTotal();
    });
});


minusButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        var quantityInput = button.parentNode.querySelector('input[type="number"]');
        var priceElement = button.closest('.cart-item').querySelector('#case-total');
        var price = parseFloat(priceElement.textContent);
        var currentQuantity = parseInt(quantityInput.value);
        if (currentQuantity > 0) {
            
            quantityInput.value = currentQuantity - 1;
            
            var totalPrice = price * parseInt(quantityInput.value);
            priceElement.textContent = totalPrice.toFixed(2);
            
            updateTotal();
        }
    });
});


var removeButtons = document.querySelectorAll('.cart-item .remove-item');

removeButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        var cartItem = button.closest('.cart-item');
        cartItem.parentNode.removeChild(cartItem); 
        updateTotal(); 
    });
});


function calculateTax(subTotal) {
    var taxRate = 0.15; // 15% ضريبة
    return subTotal * taxRate;
}


function updateTotal() {
    var totalPriceElements = document.querySelectorAll('.cart-item #case-total');
    var subTotal = 0;

    totalPriceElements.forEach(function(element) {
        subTotal += parseFloat(element.textContent);
    });

    var taxAmount = calculateTax(subTotal);
    var totalPrice = subTotal + taxAmount;

    document.getElementById('sub-total').textContent = subTotal.toFixed(2);
    document.getElementById('tax-amount').textContent = taxAmount.toFixed(2);
    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
}


updateTotal();



var checkoutButton = document.querySelector('.check-out');
checkoutButton.addEventListener('click', function() {
    
    alert('شكراً لك! تم استلام طلبك بنجاح.');
});
