let modalBtn = document.getElementById("modal-btn");
let modal = document.querySelector(".modal");
let closeBtn = document.querySelector(".close-btn");
var totalCartPrice = 0;
var prodQuantity01 = 0;
var prodQuantity02 = 0;
var prodQuantity03 = 0;
var prodPrice01 = 1000;
var prodPrice02 = 12000;
var prodPrice03 = 10000;

modalBtn.onclick = function () {
    var isValid = validateForm();
    if (isValid) {
        generateInvoice();
        modal.style.display = "block"
        modal.style.overflow = "scroll"
    }
}

closeBtn.onclick = function () {
    modal.style.display = "none"
    window.location.reload(false);
}

window.onclick = function (e) {
    if (e.target == modal) {
        modal.style.display = "none"
    }
}

function validateForm() {
    if (document.getElementById("form_name").value == "") {
        alert("Please enter name");
        return false;
    } else
    if (document.getElementById("form_email").value == "" || !document.getElementById("form_email").value
        .includes('@')) {
        alert('Please enter a valid email address');
        return false;
    } else
    if (document.getElementById("form_email").value == "") {
        alert('Please enter you number');
        return false;
    } else if (totalCartPrice == 0) {
        alert('Empty Cart. Please add items');
        return false;
    } else {
        return true;
    }

}

function generateInvoice() {
    var isValid = validateForm();
    if (isValid) {
        document.getElementById("modal_total_set").innerHTML = totalCartPrice + " LKR";
        if (prodQuantity01 > 0) {
            document.getElementById("prod_01").innerHTML =
                `<p>----------------------</p><div><p>Product : World Cup Football</p><p>Price : ${prodPrice01*prodQuantity01} LKR</p><p>Quantity : ${prodQuantity01}</p><div><p>----------------------</p>`;
        }
        if (prodQuantity02 > 0) {
            document.getElementById("prod_02").innerHTML =
                `<p>----------------------</p><div><p>Product : Ronaldo CR7 Boots</p><p>Price : ${prodPrice01*prodQuantity02} LKR</p><p>Quantity : ${prodQuantity02}</p><div><p>----------------------</p>`;
        }
        if (prodQuantity03 > 0) {
            document.getElementById("prod_03").innerHTML =
                `<p>----------------------</p><div><p>Product : Nike Boots</p><p>Price : ${prodPrice01*prodQuantity03} LKR</p><p>Quantity : ${prodQuantity03}</p><div><p>----------------------</p>`;
        }
    }

}
document.getElementsByName("name")[0].addEventListener('change', nameSet);
document.getElementsByName("email")[0].addEventListener('change', emailSet);
document.getElementsByName("phone")[0].addEventListener('change', phoneSet);

function nameSet() {
    document.getElementById("name_set").innerHTML = "";
    span = document.getElementById("name_set");
    txt = document.createTextNode(this.value);
    span.appendChild(txt);
}

function emailSet() {
    document.getElementById("email_set").innerHTML = "";
    span = document.getElementById("email_set");
    txt = document.createTextNode(this.value);
    span.appendChild(txt);
}

function phoneSet() {
    document.getElementById("phone_set").innerHTML = "";
    span = document.getElementById("phone_set");
    txt = document.createTextNode(this.value);
    span.appendChild(txt);
}

function calTotPrice(price, quantity) {
    var totalPrice = price * quantity;
    totalCartPrice = totalCartPrice + totalPrice;
    document.getElementById("total_set").innerHTML = totalCartPrice;
}

function removeFromCart(price, quantity) {
    var totalPrice = price * quantity;
    totalCartPrice = totalCartPrice - totalPrice;
    document.getElementById("total_set").innerHTML = totalCartPrice;
}

function incrementValueProd01() {
    var value = parseInt(document.getElementById('number_prod01').value, 10);
    value = isNaN(value) ? 0 : value;
    if (value < 10) {
        value++;
        prodQuantity01++;
        document.getElementById('number_prod01').value = value;
        calTotPrice(prodPrice01, value);

    }
}

function decrementValueProd01() {
    var value = parseInt(document.getElementById('number_prod01').value, 10);
    value = isNaN(value) ? 0 : value;
    if (value > 0) {
        value--;
        prodQuantity01--;
        document.getElementById('number_prod01').value = value;
        removeFromCart(prodPrice01, value + 1);

    }
}

function incrementValueProd02() {
    var value = parseInt(document.getElementById('number_prod02').value, 10);
    value = isNaN(value) ? 0 : value;
    if (value < 10) {
        value++;
        prodQuantity02++;
        document.getElementById('number_prod02').value = value;
        calTotPrice(prodPrice02, value);

    }
}

function decrementValueProd02() {
    var value = parseInt(document.getElementById('number_prod02').value, 10);
    value = isNaN(value) ? 0 : value;
    if (value > 0) {
        value--;
        prodQuantity02--;
        document.getElementById('number_prod02').value = value;
        removeFromCart(prodPrice02, value + 1);
    }
}

function incrementValueProd03() {
    var value = parseInt(document.getElementById('number_prod03').value, 10);
    value = isNaN(value) ? 0 : value;
    if (value < 10) {
        value++;
        prodQuantity03++;
        document.getElementById('number_prod03').value = value;
        calTotPrice(prodPrice03, value);
    }
}

function decrementValueProd03() {
    var value = parseInt(document.getElementById('number_prod03').value, 10);
    value = isNaN(value) ? 0 : value;
    if (value > 0) {
        value--;
        prodQuantity03--;
        document.getElementById('number_prod03').value = value;
        removeFromCart(prodPrice03, value + 1);
    }
}