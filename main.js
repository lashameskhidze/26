let productNumber = 1;

document.getElementById("getProductBtn")
document.addEventListener("click", function () {
    const apiUrl = `https://fakestoreapi.com/products/${productNumber}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        document.getElementById(
          "productName"
        ).innerText = `პროდუქტის სახელი: ${data.title}`;
        document.getElementById(
          "productPrice"
        ).innerText = `ფასი: $${data.price}`;

        productNumber++;
      })
      .catch((error) => {
        document.getElementById("productName").innerText =
          "შეცდომაა.";
        document.getElementById("productPrice").innerText = "";
      });
  });