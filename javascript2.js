<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dynamic Product Filter</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 20px;
    }
    h2 {
      margin-bottom: 10px;
    }
    select {
      padding: 8px;
      font-size: 16px;
      margin-bottom: 20px;
    }
    .product-list {
      display: flex;
      flex-wrap: wrap;
      gap: 15px;
    }
    .product {
      border: 1px solid #ccc;
      padding: 15px;
      width: 150px;
      text-align: center;
      border-radius: 5px;
      background-color: #f9f9f9;
      transition: transform 0.2s;
    }
    .product:hover {
      transform: scale(1.05);
      border-color: #333;
    }
  </style>
</head>
<body>

  <h2>Dynamic Product Filter</h2>

  <label for="filter">Filter by Category: </label>
  <select id="filter">
    <option value="all">All</option>
    <option value="clothing">Clothing</option>
    <option value="books">Books</option>
    <option value="gadgets">Gadgets</option>
  </select>

  <div class="product-list" id="productList">
    <div class="product" data-category="clothing">Jeans</div>
    <div class="product" data-category="clothing">T-Shirt</div>
    <div class="product" data-category="gadgets">Smartphone</div>
    <div class="product" data-category="books">Novel</div>
    <div class="product" data-category="books">cookbook</div>
    <div class="product" data-category="gadgets">Headphones</div>
  </div>

  <script>
    const filterDropdown = document.getElementById("filter");
    const products = document.querySelectorAll(".product");

    filterDropdown.addEventListener("change", function() {
      const selected = filterDropdown.value;

      products.forEach(product => {
        if (selected === "all" || product.getAttribute("data-category") === selected) {
          product.style.display = "block";
        } else {
          product.style.display = "none";
        }
      });
    });
  </script>

</body>
</html>
