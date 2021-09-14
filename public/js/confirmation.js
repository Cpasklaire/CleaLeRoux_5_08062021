let urlParams;
let orderId;

urlParams = new URLSearchParams(window.location.search);
orderId = urlParams.get('orderId');
document.getElementById('orderId').innerHTML += orderId;
