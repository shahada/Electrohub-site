let selectedProduct = null;
let selectedPrice = 0;

function buyProduct(product, price) {
  selectedProduct = product;
  selectedPrice = price;
  alert(`You selected: ${product} (${price} BDT).\nSend payment to 01XXXXXXXXX.`);
}

function submitPayment() {
  const trxId = document.getElementById("trxId").value;
  if (!trxId) {
    alert("Please enter your bKash transaction ID.");
    return;
  }
  if (!selectedProduct) {
    alert("Please select a product first.");
    return;
  }

  alert(`Thank you! We have received your request for ${selectedProduct}.\nTransaction ID: ${trxId}`);
  // In a real app, you'd send this data to a server for confirmation.
}
