function searchProduct() {
  const query = document.getElementById('search-box').value.toLowerCase();
  
  // Match search term with ID of product
  const ok = document.getElementById(query);
  
  if (ok) {
    ok.scrollIntoView({ behavior: 'smooth' });
  } else {
    alert("Product not found!");
  }
}
